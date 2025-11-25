---
title: Technical Issues and Debugging
description: Welcome to Aurora's Fog Wiki
---
Since the game is in active development, significant portion of the user experience involves managing the game's stability.

## Common Bugs and Fixes
| Bug                       | Details                                                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Off-Center Menu**       | Caused by resolution mismatches. **Fix:** Delete the `Settings.json` file to reset configuration.                            |
| **Save Corruption**       | Saves from previous major versions (e.g., loading a 0.06 save in 0.08) are incompatible and will cause crashes or data loss. |
| **Money Division Bug**    | Users reported a bug where quest rewards were divided by 100 (receiving 10 coins instead of 1000).                           |
| **Inventory Duplication** | Recipes like Healing Powder could be duplicated, allowing infinite trade.                                                    |