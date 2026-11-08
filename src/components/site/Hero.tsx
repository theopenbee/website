import type { ReactNode } from "react";
import { HeroContent } from "@/components/arc/blocks/hero-section/hero-content";
import { REPO_URL } from "@/i18n/content";
import type { SiteContent } from "@/i18n/content";
import styles from "./Hero.module.css";

interface HeroProps {
  hero: SiteContent["hero"];
  downloadHref: string;
  children?: ReactNode;
}

export function Hero({ hero, downloadHref, children }: HeroProps) {
  return <HeroContent
    layout="centered"
    className={styles.hero}
    title={hero.title}
    description={hero.description}
    primaryAction={{ label: hero.primary, href: downloadHref }}
    secondaryAction={{ label: hero.secondary, href: REPO_URL, external: true }}
    install={[{ label: hero.installLabel, command: "npm install -g @theopenbee/cli" }]}
    meta={hero.meta}
    media={<div className={styles.frame}>{children}</div>}
  />;
}

export default Hero;
