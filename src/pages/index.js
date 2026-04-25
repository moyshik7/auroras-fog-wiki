import React from "react"
import Link from "@docusaurus/Link"
import Layout from "@theme/Layout"

const featureList = [
    {
        title: "Open World",
        description:
            "From the very beginning in the Kingdom, you see a huge world worth exploring. Find new villages, help the residents, and uncover the evil that has settled in the kingdom.",
    },
    {
        title: "Character Development",
        description:
            "Your character evolves depending on your actions. Changing Attributes alters your appearance, and Skills improve as they are used.",
    },
    {
        title: "Replayability",
        description:
            "Many quests and conflicts can be resolved in different ways — it all depends on your style of play.",
    },
    {
        title: "Crafting",
        description:
            "Discover recipes for alchemy, food, and armor. Follow them carefully — the most diligent players are rewarded with High-Quality items.",
    },
    {
        title: "Relationships",
        description:
            "The world is filled with characters who have their own histories. Deepen bonds to learn their pasts — and maybe engage in more... intimate joys.",
    },
    {
        title: "Unique Races",
        description:
            "From gentle Felines to fierce Minotauresses — each race has unique Skills and Abilities you can master by deepening your relationship with them.",
    },
]

const wikiHubs = [
    {
        title: "General Information",
        links: [
            { label: "Core Mechanics", to: "/1/11core/" },
            { label: "Crafting", to: "/crafting/" },
            { label: "Hunger & Thirst", to: "/1/11core#hunger-thirst-and-resource-management" },
            { label: "Combat", to: "/1/13combat/" },
            { label: "Geography", to: "/1/14geography/" },
            { label: "Updates", to: "/1/18updates/" },
        ],
    },
    {
        title: "Character Information",
        links: [
            { label: "Stats", to: "/1/11core/" },
            { label: "Status Effects", to: "/1/11core/" },
            { label: "Skills", to: "/1/11core/" },
            { label: "Buffs & Debuffs", to: "/1/11core/" },
            { label: "Hunger & Dehydration", to: "/1/11core#hunger-thirst-and-resource-management" },
            { label: "System Requirements", to: "/1/system/" },
        ],
    },
    {
        title: "World Information",
        links: [
            { label: "NPCs", to: "/npcs/" },
            { label: "Maps", to: "/maps/" },
            { label: "Herbs", to: "/herbs/" },
            { label: "Villages", to: "/maps/felis/" },
            { label: "Starting Zone", to: "/maps/starting/" },
            { label: "Bug Tracker", to: "/1/19bugs/" },
        ],
    },
    {
        title: "Guides & Walkthroughs",
        links: [
            { label: "Survival Guide", to: "/1/" },
            { label: "Herbs and Plants", to: "/herbs/" },
            { label: "Crafting & Cooking", to: "/crafting/" },
            { label: "NPC Routes", to: "/npcs/" },
            { label: "Changelog", to: "/1/18updates/" },
            { label: "System Setup", to: "/1/system/" },
        ],
    },
]

const quickLinks = [
    { label: "Start Here", to: "/1/" },
    { label: "Recipes", to: "/crafting/" },
    { label: "Herb Index", to: "/herbs/" },
    { label: "Map Hub", to: "/maps/" },
    { label: "NPC Hub", to: "/npcs/" },
    { label: "Combat", to: "/1/13combat/" },
]

const usefulLinks = [
    { label: "Download Game (Demo)", href: "https://catinmask.itch.io/aurorasfog" },
    { label: "Boosty Page (Full Game)", href: "https://boosty.to/aurorasfog" },
    { label: "Official YouTube Channel", href: "https://www.youtube.com/@catinmask" },
]

const gameInfo = [
    { label: "Status", value: "In development" },
    { label: "Platforms", value: "Windows · Linux (via Proton 9.0-4)" },
    { label: "Author", value: "CATINMASK" },
    { label: "Genre", value: "Role Playing, Survival" },
    { label: "Made with", value: "Unity" },
    { label: "Tags", value: "3D, Adult, Erotic, First-Person, Medieval, NSFW, Open World, Unity" },
    { label: "Avg. session", value: "A few hours" },
    { label: "Languages", value: "Bulgarian, English, Spanish, Portuguese (Brazil), Russian" },
    { label: "Inputs", value: "Keyboard, Mouse" },
    { label: "Accessibility", value: "Configurable controls" },
    { label: "AI Content", value: "No generative AI was used" },
]

export default function HomePage() {
    return (
        <Layout
            title="Aurora's Fog Wiki"
            description="Aurora's Fog Wiki: Guide, Walkthrough, Bosses, Secrets, Monsters, Skills and more."
        >
            <main className="af-home">
                {/* ── Ambient background ── */}
                <div className="af-home__bg" aria-hidden="true">
                    <span className="af-home__glow af-home__glow--one" />
                    <span className="af-home__glow af-home__glow--two" />
                    <span className="af-home__glow af-home__glow--three" />
                    <span className="af-home__grid" />
                </div>

                {/* ── Hero ── */}
                <section className="af-hero">
                    <div className="af-hero__image-wrap">
                        <img
                            src="/img/title.png"
                            alt="Aurora's Fog Game Logo"
                            className="af-hero__logo"
                            width="1200"
                            loading="eager"
                            fetchpriority="high"
                        />
                        <div className="af-hero__image-glow" aria-hidden="true" />
                    </div>

                    <div className="af-hero__content">
                        <p className="af-kicker">Aurora's Fog · Official Game Wiki</p>
                        <h1>Your Complete Guide to the Kingdom of Aurora</h1>
                        <p>
                            An 18+ story-driven open world RPG — explore a vast kingdom shrouded in mystery,
                            forge deep bonds with unique characters, and write your own legend.
                        </p>

                        <div className="af-signal-grid">
                            <div className="af-signal">
                                <strong>v0.12.6.2</strong>
                                <span>Current Version</span>
                            </div>
                            <div className="af-signal">
                                <strong>18+</strong>
                                <span>Mature Content</span>
                            </div>
                            <div className="af-signal">
                                <strong>6+</strong>
                                <span>Unique Races</span>
                            </div>
                        </div>

                        <div className="af-hero__actions">
                            <Link className="button button--primary button--lg af-btn af-btn--glow" to="/1/">
                                Start Exploring →
                            </Link>
                            <a
                                className="button button--lg af-btn af-btn--ghost"
                                href="https://catinmask.itch.io/aurorasfog"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Download Demo
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── Age gate notice ── */}
                <div className="af-notice" role="note">
                    <span className="af-notice__badge">18+</span>
                    <span>This wiki contains content for adults only. By browsing, you confirm you are 18 or older.</span>
                </div>

                {/* ── Quick navigation ── */}
                <section className="af-section-head" aria-label="Explore wiki">
                    <p>Browse by category</p>
                    <h2>Find What You Need in Seconds</h2>
                </section>

                <section className="af-chips" aria-label="Quick navigation">
                    {quickLinks.map((item) => (
                        <Link key={item.label} className="af-chip" to={item.to}>
                            {item.label}
                        </Link>
                    ))}
                </section>

                <aside className="af-search-tip" aria-label="Search tip">
                    Tip: Press <kbd>/</kbd> or use the search box in the top bar to jump directly to any recipe, herb, map, or NPC.
                </aside>

                {/* ── Wiki hub cards ── */}
                <section className="af-grid" aria-label="Wiki sections">
                    {wikiHubs.map((hub) => (
                        <article key={hub.title} className="af-card af-card--hub">
                            <h2>{hub.title}</h2>
                            <ul>
                                {hub.links.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.to}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </section>

                {/* ── Feature cards ── */}
                <section className="af-section-head" aria-label="Game features">
                    <p>What makes it special</p>
                    <h2>Game Features</h2>
                </section>

                <section className="af-features" aria-label="Features grid">
                    {featureList.map((f, i) => (
                        <article
                            key={f.title}
                            className="af-feature-card"
                            style={{ animationDelay: `${i * 60}ms` }}
                        >
                            <h3>{f.title}</h3>
                            <p>{f.description}</p>
                        </article>
                    ))}
                </section>

                {/* ── Updates + Links ── */}
                <section className="af-grid af-grid--bottom" aria-label="Updates and links">
                    <article className="af-card af-card--update">
                        <h2>Updates</h2>
                        <div className="af-update-row">
                            <span className="af-update-label">Current Version</span>
                            <span className="af-update-value af-update-value--green">v0.12.6.2</span>
                        </div>
                        <div className="af-update-row">
                            <span className="af-update-label">Next Update ETA</span>
                            <span className="af-update-value">December 2025</span>
                        </div>
                        <Link className="af-update-link" to="/1/18updates/">
                            View full changelog →
                        </Link>
                    </article>

                    <article className="af-card">
                        <h2>Helpful Links</h2>
                        <ul className="af-links">
                            {usefulLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} target="_blank" rel="noreferrer">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </article>
                </section>

                {/* ── Game Info ── */}
                <section className="af-section-head" aria-label="Game information">
                    <p>About the game</p>
                    <h2>Game Information</h2>
                </section>

                <article className="af-card af-card--info" aria-label="Game info table">
                    <table className="af-info-table">
                        <tbody>
                            {gameInfo.map((row) => (
                                <tr key={row.label}>
                                    <td className="af-info-table__label">{row.label}</td>
                                    <td className="af-info-table__value">{row.value}</td>
                                </tr>
                            ))}
                            <tr>
                                <td className="af-info-table__label">Linux</td>
                                <td className="af-info-table__value">
                                    Playable on Linux via{" "}
                                    <strong>Proton 9.0-4</strong>{" "}
                                    (Steam's compatibility layer)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </article>
            </main>
        </Layout>
    )
}
