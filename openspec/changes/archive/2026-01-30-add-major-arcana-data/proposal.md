# Proposal: Add Major Arcana Card Data

## Summary

This proposal focuses on enriching the project's data by adding comprehensive information for all 22 Major Arcana Tarot cards. This includes their core theme, upright meanings, and reversed meanings, enhancing the existing basic card data setup.

## Motivation

The project currently uses placeholder data for only three Major Arcana cards. To provide a more complete and functional Tarot reading experience, it is essential to incorporate the full set of Major Arcana cards with their detailed interpretations, adhering to the data structure defined in `docs/data-structure.md`.

## Goals

* Integrate all 22 Major Arcana cards into the project's data (`data/` directory).
* Ensure each card's data includes `id`, `name` (multilingual), `emoji` character, `upright_meaning` (multilingual), `reversed_meaning` (multilingual), and `arcana` type (`major`).
* Update the card data loading mechanism in `src/main.js` to include all new Major Arcana cards.

## High-Level Plan

1. Create individual JSON files for each of the 22 Major Arcana cards in the `data/` directory, following the specified data structure, including an `emoji` field.
2. Update `src/main.js` to include the paths to all 22 Major Arcana JSON files in `CARD_DATA_PATHS` and handle emoji rendering.
3. Verify that all Major Arcana cards can be drawn and displayed correctly, using their emojis.
