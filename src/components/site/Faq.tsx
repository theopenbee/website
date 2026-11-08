import { FaqSection } from "@/components/arc/blocks/faq-section/faq-section";
import { ISSUES_URL } from "@/i18n/content";
import type { SiteContent } from "@/i18n/content";

interface FaqProps {
  faq: SiteContent["faq"];
}

export function Faq({ faq }: FaqProps) {
  return <FaqSection
    variant="accordion"
    title={faq.title}
    description={faq.description}
    items={faq.items}
    contact={{ label: faq.contact.label, description: faq.contact.description, href: ISSUES_URL }}
  />;
}

export default Faq;
