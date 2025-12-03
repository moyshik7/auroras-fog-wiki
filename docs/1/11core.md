---
title: Core Mechanics
description: Welcome to Aurora's Fog Wiki
---
The mechanical backbone of Aurora’s Fog is a hybrid of survival simulation and role-playing progression. Unlike standard RPGs where progression is abstract (experience points leading to arbitrary levels), Aurora’s Fog employs a "usage-based" and "action-contingent" progression system that ties character growth directly to gameplay loops.

## Character Attributes
The protagonist is malleable. The game features a dynamic "Character Development" system where attributes are not static numbers on a spreadsheet but determinants of physical reality.

### Attribute-Based Morphology
A defining feature of the engine is that changing certain attributes directly alters the 3D appearance of the character. This suggests a morph-target system linked to stat variables.
- Strength and Build: Increases in strength correlate with muscular definition. This visual feedback loop replaces the traditional HUD-based level-up notification, immersing the player in the physical growth of the avatar.
- Attribute Caps and Bugs: During the v0.09.5 era, a bug was identified where attribute values could exceed their intended cap of 10 after a game restart. This indicates that the attribute scale is likely designed to function within a 0-10 integer range, a critical detail for wiki stat tables. 
- Buff/Debuff Visibility: A persistent issue addressed in v0.12 was the invisibility of attribute buffs and debuffs. The wiki must note that in versions prior to 0.12, players may be suffering from stat penalties without visual indicators in the UI. 


###  The Skill Progression Matrix
Skills in Aurora’s Fog improve as they are used, adhering to the "learning by doing" trope of classic RPGs (reminiscent of the Elder Scrolls series).
- **Combat Proficiency:** Proficiency is tracked per weapon type.
    - **Swords, Clubs, Knives:** Specific skill tracks exist for these categories.   
    - **Damage Scaling:** As the weapon skill level increases, the player gains addition damage to weapon damage. This creates a compounding power curve: better weapons deal more damage, and higher skill multiplies that base further.   
    - **Experience Gain:** Interestingly, when a skill level increases, the player gains general experience , linking specific mastery to global progression.
- **Survival and Utility Skills:**
    - **Healing:** This skill improves only when healing the hero using food or potions, and critically, only if the hero is not at full health. This prevents "spam-grinding" where players waste potions at full health to level up. The efficacy of food and potions is directly scaled by this skill.   
    - **Speech/Social:** Experience in the Speech skill is gained during dialogue. A nuanced mechanic introduced in v0.07 is that choosing a dialogue option that utilizes a specific Attribute yields 2x experience compared to standard responses. This encourages players to roleplay their character's strengths rather than choosing generic answers.   
    - **Blacksmithing:** This skill has evolved to include UI elements that display ore requirements in item descriptions , bridging the gap between character knowledge and player knowledge.   
    - **Swimming and Acrobatics:** These were added in later updates , expanding the traversal options of the character.  

## Hunger, Thirst, and Resource Management 
The survival layer forces players to engage with the environment constantly. This is not merely an optional side activity but a requisite for existence.

### Metabolic Requirements
The game tracks Hunger and Thirst.
- **The "Endless Death" Loop:** A critical bug identified in v0.07 caused characters to enter an infinite death loop when hunger/thirst reached 0. While fixed, this highlights the lethality of the system.   
- **Food Effects:** In a move to simulate the character's limited knowledge, the player initially sees only the "upper effect" of food. The full range of effects (buffs/debuffs) is hidden until the player achieves a sufficient level in Alchemy or Survival. This information obscurity adds a layer of risk to consuming unknown items early in the game.   

### Rest and Stamina
Stamina is the fuel for all physical actions.
- **Combat Impact:** Low stamina is debilitating. When stamina is low, the player attacks 20% slower and 20% weaker. This necessitates a tactical approach to combat; spamming attacks leads to exhaustion and vulnerability.   
- **Restoration:** Breath sounds and stamina regeneration rates have been tuned across versions. In v0.06.1, breath sounds were adjusted to start at 30% stamina, providing an audio cue for the "exhaustion state".   
- **Sleep Mechanics:** Sleeping is not just a time-skip; it resets the world state (respawning wolves)  and affects NPC behavior. Characters have specific "sleep" animations, and interacting with them during this state elicits different dialogue responses.   




