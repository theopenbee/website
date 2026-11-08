import { ArrowUpRight, Download } from "lucide-react";
import { CodeBlock } from "@/components/arc/code-block/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/arc/tabs/tabs";
import type { SiteContent } from "@/i18n/content";
import type { LatestRelease } from "@/lib/release";
import styles from "./QuickStart.module.css";

interface QuickStartProps {
  copy: SiteContent["getStarted"];
  release: LatestRelease;
}

const DESKTOP_BREW = "brew install --cask theopenbee/tap/openbee-desktop";
const DESKTOP_SCOOP = "scoop bucket add theopenbee https://github.com/theopenbee/scoop-bucket\nscoop install theopenbee/openbee-desktop";
const SERVER = "npm install -g @theopenbee/cli\nopenbee server -d\nopenbee plugin install claude";

function External({ href, children }: { href: string; children: string }) {
  return <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" /></a>;
}

export function QuickStart({ copy, release }: QuickStartProps) {
  return <section id="get-started" className="section" aria-labelledby="get-started-title">
    <div className="section-head">
      <h2 id="get-started-title" className="section-title">{copy.title}</h2>
      <p className="section-description">{copy.description}</p>
    </div>
    <Tabs defaultValue="desktop" className={styles.tabs}>
      <TabsList aria-label={copy.tabsLabel}>
        <TabsTrigger value="desktop">{copy.desktopTab}</TabsTrigger>
        <TabsTrigger value="server">{copy.serverTab}</TabsTrigger>
      </TabsList>
      <TabsContent value="desktop">
        <div className={styles.panel}>
          <div className={styles.column}>
            <p className={styles.lead}>{copy.desktopIntro}</p>
            <ul className={styles.downloads} aria-label={copy.downloadsLabel}>
              {release.downloads.map(item => <li key={item.id}>
                <a className={styles.download} href={item.href}>
                  <span>{copy.platforms[item.id]}</span>
                  <span className={styles.file}>{item.file}<Download size={16} strokeWidth={1.75} aria-hidden="true" /></span>
                </a>
              </li>)}
            </ul>
            <p className={styles.meta}>
              {release.version && <span>{copy.version} {release.version}</span>}
              <External href={release.notesUrl}>{copy.releaseNotes}</External>
              <External href={release.notesUrl}>{copy.allDownloads}</External>
            </p>
          </div>
          <div className={styles.column}>
            <h3 className={styles.subtitle}>{copy.packageManagers}</h3>
            <CodeBlock code={DESKTOP_BREW} filename="macOS" language="bash" copyLabel={copy.copyLabel} copiedLabel={copy.copiedLabel} />
            <CodeBlock code={DESKTOP_SCOOP} filename="Windows" language="powershell" copyLabel={copy.copyLabel} copiedLabel={copy.copiedLabel} />
            <p className={styles.note}>{copy.desktopNote} <External href={copy.firstLaunch.href}>{copy.firstLaunch.label}</External></p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="server">
        <div className={styles.panel}>
          <div className={styles.column}>
            <p className={styles.lead}>{copy.serverIntro}</p>
            <CodeBlock code={SERVER} filename="Terminal" language="bash" copyLabel={copy.copyLabel} copiedLabel={copy.copiedLabel} />
          </div>
          <div className={styles.column}>
            <p className={styles.note}>{copy.serverNote} <External href={copy.serverDocs.href}>{copy.serverDocs.label}</External></p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
    <div className={styles.talk}>
      <div className={styles.talkCopy}>
        <h3 className={styles.subtitle}>{copy.talkTitle}</h3>
        <p className={styles.note}>{copy.talkText}</p>
      </div>
      <blockquote className={styles.prompt}><p>{copy.talkPrompt}</p></blockquote>
    </div>
  </section>;
}

export default QuickStart;
