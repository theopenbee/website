"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import SegmentedControl from "../../segmented-control/segmented-control";
import { HeroLumen } from "./hero-lumen";
import { HeroRelay } from "./hero-relay";
import { HeroCadence } from "./hero-cadence";
import { HeroMesh } from "./hero-mesh";
import type { HeroMeshPoint } from "./hero-mesh";
import { HeroContent } from "./hero-content";
import type { HeroAction, HeroInstallCommand } from "./hero-content";
import styles from "./hero-section.module.css";

export { HeroCadence, HeroContent, HeroLumen, HeroMesh, HeroRelay };
export type { HeroAction, HeroInstallCommand, HeroMeshPoint };

export type HeroSectionVariant = "centered" | "split" | "minimal";

export interface HeroSectionProps {
  variant?: HeroSectionVariant;
  animateIn?: boolean;
  primaryAction?: HeroAction | null;
  secondaryAction?: HeroAction | null;
  title?: string;
  description?: string;
  announcement?: HeroAction | null;
  install?: HeroInstallCommand[] | null;
  media?: ReactNode;
  meta?: string[];
  highlight?: string;
  className?: string;
}

export function HeroSection({ variant = "centered", animateIn = true, primaryAction, secondaryAction, title, description, announcement, install, media, meta, className }: HeroSectionProps) {
  if (title) return <HeroContent layout={variant} title={title} description={description} announcement={announcement} primaryAction={primaryAction} secondaryAction={secondaryAction} install={install} media={media} meta={meta} animateIn={animateIn} className={className} />;
  const actions = { primaryAction: primaryAction ?? undefined, secondaryAction: secondaryAction ?? undefined };
  if (variant === "split") return <HeroRelay animateIn={animateIn} className={className} {...actions} />;
  if (variant === "minimal") return <HeroCadence animateIn={animateIn} className={className} {...actions} />;
  return <HeroLumen animateIn={animateIn} className={className} {...actions} />;
}

const variantOptions = [
  { value: "centered", label: "Screenshot" },
  { value: "split", label: "Workflow" },
  { value: "minimal", label: "Mesh" },
];

export function HeroSectionBlock({ variant: initial = "centered" }: { variant?: HeroSectionVariant }) {
  const [variant, setVariant] = useState<HeroSectionVariant>(initial);
  return <div className={styles.preview}>
    <HeroSection key={variant} variant={variant} />
    <div className={styles.switcher}>
      <SegmentedControl label="Hero design" options={variantOptions} value={variant} onValueChange={value => setVariant(value as HeroSectionVariant)} className={styles.switch} />
    </div>
  </div>;
}

export default HeroSectionBlock;
