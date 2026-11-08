import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { docsPath } from "@/i18n/content";
import type { Locale, SiteContent } from "@/i18n/content";

interface CtaProps {
  locale: Locale;
  cta: SiteContent["cta"];
  downloadHref: string;
}

export function Cta({ locale, cta, downloadHref }: CtaProps) {
  return <CtaSection
    variant="centered"
    title={cta.title}
    description={cta.description}
    primaryAction={{ label: cta.primary, href: downloadHref }}
    secondaryAction={{ label: cta.secondary, href: docsPath(locale) }}
    note={cta.note}
    faces={[]}
  />;
}

export default Cta;
