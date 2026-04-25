// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer"

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Aurora's Fog Wiki",
    tagline: "Aurora's Fog is a story of adventures of a little man in the wonderful Kingdom of Aurora, shrouded in secrets, riddles, and princesses who are waiting for you to save them",
    favicon: "img/favicon.png",

    url: "https://aurorasfog.vercel.app",
    baseUrl: "/",

    organizationName: "moyshik7", // Usually your GitHub org/user name.
    projectName: "auroras-fog-wiki", // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: "warn",
    onBrokenAnchors: "log",

    markdown: {
        hooks: {
            onBrokenMarkdownLinks: "warn",
        },
    },

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    editUrl: "https://github.com/moyshik7/auroras-fog-wiki/tree/main/",
                    routeBasePath: "/",
                    showLastUpdateTime: true,
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    plugins: [
        require.resolve("./src/plugins/tailwind-config.js"),
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                docsRouteBasePath: "/",
                indexDocs: true,
                indexBlog: false,
                indexPages: true,
                hashed: true,
                language: ["en"],
                highlightSearchTermsOnTargetPage: true,
                explicitSearchResultPath: true,
                searchBarShortcut: true,
                searchBarShortcutHint: true,
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "dark",
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            // Replace with your project's social card
            image: "logo.png",
            navbar: {
                hideOnScroll: true,
                title: "Aurora's Fog Wiki",
                logo: {
                    alt: "Aurora's Fog Wiki Logo",
                    src: "logo.png",
                },

                items: [
                    {
                        to: "/1/",
                        label: "Game Guide",
                        position: "left",
                    },
                    {
                        to: "/crafting/",
                        label: "Crafting",
                        position: "left",
                    },
                    {
                        to: "/herbs/",
                        label: "Herbs",
                        position: "left",
                    },
                    {
                        to: "/maps/",
                        label: "Maps",
                        position: "left",
                    },
                    {
                        to: "/npcs/",
                        label: "NPCs",
                        position: "left",
                    },
                    {
                        type: "search",
                        position: "right",
                    },
                    {
                        href: "https://github.com/moyshik7/auroras-fog-wiki",
                        label: "Contribute",
                        position: "right",
                    },
                    {
                        href: "https://catinmask.itch.io/aurorasfog",
                        label: "Download",
                        position: "right",
                    },
                ],
            },

            docs: {
                sidebar: {
                    hideable: true,
                    autoCollapseCategories: true,
                },
            },

            prism: {
                theme: prismThemes.dracula,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ["csharp", "java", "javascript", "php", "ruby"],
            },
        }),
}

export default config
