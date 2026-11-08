import { SiteFooter } from "@/components/arc/blocks/site-footer/site-footer";
import { ISSUES_URL, RELEASES_URL, REPO_URL, X_URL, docsPath, localePath } from "@/i18n/content";
import type { Locale, SiteContent } from "@/i18n/content";
import styles from "./Footer.module.css";

interface FooterProps {
  locale: Locale;
  footer: SiteContent["footer"];
  year: number;
}

const blob = (path: string) => `${REPO_URL}/blob/main/${path}`;

export function Footer({ locale, footer, year }: FooterProps) {
  return <SiteFooter
    variant="columns"
    className={styles.footer}
    brand={{ name: "OpenBee", href: localePath(locale), mark: <img className={styles.mark} src="/logo-mark.svg" alt="" width={24} height={24} /> }}
    tagline={footer.tagline}
    columns={[
      { title: footer.product, links: [
        { label: footer.download, href: RELEASES_URL, external: true },
        { label: footer.docs, href: docsPath(locale) },
        { label: footer.plugins, href: docsPath(locale, "plugins") },
        { label: footer.changelog, href: blob("CHANGELOG.md"), external: true },
      ] },
      { title: footer.developers, links: [
        { label: footer.channelProtocol, href: docsPath(locale, "channel-plugin-protocol") },
        { label: footer.engineProtocol, href: docsPath(locale, "engine-plugin-protocol") },
        { label: footer.contributing, href: blob("CONTRIBUTING.md"), external: true },
        { label: footer.issues, href: ISSUES_URL, external: true },
      ] },
      { title: footer.language, links: [
        { label: "English", href: localePath("en") },
        { label: "中文", href: localePath("zh") },
      ] },
    ]}
    legal={[{ label: footer.license, href: blob("LICENSE"), external: true }]}
    socials={[
      { label: footer.github, href: REPO_URL, external: true },
      { label: "X", href: X_URL, external: true },
    ]}
    newsletter={null}
    status={null}
    year={year}
  />;
}

export default Footer;
