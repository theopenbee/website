export type Locale = "en" | "zh";

export const REPO_URL = "https://github.com/theopenbee/openbee";
export const DOCS_URL = "https://docs.theopenbee.com";
export const RELEASES_URL = `${REPO_URL}/releases`;
export const ISSUES_URL = `${REPO_URL}/issues`;
export const X_URL = "https://x.com/0xtyz";

interface Link {
  label: string;
  href: string;
  external?: boolean;
}

interface Feature {
  icon: "chat" | "workers" | "schedule" | "anywhere" | "selfhost" | "plugins";
  title: string;
  text: string;
}

interface Step {
  title: string;
  text: string;
}

export interface SiteContent {
  lang: string;
  meta: { title: string; description: string };
  skipLink: string;
  nav: {
    label: string;
    features: string;
    howItWorks: string;
    getStarted: string;
    faq: string;
    docs: string;
    switchLocale: Link;
    download: string;
  };
  hero: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
    installLabel: string;
    meta: string[];
    screenshotAlt: string;
  };
  integrations: { title: string; description: string; labels: { pause: string; play: string; paused: string } };
  features: { title: string; description: string; items: Feature[] };
  howItWorks: {
    title: string;
    description: string;
    steps: Step[];
    sample: {
      label: string;
      you: string;
      request: string;
      bee: string;
      reply: string;
      handoff: string;
      task: string;
      worker: string;
      workerChat: string;
      result: string;
      time: string;
    };
  };
  getStarted: {
    title: string;
    description: string;
    tabsLabel: string;
    copyLabel: string;
    copiedLabel: string;
    desktopTab: string;
    serverTab: string;
    desktopIntro: string;
    downloadsLabel: string;
    version: string;
    releaseNotes: string;
    allDownloads: string;
    packageManagers: string;
    desktopNote: string;
    firstLaunch: Link;
    serverIntro: string;
    serverNote: string;
    serverDocs: Link;
    talkTitle: string;
    talkText: string;
    talkPrompt: string;
    platforms: Record<string, string>;
  };
  faq: {
    title: string;
    description: string;
    items: { id: string; question: string; answer: string }[];
    contact: { label: string; description: string };
  };
  cta: { title: string; description: string; primary: string; secondary: string; note: string };
  notFound: { title: string; description: string; home: string };
  footer: {
    tagline: string;
    product: string;
    developers: string;
    language: string;
    download: string;
    docs: string;
    changelog: string;
    plugins: string;
    github: string;
    issues: string;
    channelProtocol: string;
    engineProtocol: string;
    contributing: string;
    license: string;
  };
}

const en: SiteContent = {
  lang: "en",
  meta: {
    title: "OpenBee: build smarter AI teams",
    description: "OpenBee turns Claude Code, Codex or pi into a team of always-on workers you message from the desktop app, the browser or your chat app.",
  },
  skipLink: "Skip to content",
  nav: {
    label: "Main",
    features: "Features",
    howItWorks: "How it works",
    getStarted: "Get started",
    faq: "FAQ",
    docs: "Docs",
    switchLocale: { label: "中文", href: "/zh/" },
    download: "Download",
  },
  hero: {
    title: "Build smarter AI teams",
    description: "OpenBee turns the agent CLI you already use into a team of always-on workers. Message Bee, and it hands the job to the right worker. Results come back to your chat app, or to the worker's own chat in the desktop app and browser.",
    primary: "Download OpenBee",
    secondary: "View on GitHub",
    installLabel: "Install with Homebrew",
    meta: ["macOS, Windows and Linux", "Open source under AGPL-3.0", "Your data stays on your machine"],
    screenshotAlt: "Bee splits a release across three workers in the OpenBee desktop app",
  },
  integrations: {
    title: "Works with your agent CLI and chat apps",
    description: "OpenBee drives Claude Code, Codex or pi, and reaches you in the apps your team already uses.",
    labels: { pause: "Pause", play: "Play", paused: "Motion paused" },
  },
  features: {
    title: "A team that works where you already are",
    description: "Each worker is an agent CLI with its own job, folder and rules. Bee keeps them busy.",
    items: [
      { icon: "chat", title: "Delegate by chatting", text: "Say what you need. A worker does it on your machine and replies in your chat app, or in its own chat on the desktop and web." },
      { icon: "workers", title: "Run several agents at once", text: "Each worker has its own engine, working folder and rules, so jobs run side by side." },
      { icon: "schedule", title: "Schedule work", text: "Run a task now, after a delay, or on a cron schedule. Results reach the chat app that asked, or the worker's chat on the desktop and web." },
      { icon: "anywhere", title: "Reach it from anywhere", text: "Use the desktop app, the web console, or Lark, DingTalk, WeCom, WeChat, Telegram, Discord and Linear." },
      { icon: "selfhost", title: "Self-hosted", text: "It runs on your computer or server, and your data stays in ~/.openbee." },
      { icon: "plugins", title: "Plugins without restarts", text: "Install, configure and update engines and chat channels while OpenBee keeps running." },
    ],
  },
  howItWorks: {
    title: "How a task moves through your team",
    description: "You talk to one coordinator. Bee finds the right worker, and the worker reports back.",
    steps: [
      { title: "You message Bee", text: "Write to Bee from the desktop app, the browser or a chat app, in plain words." },
      { title: "Bee picks the worker", text: "Bee hands the job to the worker whose engine, folder and rules fit, or creates a new one." },
      { title: "The worker reports back", text: "The worker runs the job on your machine with your agent CLI. In a chat app the result lands in the same chat. In the desktop app and browser, open Bee's handoff card to see it in the worker's chat." },
    ],
    sample: {
      label: "Sample conversation",
      you: "You",
      request: "Fix the login redirect bug and add a regression test.",
      bee: "Bee",
      reply: "On it. Maya owns the API, so she has it.",
      handoff: "Handed off to Maya Lin",
      task: "Fix the login redirect bug and add a regression test",
      worker: "Maya Lin",
      workerChat: "Maya Lin's chat",
      result: "Fixed: the redirect keeps the return URL now. Regression test added, PR #212 is green.",
      time: "19:44",
    },
  },
  getStarted: {
    title: "Get started",
    description: "Pick the desktop app for your own computer, or the server for an always-on machine. Either way, you need Claude Code, Codex or pi installed and signed in.",
    tabsLabel: "Install options",
    copyLabel: "Copy code",
    copiedLabel: "Copied",
    desktopTab: "Desktop app",
    serverTab: "Server",
    desktopIntro: "The server is built in, so this is all you install. Open the app, create the admin account, then install the engine for your CLI under Settings → Plugins → Marketplace.",
    downloadsLabel: "Desktop downloads",
    version: "Version",
    releaseNotes: "Release notes",
    allDownloads: "All downloads",
    packageManagers: "Or use a package manager",
    desktopNote: "Builds are not code signed yet, so the system asks you to approve the app once.",
    firstLaunch: { label: "First launch", href: `${REPO_URL}/blob/main/docs/desktop.md#first-launch`, external: true },
    serverIntro: "Install the CLI from npm, start the server in the background and add an engine.",
    serverNote: "Open localhost:19876 and create the admin account. Swap claude for codex or pi.",
    serverDocs: { label: "Other install methods", href: `${REPO_URL}/blob/main/docs/server.md`, external: true },
    talkTitle: "Then talk to Bee",
    talkText: "Bee creates the worker. Hand it a task the same way.",
    talkPrompt: "Create a worker named Maya for backend fixes, working in ~/code/api.",
    platforms: {
      "mac-arm64": "macOS, Apple silicon",
      "mac-amd64": "macOS, Intel",
      "win-amd64": "Windows, x64",
      "win-arm64": "Windows, Arm64",
      "linux-amd64": "Linux, x64",
      "linux-arm64": "Linux, Arm64",
    },
  },
  faq: {
    title: "Questions and answers",
    description: "Still stuck? Open an issue and we will help.",
    items: [
      { id: "model", question: "Does OpenBee include an AI model?", answer: "No. OpenBee drives the agent CLI you already use (Claude Code, Codex or pi) with your own sign-in. It ships no model of its own." },
      { id: "cost", question: "Is OpenBee free?", answer: "Yes. OpenBee is open source under AGPL-3.0. You pay only for the agent CLI subscription or API usage you already have." },
      { id: "data", question: "Where does my data live?", answer: "On the machine that runs OpenBee. Workers, tasks and chats are stored in ~/.openbee on your computer or server." },
      { id: "edition", question: "Should I install the desktop app or the server?", answer: "Pick the desktop app for your own computer: the server is built in. Pick the server for an always-on machine, then reach it from the browser, a chat app or the client-only desktop build." },
      { id: "channels", question: "Which chat apps can I use?", answer: "Lark, DingTalk, WeCom, WeChat, Telegram, Discord and Linear, each through a channel plugin. The desktop app and the web console work without any plugin." },
      { id: "schedule", question: "Can workers run on a schedule?", answer: "Yes. A task runs now, after a delay, or on a cron schedule. In a chat app its result comes back to the chat that asked for it. In the desktop app and web console it shows up in the worker's own chat." },
      { id: "blocked", question: "The desktop app is blocked on first launch. What do I do?", answer: "Builds are not code signed yet. On macOS, right-click the app and choose Open, or use Open Anyway in System Settings → Privacy & Security. On Windows, click More info, then Run anyway." },
      { id: "plugins", question: "Can I write my own plugin?", answer: "Yes. Engines and chat channels are plugins, and both protocols are documented in the OpenBee repository." },
    ],
    contact: { label: "Open an issue", description: "Ask on GitHub" },
  },
  cta: {
    title: "Put your agent CLI to work",
    description: "Install OpenBee, sign in to your CLI, and give Bee its first task.",
    primary: "Download OpenBee",
    secondary: "Read the docs",
    note: "Free and open source under AGPL-3.0",
  },
  notFound: {
    title: "Page not found",
    description: "This page moved or never existed. The home page has everything about OpenBee.",
    home: "Go to the home page",
  },
  footer: {
    tagline: "Build smarter AI teams.",
    product: "Product",
    developers: "Developers",
    language: "Language",
    download: "Download",
    docs: "Docs",
    changelog: "Changelog",
    plugins: "Plugins",
    github: "GitHub",
    issues: "Issues",
    channelProtocol: "Channel plugin protocol",
    engineProtocol: "Engine plugin protocol",
    contributing: "Contributing",
    license: "AGPL-3.0 license",
  },
};

const zh: SiteContent = {
  lang: "zh-CN",
  meta: {
    title: "OpenBee：打造更聪明的 AI 团队",
    description: "OpenBee 把 Claude Code、Codex 或 pi 变成一支 7×24 小时在线的数字员工团队，在桌面应用、浏览器或聊天软件里派活。",
  },
  skipLink: "跳到正文",
  nav: {
    label: "主导航",
    features: "功能",
    howItWorks: "工作方式",
    getStarted: "快速开始",
    faq: "常见问题",
    docs: "文档",
    switchLocale: { label: "English", href: "/" },
    download: "下载",
  },
  hero: {
    title: "打造更聪明的 AI 团队",
    description: "OpenBee 把你已经在用的 Agent CLI 变成一支 7×24 小时在线的数字员工团队。给 Bee 发消息，它会把活派给合适的员工。结果回到你的聊天软件；在桌面应用和浏览器里，则回到员工自己的对话。",
    primary: "下载 OpenBee",
    secondary: "在 GitHub 上查看",
    installLabel: "用 Homebrew 安装",
    meta: ["支持 macOS、Windows 和 Linux", "AGPL-3.0 开源", "数据留在你自己的机器上"],
    screenshotAlt: "在 OpenBee 桌面版中，Bee 把一次发版拆给三名员工",
  },
  integrations: {
    title: "接入你的 Agent CLI 和聊天软件",
    description: "OpenBee 驱动 Claude Code、Codex 或 pi，并在团队常用的应用里和你对话。",
    labels: { pause: "暂停", play: "播放", paused: "已暂停滚动" },
  },
  features: {
    title: "一支就在你身边干活的团队",
    description: "每个员工都是一个 Agent CLI，有自己的职责、目录和规则，Bee 负责调度。",
    items: [
      { icon: "chat", title: "聊天就能派活", text: "说出需求，员工在你的机器上完成，在聊天软件里直接回复，在桌面应用和网页里则在自己的对话里回复。" },
      { icon: "workers", title: "多个 Agent 同时干活", text: "每个员工有自己的引擎、工作目录和规则，任务可以并行推进。" },
      { icon: "schedule", title: "定时任务", text: "任务可以立即执行、延时执行，或按 cron 周期执行。结果回到发起的聊天软件对话；在桌面应用和网页里，则在员工自己的对话里。" },
      { icon: "anywhere", title: "随处可用", text: "桌面应用、Web 控制台，或飞书、钉钉、企业微信、微信、Telegram、Discord、Linear。" },
      { icon: "selfhost", title: "自托管", text: "跑在你自己的电脑或服务器上，数据都在 ~/.openbee。" },
      { icon: "plugins", title: "插件免重启", text: "引擎和聊天渠道在 OpenBee 运行时即可安装、配置和更新。" },
    ],
  },
  howItWorks: {
    title: "一个任务如何在团队里流转",
    description: "你只需要和协调者 Bee 对话，它会找到合适的员工，由员工回报结果。",
    steps: [
      { title: "你给 Bee 发消息", text: "在桌面应用、浏览器或聊天软件里，用平常的话说出需求。" },
      { title: "Bee 挑选员工", text: "Bee 把活交给引擎、目录和规则都匹配的员工，没有合适的就新建一个。" },
      { title: "员工回报结果", text: "员工用你的 Agent CLI 在你的机器上完成任务。在聊天软件里，结果回到同一个对话；在桌面应用和浏览器里，点开 Bee 的交接卡片，在员工的对话里查看。" },
    ],
    sample: {
      label: "示例对话",
      you: "你",
      request: "修复登录跳转的 bug，并补一个回归测试。",
      bee: "Bee",
      reply: "收到。API 归林知夏负责，交给她了。",
      handoff: "已交给 林知夏",
      task: "修复登录跳转的 bug，并补一个回归测试",
      worker: "林知夏",
      workerChat: "林知夏的对话",
      result: "已修复：跳转现在会保留返回地址。回归测试已补上，PR #212 全绿。",
      time: "19:44",
    },
  },
  getStarted: {
    title: "快速开始",
    description: "自己的电脑选桌面版，常开的机器选服务端。两种方式都需要先装好并登录 Claude Code、Codex 或 pi。",
    tabsLabel: "安装方式",
    copyLabel: "复制",
    copiedLabel: "已复制",
    desktopTab: "桌面版",
    serverTab: "服务端",
    desktopIntro: "内置服务端，装这一个就够了。打开应用，创建管理员账号，然后在“设置 → 插件 → 插件市场”里安装你所用 CLI 对应的引擎。",
    downloadsLabel: "桌面版下载",
    version: "版本",
    releaseNotes: "更新说明",
    allDownloads: "全部下载",
    packageManagers: "也可以用包管理器安装",
    desktopNote: "发布包暂未做代码签名，首次打开时系统会要求你手动放行一次。",
    firstLaunch: { label: "首次打开", href: `${REPO_URL}/blob/main/docs/desktop.zh.md#首次打开`, external: true },
    serverIntro: "从 npm 安装命令行，在后台启动服务端，再装一个引擎。",
    serverNote: "打开 localhost:19876 并创建管理员账号。把 claude 换成 codex 或 pi 即可切换引擎。",
    serverDocs: { label: "其他安装方式", href: `${REPO_URL}/blob/main/docs/server.zh.md`, external: true },
    talkTitle: "然后，和 Bee 说话",
    talkText: "Bee 会创建这个员工。派任务也是一样，直接说。",
    talkPrompt: "帮我建一个员工，叫 Maya，负责后端修复，工作目录是 ~/code/api。",
    platforms: {
      "mac-arm64": "macOS，Apple 芯片",
      "mac-amd64": "macOS，Intel",
      "win-amd64": "Windows，x64",
      "win-arm64": "Windows，Arm64",
      "linux-amd64": "Linux，x64",
      "linux-arm64": "Linux，Arm64",
    },
  },
  faq: {
    title: "常见问题",
    description: "没找到答案？在 GitHub 上提个 issue。",
    items: [
      { id: "model", question: "OpenBee 自带 AI 模型吗？", answer: "不带。OpenBee 驱动你已经在用的 Agent CLI（Claude Code、Codex 或 pi），用的是你自己的登录账号，本身不带模型。" },
      { id: "cost", question: "OpenBee 收费吗？", answer: "免费。OpenBee 基于 AGPL-3.0 开源，你只需为已有的 Agent CLI 订阅或 API 用量付费。" },
      { id: "data", question: "数据存在哪里？", answer: "存在运行 OpenBee 的机器上。员工、任务和对话都保存在你电脑或服务器的 ~/.openbee 里。" },
      { id: "edition", question: "该装桌面版还是服务端？", answer: "自己的电脑选桌面版，它内置了服务端。常开的机器选服务端，再通过浏览器、聊天软件或纯客户端版桌面应用访问。" },
      { id: "channels", question: "支持哪些聊天软件？", answer: "飞书、钉钉、企业微信、微信、Telegram、Discord 和 Linear，各自通过渠道插件接入。桌面应用和 Web 控制台无需插件。" },
      { id: "schedule", question: "员工可以定时干活吗？", answer: "可以。任务可以立即执行、延时执行，或按 cron 周期执行。在聊天软件里，结果回到发起它的对话；在桌面应用和 Web 控制台里，结果在员工自己的对话里。" },
      { id: "blocked", question: "首次打开桌面版被系统拦截怎么办？", answer: "发布包暂未做代码签名。macOS 上右键点击应用选择“打开”，或在“系统设置 → 隐私与安全性”中点击“仍要打开”。Windows 上点击“更多信息”，再点击“仍要运行”。" },
      { id: "plugins", question: "可以自己写插件吗？", answer: "可以。引擎和聊天渠道都是插件，两种插件协议都在 OpenBee 仓库里有文档。" },
    ],
    contact: { label: "提交 issue", description: "在 GitHub 上提问" },
  },
  cta: {
    title: "让你的 Agent CLI 开始干活",
    description: "安装 OpenBee，登录你的 CLI，然后给 Bee 派第一个任务。",
    primary: "下载 OpenBee",
    secondary: "阅读文档",
    note: "基于 AGPL-3.0 免费开源",
  },
  notFound: {
    title: "页面不存在",
    description: "这个页面已经移走或从未存在，首页有 OpenBee 的全部介绍。",
    home: "返回首页",
  },
  footer: {
    tagline: "打造更聪明的 AI 团队。",
    product: "产品",
    developers: "开发者",
    language: "语言",
    download: "下载",
    docs: "文档",
    changelog: "更新日志",
    plugins: "插件",
    github: "GitHub",
    issues: "问题反馈",
    channelProtocol: "渠道插件协议",
    engineProtocol: "引擎插件协议",
    contributing: "贡献指南",
    license: "AGPL-3.0 许可证",
  },
};

export const content: Record<Locale, SiteContent> = { en, zh };

export function localePath(locale: Locale, hash = "") {
  return `${locale === "en" ? "/" : "/zh/"}${hash}`;
}
