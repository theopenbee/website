"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CircleAlert, Copy } from "lucide-react";
import { motionTokens } from "../lib/motion-tokens";
import { useCopyFeedback } from "../lib/use-copy-feedback";
import styles from "./copy-button.module.css";

export interface CopyButtonProps {
  value: string;
  label?: string;
  className?: string;
  iconOnly?: boolean;
  variant?: "outline" | "plain";
  disabled?: boolean;
  onCopied?: () => void;
  copiedLabel?: string;
  failedLabel?: string;
}

const ease = [...motionTokens.ease.standard] as [number, number, number, number];
const show = { duration: .16, ease } as const;
const hide = { duration: .1, ease } as const;
const instant = { duration: 0 } as const;
const resize = { type: "spring", visualDuration: .22, bounce: 0 } as const;

function DrawnCheck({ reduced }: { reduced: boolean }) {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <motion.path d="M4 12l5 5L20 6" initial={reduced ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .22, ease, delay: .04 }} />
  </svg>;
}

export function CopyButton({ value, label = "Copy", className, iconOnly = false, variant = "outline", disabled, onCopied, copiedLabel = "Copied", failedLabel = "Failed" }: CopyButtonProps) {
  const { state, copy } = useCopyFeedback();
  const reduced = useReducedMotion() ?? false;
  const text = state === "copied" ? copiedLabel : state === "error" ? failedLabel : label;
  const measures = useRef<Record<string, HTMLSpanElement | null>>({});
  const [widths, setWidths] = useState<Record<string, number>>({});
  useLayoutEffect(() => {
    if (iconOnly) return;
    const read = () => setWidths(Object.fromEntries(Object.entries(measures.current).map(([key, node]) => [key, node?.offsetWidth ?? 0])));
    read();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(read);
    Object.values(measures.current).forEach(node => { if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, [label, iconOnly]);
  const width = widths[state === "copied" ? "copied" : state === "error" ? "error" : "idle"];
  const [shown, setShown] = useState<number | undefined>(undefined);
  const first = shown === undefined;
  if (width !== undefined && width !== shown) setShown(width);

  async function handleCopy() {
    if (await copy(value)) onCopied?.();
  }

  return <><button
    type="button"
    className={[styles.button, iconOnly && styles.iconOnly, variant === "plain" && styles.plain, className].filter(Boolean).join(" ")}
    onClick={() => void handleCopy()}
    aria-label={label}
    data-copy-state={state}
    disabled={disabled}
  >
    <span className={styles.icon} aria-hidden="true">
      <AnimatePresence initial={false}>
        <motion.span key={state} className={styles.iconInner} data-state={state}
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, transition: reduced ? instant : hide }} transition={reduced ? instant : show}>
          {state === "copied" ? <DrawnCheck reduced={reduced} /> : state === "error" ? <CircleAlert size={16} strokeWidth={1.75} /> : <Copy size={16} strokeWidth={1.75} />}
        </motion.span>
      </AnimatePresence>
    </span>
    {!iconOnly && <motion.span className={styles.label} aria-hidden="true" initial={false} animate={width ? { width } : undefined} transition={reduced || first ? instant : resize}>
      <span ref={node => { measures.current.idle = node; }} className={styles.measure}>{label}</span>
      <span ref={node => { measures.current.copied = node; }} className={styles.measure}>{copiedLabel}</span>
      <span ref={node => { measures.current.error = node; }} className={styles.measure}>Failed</span>
      <AnimatePresence initial={false}>
        <motion.span key={text} className={styles.text} initial={reduced ? { opacity: 0 } : { opacity: 0, y: 2 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: reduced ? instant : hide }} transition={reduced ? instant : show}>{text}</motion.span>
      </AnimatePresence>
    </motion.span>}
  </button><span className={styles.srOnly} role="status" aria-live="polite">{state === "idle" ? "" : state === "error" ? `${label}: ${failedLabel}` : `${label}: ${copiedLabel}`}</span></>;
}
