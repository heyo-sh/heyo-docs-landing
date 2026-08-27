import { heyoDocs } from "@heyo-sh/heyo-docs";

import { headerNavigation } from "./app/header-navigation";

export default heyoDocs({
  siteUrl: "https://docs.heyo.sh",
  title: "Heyo Docs example",
  description: "The thin React Router shell around the Heyo Docs runtime.",
  content: "content",
  theme: "grain",
  navigation: headerNavigation,
  groups: [
    {
      group: "Documentation",
      icon: "globe",
      sections: [
        {
          pages: [
            {
              icon: "book",
              page: "introduction",
            },
            {
              page: "quickstart",
              icon: "lightbulb",
            },
            {
              page: "resources/concept",
              icon: "book",
            },
          ],
        },
        {
          section: "Basic Styling",
          icon: "lightbulb",
          pages: [
            "basic-styling/text",
            "basic-styling/code",
            "basic-styling/lists",
            "basic-styling/tables",
          ],
        },
        {
          section: "Components",
          icon: "code",
          pages: [
            "components/accordion",
            "components/badge",
            "components/button",
            "components/callout",
            "components/code-block",
            "components/code-block-group",
            "components/code-snippet",
            "components/columns",
            "components/custom-components",
            "components/github",
            "components/hover-card",
            "components/mermaid",
            "components/properties",
            "components/related-topics",
            "components/steps",
            "components/tabs",
            "components/tree",
          ],
        },
        {
          section: "Media",
          icon: "folder",
          pages: ["media/images", "media/video", "media/files"],
        },
        {
          section: "OpenAPI",
          icon: "code",
          pages: [
            "openapi/setup",
            "openapi/schemas",
            "openapi/endpoints",
            "openapi/try-it",
          ],
        },
        {
          section: "Themes",
          icon: "sun",
          pages: ["themes/grain", "themes/shade", "themes/moss"],
        },
        {
          section: "Manage Website",
          icon: "cursor",
          pages: [
            "manage-website/configuration",
            "manage-website/site-identity",
            "manage-website/content",
            "manage-website/navigation",
            "manage-website/appearance",
            "manage-website/header-and-footer",
            "manage-website/icons",
            "manage-website/fonts",
          ],
        },
        {
          section: "Framework",
          icon: "gitRepository",
          pages: [
            "framework/react-router",
            "framework/astro",
            "framework/nextjs",
          ],
        },
        {
          section: "Deploying",
          icon: "globe",
          pages: ["deploying/cloudflare", "deploying/vercel"],
        },
        {
          section: "SEO & Search",
          icon: "search",
          pages: [
            "seo-and-search/search",
            "seo-and-search/robots",
            "seo-and-search/sitemap",
            "seo-and-search/json-ld",
            "seo-and-search/rss",
          ],
        },
        {
          section: "AI Agents",
          icon: "bot",
          pages: [
            "ai-agents/llms",
            "ai-agents/llms-full",
            "ai-agents/markdown-endpoints",
          ],
        },
      ],
    },
    {
      group: "Changelog",
      description: "Stay up to date with the latest changes and improvements.",
      icon: "time",
      type: "changelog",
      updates: ["changelog"],
    },
  ],
  footer: {
    github: "https://github.com/heyo-sh/heyo-docs",
    website: "https://docs.heyo.sh",
  },
  branding: { name: "Heyo Docs", logo: "/logo.svg" },
});
