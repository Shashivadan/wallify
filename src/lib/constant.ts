export const isProduction = process.env.NODE_ENV === "production";

export const SITE_URL = isProduction
  ? "https://webapp.com"
  : "http://localhost:3000";

export const GITHUB_USERNAME = "webapp-user";

export const SITE_NAME = "webapp";
export const SITE_TITLE = "webapp: modern web application";
export const SITE_DESCRIPTION = "A modern web application for various tasks.";
export const SITE_KEYWORDS = [
  "wallpapers",
  "wallpaper",
  "pfp",
  "profile picture",
  "TypeScript",
  "Node.js",
  "default image",
  "og image",
];

export const SITE_GITHUB_URL = "https://github.com/shashivadan";
export const SITE_X_URL = "https://x.com/webapp/shashivadan99";
export const SITE_YOUTUBE_URL = "https://www.youtube.com/";
