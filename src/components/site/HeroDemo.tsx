import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ArrowRight, ArrowUp, ChevronDown, ChevronLeft, Paperclip, Plus, Search, Settings, SquarePen } from "lucide-react";
import type { DemoMessage, DemoWorker, HeroDemo as HeroDemoCopy } from "@/i18n/content";
import styles from "./HeroDemo.module.css";

const BEE = "bee";
const CLOCK_START = 19 * 60 + 45;
const BEE_DELAY = 900;
const HANDOFF_DELAY = 700;
const WORKER_DELAY = 1400;
const MAX_LENGTH = 500;

interface Entry extends DemoMessage {
  id: number;
  fresh?: boolean;
}

interface Chat {
  messages: Entry[];
  unread: number;
  busy: boolean;
  rank: number;
  yesterday: boolean;
}

type Chats = Record<string, Chat>;

function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length > 1) return parts.slice(0, 2).map(part => part[0]?.toUpperCase()).join("");
  return /^[\x00-\x7F]+$/.test(name) ? name.slice(0, 2).toUpperCase() : name.slice(-2);
}

function formatClock(minutes: number) {
  const hours = Math.floor(minutes / 60) % 24;
  return `${String(hours).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

function initialChats(copy: HeroDemoCopy): Chats {
  let id = 0;
  const entries = (messages: DemoMessage[]) => messages.map(message => ({ ...message, id: id++ }));
  const chats: Chats = { [BEE]: { messages: entries(copy.bee), unread: 0, busy: false, rank: 0, yesterday: false } };
  copy.workers.forEach((worker, index) => {
    chats[worker.id] = { messages: entries(worker.messages), unread: worker.unread, busy: false, rank: -index, yesterday: !!worker.yesterday };
  });
  return chats;
}

function BeeAvatar({ size = "md" }: { size?: "sm" | "md" }) {
  return <span className={[styles.avatar, styles.bee, styles[size]].join(" ")} aria-hidden="true">
    <img src="/logo-mark.svg" alt="" width="24" height="24" />
  </span>;
}

function WorkerAvatar({ worker, size = "md" }: { worker: DemoWorker; size?: "sm" | "md" }) {
  return <span className={[styles.avatar, styles[worker.tone], styles[size]].join(" ")} aria-hidden="true">
    {initials(worker.name)}
    <i className={[styles.status, styles[worker.status]].join(" ")} />
  </span>;
}

export function HeroDemo({ copy }: { copy: HeroDemoCopy }) {
  const [chats, setChats] = useState<Chats>(() => initialChats(copy));
  const [active, setActive] = useState(BEE);
  const [showList, setShowList] = useState(false);
  const [query, setQuery] = useState("");
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const activeRef = useRef(active);
  const nextId = useRef(1000);
  const clock = useRef(CLOCK_START);
  const rank = useRef(1);
  const timers = useRef<number[]>([]);
  const log = useRef<HTMLDivElement>(null);
  const composing = useRef(false);

  const workers = new Map(copy.workers.map(worker => [worker.id, worker]));
  const chat = chats[active];
  const activeWorker = workers.get(active);
  const name = activeWorker?.name ?? copy.beeName;
  const draft = drafts[active] ?? "";

  useEffect(() => () => timers.current.forEach(timer => window.clearTimeout(timer)), []);

  useEffect(() => {
    const node = log.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [active, chat.messages.length, chat.busy, showList]);

  function later(delay: number, run: () => void) {
    timers.current.push(window.setTimeout(run, delay));
  }

  function update(id: string, change: (chat: Chat) => Partial<Chat>) {
    setChats(current => ({ ...current, [id]: { ...current[id], ...change(current[id]) } }));
  }

  function post(id: string, message: DemoMessage, busy = false) {
    const entry: Entry = { ...message, id: nextId.current++, fresh: true };
    const bump = id === BEE ? 0 : rank.current++;
    update(id, current => ({
      messages: [...current.messages, entry],
      unread: id === activeRef.current || message.from === "you" ? current.unread : current.unread + 1,
      busy,
      rank: id === BEE ? current.rank : bump,
    }));
  }

  function open(id: string) {
    activeRef.current = id;
    setActive(id);
    setShowList(false);
    update(id, () => ({ unread: 0 }));
  }

  function send() {
    const text = draft.trim();
    if (!text) return;
    const target = active;
    const time = formatClock(clock.current++);
    setDrafts(current => ({ ...current, [target]: "" }));
    post(target, { from: "you", time, text }, true);
    if (target !== BEE) {
      later(WORKER_DELAY, () => post(target, { from: "worker", time, text: copy.workerReply }));
      return;
    }
    const helper = copy.handoffWorker;
    const helperName = workers.get(helper)?.name ?? "";
    later(BEE_DELAY, () => post(BEE, { from: "bee", time, text: fill(copy.beeReply, { name: helperName }) }, true));
    later(BEE_DELAY + HANDOFF_DELAY, () => {
      post(BEE, { from: "bee", time, handoff: { worker: helper, task: text } });
      post(helper, { from: "bee", time, text }, true);
    });
    later(BEE_DELAY + HANDOFF_DELAY + WORKER_DELAY, () => post(helper, { from: "worker", time, text: copy.workerReply }));
  }

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey || event.nativeEvent.isComposing || composing.current) return;
    event.preventDefault();
    send();
  }

  function preview(id: string) {
    const last = chats[id].messages.at(-1);
    if (!last) return "";
    if (last.handoff) return fill(copy.handedOffTo, { name: workers.get(last.handoff.worker)?.name ?? "" });
    return last.text ?? "";
  }

  function rowTime(id: string) {
    const current = chats[id];
    const last = current.messages.at(-1);
    if (current.yesterday && !current.messages.some(message => message.fresh)) return copy.yesterday;
    return last?.time ?? "";
  }

  const needle = query.trim().toLowerCase();
  const rows = [BEE, ...copy.workers.map(worker => worker.id).sort((a, b) => chats[b].rank - chats[a].rank)]
    .filter(id => !needle || (workers.get(id)?.name ?? copy.beeName).toLowerCase().includes(needle));

  function sender(message: Entry) {
    if (message.from === "bee") return { name: copy.beeName, avatar: <BeeAvatar size="sm" /> };
    const worker = activeWorker!;
    return { name: worker.name, avatar: <WorkerAvatar worker={worker} size="sm" /> };
  }

  return <div className={styles.root}><div className={styles.demo} data-view={showList ? "list" : "chat"} role="region" aria-label={copy.label}>
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <label className={styles.search}>
          <Search size={16} strokeWidth={1.75} aria-hidden="true" />
          <input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={copy.search} aria-label={copy.search} />
        </label>
        <span className={styles.glyph} aria-hidden="true"><Plus size={18} strokeWidth={1.75} /></span>
      </div>
      <ul className={styles.list}>
        {rows.map(id => {
          const worker = workers.get(id);
          const current = chats[id];
          return <li key={id}>
            <button type="button" className={styles.row} aria-current={id === active ? "true" : undefined} onClick={() => open(id)}>
              {worker ? <WorkerAvatar worker={worker} /> : <BeeAvatar />}
              <span className={styles.rowText}>
                <span className={styles.rowLine}>
                  <span className={styles.rowName}>{worker?.name ?? copy.beeName}</span>
                  <span className={styles.rowTime}>{rowTime(id)}</span>
                </span>
                <span className={styles.rowLine}>
                  <span className={styles.rowPreview}>{preview(id)}</span>
                  {current.unread > 0 && <span className={styles.badge} aria-label={fill(copy.unread, { count: current.unread })}>{current.unread}</span>}
                </span>
              </span>
            </button>
          </li>;
        })}
        {rows.length === 0 && <li className={styles.empty}>{copy.noResults}</li>}
      </ul>
      <div className={styles.account} aria-hidden="true">
        <span className={styles.accountAvatar}>{copy.account.slice(0, 1).toUpperCase()}</span>
        <span className={styles.accountName}>{copy.account}</span>
        <ChevronDown size={14} strokeWidth={1.75} />
        <Settings className={styles.settings} size={18} strokeWidth={1.75} />
      </div>
    </aside>

    <section className={styles.chat} aria-label={name}>
      <header className={styles.header}>
        <button type="button" className={styles.back} onClick={() => setShowList(true)} aria-label={copy.back}>
          <ChevronLeft size={18} strokeWidth={1.75} aria-hidden="true" />
        </button>
        {activeWorker ? <WorkerAvatar worker={activeWorker} /> : <BeeAvatar />}
        <span className={styles.headerText}>
          <span className={styles.headerName}>{name}</span>
          <span className={styles.headerSub}>
            {activeWorker ? `${activeWorker.engine} · ${activeWorker.description}` : chat.busy ? copy.working : copy.idle}
          </span>
        </span>
        <span className={styles.glyph} aria-hidden="true"><SquarePen size={18} strokeWidth={1.75} /></span>
      </header>

      <div ref={log} className={styles.log} role="log" aria-live="polite">
        <div className={styles.thread}>
          {chat.yesterday && <p className={styles.day}>{copy.yesterday}</p>}
          {chat.messages.map(message => {
            const fresh = message.fresh ? styles.fresh : undefined;
            if (message.from === "you") {
              return <div key={message.id} className={[styles.own, fresh].filter(Boolean).join(" ")}>
                <time className={styles.time}>{message.time}</time>
                <p className={styles.bubble}>{message.text}</p>
              </div>;
            }
            const who = sender(message);
            const target = message.handoff ? workers.get(message.handoff.worker) : undefined;
            return <div key={message.id} className={[styles.message, fresh].filter(Boolean).join(" ")}>
              {who.avatar}
              <div className={styles.body}>
                <span className={styles.meta}><span className={styles.sender}>{who.name}</span><time className={styles.time}>{message.time}</time></span>
                {message.handoff && target ? <button type="button" className={styles.handoff} onClick={() => open(target.id)}>
                  <WorkerAvatar worker={target} />
                  <span className={styles.handoffText}>
                    <span className={styles.handoffTitle}>{fill(copy.handedOffTo, { name: target.name })}<ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" /></span>
                    <span className={styles.handoffTask}>{message.handoff.task}</span>
                    {message.handoff.cron && <span className={styles.schedule}><span className={styles.chip}>{copy.recurring}</span><code>{message.handoff.cron}</code></span>}
                  </span>
                </button> : <p className={styles.bubble}>{message.text}</p>}
              </div>
            </div>;
          })}
        </div>
      </div>

      {chat.busy && <div className={styles.activity} role="status">
        {activeWorker ? <WorkerAvatar worker={activeWorker} size="sm" /> : <BeeAvatar size="sm" />}
        <span className={styles.shimmer}>{copy.working}</span>
      </div>}

      <form className={styles.composer} onSubmit={event => { event.preventDefault(); send(); }}>
        <textarea
          rows={1}
          value={draft}
          maxLength={MAX_LENGTH}
          placeholder={fill(copy.placeholder, { name })}
          aria-label={fill(copy.placeholder, { name })}
          onChange={event => setDrafts(current => ({ ...current, [active]: event.target.value }))}
          onKeyDown={onKeyDown}
          onCompositionStart={() => { composing.current = true; }}
          onCompositionEnd={() => later(0, () => { composing.current = false; })}
        />
        <div className={styles.composerBar}>
          <Paperclip className={styles.attach} size={16} strokeWidth={1.75} aria-hidden="true" />
          <span className={styles.hint}>{copy.hint}</span>
          <button type="submit" className={styles.send} disabled={!draft.trim()} aria-label={copy.send}>
            <ArrowUp size={16} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </form>
    </section>
  </div></div>;
}

export default HeroDemo;
