import { CtaSection } from "@/components/arc/blocks/cta-section/cta-section";
import { DOCS_URL } from "@/i18n/content";
import type { SiteContent } from "@/i18n/content";

interface CtaProps {
  cta: SiteContent["cta"];
  downloadHref: string;
}

export function Cta({ cta, downloadHref }: CtaProps) {
  return <CtaSection
    variant="centered"
    title={cta.title}
    description={cta.description}
    primaryAction={{ label: cta.primary, href: downloadHref }}
    secondaryAction={{ label: cta.secondary, href: DOCS_URL }}
    note={cta.note}
    faces={[]}
  />;
}

export default Cta;
