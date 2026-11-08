import { LogoMarquee } from "@/components/arc/blocks/logo-marquee/logo-marquee";
import type { SiteContent } from "@/i18n/content";

interface IntegrationsProps {
  integrations: SiteContent["integrations"];
}

const BRANDS = [
  { name: "Claude Code", icon: "/logos/claude-code.svg" },
  { name: "Codex", icon: "/logos/codex.svg" },
  { name: "pi", icon: "/logos/pi.svg" },
  { name: "Lark", icon: "/logos/lark.svg" },
  { name: "DingTalk", icon: "/logos/dingtalk.svg" },
  { name: "WeCom", icon: "/logos/wecom.svg" },
  { name: "WeChat", icon: "/logos/wechat.svg" },
  { name: "Telegram", icon: "/logos/telegram.svg" },
  { name: "Discord", icon: "/logos/discord.svg" },
  { name: "Linear", icon: "/logos/linear.svg" },
];

export function Integrations({ integrations }: IntegrationsProps) {
  return <LogoMarquee title={integrations.title} description={integrations.description} brands={BRANDS} tone="mono" labels={integrations.labels} />;
}

export default Integrations;
