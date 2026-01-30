## ADDED Requirements

### Requirement: Complete Major Arcana Data
The project SHALL include comprehensive static JSON data for all 22 Major Arcana cards.
#### Scenario: All Major Arcana Cards Available
Given the need for a full Major Arcana set,
When the application loads card data,
Then all 22 Major Arcana cards (from The Fool to The World) SHALL have their respective JSON data files in the `data/` directory.
And each JSON file SHALL conform to the card data structure defined in `docs/data-structure.md`.

### Requirement: Major Arcana Emoji Assets
The project SHALL provide emoji assets for all 22 Major Arcana cards.
#### Scenario: All Major Arcana Emojis Accessible
Given that a Major Arcana card is drawn,
When the card is displayed,
Then its corresponding emoji character SHALL be present in the card data and correctly displayed.

### Requirement: Dynamic Card Data Loading
The application SHALL dynamically load all available Major Arcana card data for use in drawing.
#### Scenario: All Major Arcana Loaded into Application
Given that new Major Arcana card data files are added to the `data/` directory,
When the application initializes,
Then `src/main.js` SHALL be configured to load all these Major Arcana card data files.
