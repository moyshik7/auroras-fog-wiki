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

    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",

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
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    stylesheets: ["https://raw.githubusercontent.com/moyshik7/auroras-fog-wiki/main/src/css/custom.css"],

    onBrokenAnchors: "log",

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "dark",
            },
            // Replace with your project's social card
            image: "logo.png",
            navbar: {
                title: "Home",

                logo: {
                    alt: "Aurora's Fog Wiki Logo",
                    src: "logo.png",
                },

                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "right",
                        label: "Docs",
                    }, {
                        href: "https://github.com/moyshik7/auroras-fog-wiki",
                        label: "Community GitHub",
                        position: "right",
                    }, {
                        href: "https://catinmask.itch.io/aurorasfog",
                        label: "Download Game",
                        position: "right",
                    }, 
                ],
            },

            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ["csharp", "java", "javascript", "php", "ruby"],
            },
        }),
}

export default config
