/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wikiSidebar: [
    {
      type: "category",
      label: "Start Here",
      collapsible: false,
      items: ["1/index", "1/11core", "1/13combat", "1/14geography", "1/system", "1/18updates", "1/19bugs"],
    },
    {
      type: "category",
      label: "Crafting Recipes",
      link: { type: "doc", id: "crafting/index" },
      items: [
        "crafting/nails",
        "crafting/candles",
        "crafting/seaweed-soup",
        "crafting/fish-soup",
        "crafting/chicory-tea",
        "crafting/nettle-soup",
        "crafting/steamed-turnip",
        "crafting/vegetable-soup",
        "crafting/baked-wolf-meat",
        "crafting/baked-bear-meat",
        "crafting/parenki",
        "crafting/fried-saffron-milk-cup",
        "crafting/chamomile-decoction",
      ],
    },
    {
      type: "category",
      label: "Herbs and Plants",
      link: { type: "doc", id: "herbs/index" },
      items: ["herbs/chamomile", "herbs/cornflower", "herbs/poppy", "herbs/bouncing-bet", "herbs/rhododendron", "herbs/cattail", "herbs/nettle", "herbs/pumpkin", "herbs/seaweed"],
    },
    {
      type: "category",
      label: "World Maps",
      link: { type: "doc", id: "maps/index" },
      items: ["maps/starting", "maps/felis"],
    },
    {
      type: "category",
      label: "NPC Compendium",
      link: { type: "doc", id: "npcs/index" },
      items: ["npcs/brynja", "npcs/shaartan", "npcs/yotra"],
    },
  ],
}

export default sidebars;
