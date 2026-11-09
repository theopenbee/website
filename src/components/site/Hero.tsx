import { HeroContent } from "@/components/arc/blocks/hero-section/hero-content";
import { REPO_URL } from "@/i18n/content";
import type { SiteContent } from "@/i18n/content";
import { HeroDemo } from "./HeroDemo";
import styles from "./Hero.module.css";

interface HeroProps {
  hero: SiteContent["hero"];
  downloadHref: string;
}

export function Hero({ hero, downloadHref }: HeroProps) {
  return <HeroContent
    layout="centered"
    className={styles.hero}
    title={hero.title}
    description={hero.description}
    primaryAction={{ label: hero.primary, href: downloadHref }}
    secondaryAction={{ label: hero.secondary, href: REPO_URL, external: true }}
    install={[{ label: hero.installLabel, command: "npm install -g @theopenbee/cli" }]}
    meta={hero.meta}
    media={<div className={styles.frame}><HeroDemo copy={hero.demo} /></div>}
  />;
}

export default Hero;
