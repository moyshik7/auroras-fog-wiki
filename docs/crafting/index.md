---
title: Crafting System
description: Crafting System of the game Aurora's Fog
---

Crafting is arguably the most complex system in Aurora’s Fog, distinguishing itself through a requirement for recipe adherence and procedural steps. It is not a "click-and-receive" system but a "prepare-and-execute" simulation.


## ITEMS THAT CAN BE CRAFTED AT BLACKSMITHING STATION
- [NAILS](./nails/)

## COOKED ITEMS
- [SEAWEED SOUP](./seaweed-soup/)
- [Fish Soup](./fish-soup/)

## POTIONS
- Chamomile Decoction


## Recipe Adherence and Quality
The game enforces a strict "follow the recipe" rule. Deviating from the instructions results in failure or the creation of items with the "Terrible" quality level.   
- **Quality Tiers:** The game rewards "attentive and diligent" players with High-Quality items. Intermediate quality levels were planned to add flexibility.   
- **Recipe Acquisition:** Recipes are found in the world or bought. World-found recipes can be in "bad condition," making them hard to read. Traders sell higher-quality versions of these recipes, creating an economy around knowledge.   
- **Visual Interface:** The recipe UI has been overhauled to display ingredients in the form they were added (e.g., chopped vs. whole). 


## The Cooking and Alchemy Process
Crafting involves multiple stages of ingredient processing.
- **Preparation States:** Ingredients can be set to different states: Nothing, Cut, Grind, Boil/Heat Water. This implies that a "Carrot" and a "Cut Carrot" are distinct inputs in the crafting logic.   
- **Fuel Management:** Heat sources (ovens, furnaces) require firewood. In earlier versions, this was manual. As of v0.09.5, firewood is added automatically, and crafting cannot start if the fuel source is empty.   
- **Fluid Mechanics:** The introduction of the Jug and Water Jug in v0.09.5 added a fluid management layer. Players must physically take water from a jug during crafting, likely requiring them to refill these jugs at water sources in the world.   
- **Time Management:** Players can set the duration of the craft 1, suggesting that longer cooking times might affect quality or "doneness."


## Smithing and Repair
Equipment degradation is a constant threat.
- **Repair Mechanics:** A specific "Repair" item type exists.   
- **The Workbench:** A pivotal crafting station. Players can purchase a workbench from Yotra (the blacksmith) to install in their home. This station allows for independent repairs and the crafting of weapon/armor modifications.   
- **Lockpick Durability:** Even lockpicks have persistent durability states saved across game sessions , preventing "save-scumming" to preserve tools.


