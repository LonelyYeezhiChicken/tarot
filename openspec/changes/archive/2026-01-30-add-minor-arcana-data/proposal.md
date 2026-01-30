# Proposal: Add Minor Arcana Card Data

## Summary

This proposal aims to comprehensively add all 56 Minor Arcana Tarot cards to the project's data. This includes detailed information for each card across the four suits (Wands, Cups, Swords, Pentacles), enhancing the project's full card set. Consistent with the Major Arcana, cards will be represented by emojis.

## Motivation

To provide a complete Tarot reading experience, integrating all 78 cards is essential. Having already incorporated the Major Arcana, this proposal extends the card data to include the Minor Arcana, ensuring detailed interpretations and emoji representation for each card.

## Goals

* Integrate all 56 Minor Arcana cards into the project's data (`data/` directory).
* Ensure each card's data includes `id`, `name` (multilingual), `emoji` character, `core_meaning` (multilingual), `upright_meaning` (multilingual), `reversed_meaning` (multilingual), `arcana` type (`minor`), `suit`, and `rank`.
* Update the card data loading mechanism in `src/main.js` to include all new Minor Arcana cards.

## Non-Goals

* Implementing UI changes specific to Minor Arcana cards beyond their basic display.
* Implementing advanced card drawing logic (e.g., specific spreads).

## High-Level Plan

1. Create individual JSON files for each of the 56 Minor Arcana cards in the `data/` directory, following the specified data structure, including an `emoji` field, `suit`, and `rank`.
2. Update `src/main.js` to include the paths to all 56 Minor Arcana JSON files in `CARD_DATA_PATHS` and handle emoji rendering.
3. Verify that all Minor Arcana cards can be drawn and displayed correctly, using their emojis.
