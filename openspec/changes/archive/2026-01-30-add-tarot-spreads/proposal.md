# Proposal: Add Tarot Card Spreads (Three-Card and Five-Card)

## Summary

This proposal outlines the addition of two fundamental Tarot card spreads, the "Three-Card Spread" and the "Five-Card Spread," to the project. It defines their purpose, structure, and interpretation guidelines, enabling users to perform readings with defined patterns.

## Motivation

The current project allows drawing individual cards but lacks the functionality for structured readings. Implementing common spreads will significantly enhance the user experience by providing context and depth to the card interpretations, moving towards a more complete Tarot reading application.

## Goals

* Define the "Three-Card Spread" including its positions and interpretation.
* Define the "Five-Card Spread" including its positions and interpretation.
* Store spread definitions in a structured format (e.g., JSON) within the `data/` directory.
* Integrate spread selection into the application (UI and logic).

## Non-Goals

* Implementing complex spread visualization beyond basic display of cards in sequence.
* Advanced UI for custom spread creation.
* Integrating advanced interpretation logic based on card combinations beyond individual card meanings.

## High-Level Plan

1. Define JSON structures for the "Three-Card Spread" and "Five-Card Spread" rules.
2. Create JSON files for each spread definition in the `data/` directory.
3. Update `docs/data-structure.md` to reflect the new spread data structures.
4. Modify the application UI to allow selection between single card draw, three-card spread, and five-card spread.
5. Implement JavaScript logic to handle drawing cards for selected spreads and displaying them according to the spread's structure.
