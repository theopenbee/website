import { SiteHeader } from "@/components/arc/blocks/site-header/site-header";
import { docsPath, localePath } from "@/i18n/content";
import type { Locale, SiteContent } from "@/i18n/content";
import styles from "./Header.module.css";

interface HeaderProps {
  locale: Locale;
  nav: SiteContent["nav"];
}

export function Header({ locale, nav }: HeaderProps) {
  return <SiteHeader
    variant="simple"
    label={nav.label}
    brand={{ name: "OpenBee", href: localePath(locale), mark: <img className={styles.mark} src="/logo-mark.svg" alt="" width={28} height={28} /> }}
    items={[
      { value: "features", label: nav.features, href: localePath(locale, "#features") },
      { value: "how-it-works", label: nav.howItWorks, href: localePath(locale, "#how-it-works") },
      { value: "get-started", label: nav.getStarted, href: localePath(locale, "#get-started") },
      { value: "faq", label: nav.faq, href: localePath(locale, "#faq") },
      { value: "docs", label: nav.docs, href: docsPath(locale) },
    ]}
    secondaryAction={{ label: nav.switchLocale.label, href: nav.switchLocale.href }}
    primaryAction={{ label: nav.download, href: localePath(locale, "#get-started") }}
  />;
}

export default Header;
