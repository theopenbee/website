import { RELEASES_URL } from "@/i18n/content";

export interface DesktopDownload {
  id: string;
  file: string;
  href: string;
}

export interface LatestRelease {
  version: string | null;
  notesUrl: string;
  downloads: DesktopDownload[];
}

const PLATFORMS = [
  { id: "mac-arm64", pattern: /^openbee-desktop-[\w.-]+-darwin-arm64\.dmg$/ },
  { id: "mac-amd64", pattern: /^openbee-desktop-[\w.-]+-darwin-amd64\.dmg$/ },
  { id: "win-amd64", pattern: /^openbee-desktop-[\w.-]+-windows-amd64-setup\.exe$/ },
  { id: "win-arm64", pattern: /^openbee-desktop-[\w.-]+-windows-arm64-setup\.exe$/ },
  { id: "linux-amd64", pattern: /^openbee-desktop-[\w.-]+-linux-amd64\.deb$/ },
  { id: "linux-arm64", pattern: /^openbee-desktop-[\w.-]+-linux-arm64\.deb$/ },
];

const FALLBACK_FILES: Record<string, string> = {
  "mac-arm64": ".dmg",
  "mac-amd64": ".dmg",
  "win-amd64": ".exe",
  "win-arm64": ".exe",
  "linux-amd64": ".deb",
  "linux-arm64": ".deb",
};

interface GitHubRelease {
  tag_name: string;
  html_url: string;
  assets: { name: string; browser_download_url: string }[];
}

function fallback(): LatestRelease {
  return {
    version: null,
    notesUrl: `${RELEASES_URL}/latest`,
    downloads: PLATFORMS.map(({ id }) => ({ id, file: FALLBACK_FILES[id]!, href: `${RELEASES_URL}/latest` })),
  };
}

function extension(name: string) {
  return name.endsWith("-setup.exe") ? ".exe" : name.slice(name.lastIndexOf("."));
}

let cached: Promise<LatestRelease> | undefined;

async function fetchLatest(): Promise<LatestRelease> {
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  try {
    const response = await fetch("https://api.github.com/repos/theopenbee/openbee/releases/latest", { headers });
    if (!response.ok) throw new Error(`GitHub responded ${response.status}`);
    const release = (await response.json()) as GitHubRelease;
    const downloads = PLATFORMS.map(({ id, pattern }) => {
      const asset = release.assets.find(item => pattern.test(item.name));
      return asset ? { id, file: extension(asset.name), href: asset.browser_download_url } : null;
    });
    if (downloads.some(item => item === null)) throw new Error("latest release is missing desktop assets");
    return { version: release.tag_name.replace(/^v/, ""), notesUrl: release.html_url, downloads: downloads as DesktopDownload[] };
  } catch (error) {
    console.warn(`[release] falling back to the releases page: ${(error as Error).message}`);
    return fallback();
  }
}

export function getLatestRelease() {
  cached ??= fetchLatest();
  return cached;
}
