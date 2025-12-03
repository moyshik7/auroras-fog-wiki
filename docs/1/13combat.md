---
title: Combat and Physics Architecture
description: Welcome to Aurora's Fog Wiki
---
## The Physics Overhaul (v0.07)
Version 0.07 introduced a physics-based approach to combat and equipment.

- **Head Damage Multiplier:** A critical addition for tactical gameplay. Headshots now deal multiplied damage, rewarding precision.   
- **Weapon Physics:** Weapons are physically attached to the character's belt. When equipped, they appear on the model, and the belt itself has physics simulation.   
- **Damage Types:** To diversify combat, damage was split into three categories: Blunt, Pierce, and Slash. This forces players to adapt their loadout to the armor type of their enemies.   
- **Blunt:** Hammers, Clubs.
- **Slash:** Axes, Swords.
- **Pierce:** Knives.

## Weapon Mechanics and Handling
Equipping and Inspection: Animations for equipping weapons were added to increase immersion. A specific "Weapon Inspection" mechanic allows players to check the condition of their weapon visually without opening the inventory menu.

- **Standardization of Types:** In a balancing pass, Two-Handed weapons were standardized to Hammers, and One-Handed weapons to Axes. Swords and Knives were added later as distinct categories with their own animation sets.   
- **Unarmed Combat:** The calculation for unarmed damage was refactored. Previously, weapon damage might have been added to unarmed strength; now, equipping a weapon replaces the unarmed damage value entirely.   
- **Kick Mechanics:** The speed of the kick animation was increased to reduce the delay after activation, making it a more viable interrupt tool.   

## Defense and Armor
Armor is not just a single integer value.

- **Light Armor Skill:** A specific skill for Light Armor improves when the player takes damage while wearing it.   
- **Condition Impact:** As armor degrades, its protection value decreases.