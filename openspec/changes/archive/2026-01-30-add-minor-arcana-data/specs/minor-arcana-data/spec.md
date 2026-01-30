## ADDED Requirements

### Requirement: Complete Minor Arcana Data
The project SHALL include comprehensive static JSON data for all 56 Minor Arcana cards across the four suits.
#### Scenario: All Minor Arcana Cards Available
Given the need for a full Minor Arcana set,
When the application loads card data,
Then all 56 Minor Arcana cards (Wands, Cups, Swords, Pentacles, from Ace to King) SHALL have their respective JSON data files in the `data/` directory.
And each JSON file SHALL conform to the card data structure defined in `docs/data-structure.md`, including `emoji`, `suit`, and `rank` fields.

### Requirement: Dynamic Card Data Loading for Minor Arcana
The application SHALL dynamically load all available Minor Arcana card data for use in drawing.
#### Scenario: All Minor Arcana Loaded into Application
Given that new Minor Arcana card data files are added to the `data/` directory,
When the application initializes,
Then `src/main.js` SHALL be configured to load all these Minor Arcana card data files.
