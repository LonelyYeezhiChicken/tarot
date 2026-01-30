# tarot-spreads Specification

## Purpose
TBD - created by archiving change add-tarot-spreads. Update Purpose after archive.
## Requirements
### Requirement: Three-Card Spread Definition
The project SHALL define the "Three-Card Spread" including its structure, position meanings, and purpose.
#### Scenario: Three-Card Spread Available
Given the need for a quick, focused reading,
When the application offers spread selection,
Then the "Three-Card Spread" SHALL be an available option,
And its definition SHALL be stored in a JSON file (e.g., `data/spreads/three-card-spread.json`) with:
- A unique `id` and `name`.
- A description of its `purpose` (e.g., "快速、聚焦、單一問題").
- An ordered list of `positions`, each with `id`, `meaning` (multilingual), and `keywords` (e.g., "過去 / 起因").

### Requirement: Five-Card Spread Definition
The project SHALL define the "Five-Card Spread" including its structure, position meanings, and purpose.
#### Scenario: Five-Card Spread Available
Given the need for a more analytical reading,
When the application offers spread selection,
Then the "Five-Card Spread" SHALL be an available option,
And its definition SHALL be stored in a JSON file (e.g., `data/spreads/five-card-spread.json`) with:
- A unique `id` and `name`.
- A description of its `purpose` (e.g., "分析型、拆問題、找解法").
- An ordered list of `positions`, each with `id`, `meaning` (multilingual), and `keywords` (e.g., "現況").

### Requirement: Spread Data Storage
All Tarot card spread definitions SHALL be stored as static JSON files within the `data/spreads/` directory.
#### Scenario: Spread JSON Files Exist
Given new Tarot spreads are added,
When the application loads spread definitions,
Then each spread SHALL have its own JSON file in the `data/spreads/` directory.

### Requirement: User Interface for Spread Selection
The application SHALL provide a user interface element to select between available Tarot spreads.
#### Scenario: Spread Selection UI Present
Given the availability of multiple spreads,
When the user accesses the application,
Then a control (e.g., radio buttons, dropdown) SHALL be present to allow the user to choose a spread.

### Requirement: Dynamic Spread Rendering Logic
The application SHALL dynamically render the selected number of cards and their position meanings based on the chosen spread.
#### Scenario: Selected Spread Displays Correctly
Given a user selects a specific spread (e.g., Three-Card Spread),
When the "Draw Card" button is clicked,
Then the application SHALL draw the corresponding number of cards (e.g., 3 for Three-Card Spread),
And each drawn card SHALL be displayed along with the meaning of its position within that spread.

