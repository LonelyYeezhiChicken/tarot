# Spec: Data and Rendering

This specification defines how the application loads its data and renders the initial tarot spread layouts.

## ADDED Requirements

### Requirement: Offline Functionality
The application SHALL be able to function offline after the initial load.
- **Rationale:** Aligns with **UI Skill 9**. An internet connection should not be required to perform a reading once the page is loaded. The current implementation already fetches data on load, but this requirement formalizes and refines it.
- **Dependencies:** None.

#### Scenario: Loading application data
- **Given** the user loads the application for the first time.
- **When** the page is ready (`DOMContentLoaded`).
- **Then** the application SHALL fetch all required tarot card data from local JSON files.
- **And** the application SHALL fetch all required tarot spread definitions from local JSON files.
- **And** this data SHALL be stored in memory for the duration of the session.
- **And** there SHALL be no further network calls to fetch card or spread data during the session.

## ADDED Requirements

### Requirement: Dynamic Spread Rendering
The UI SHALL render spread layouts dynamically from a spread definition.
- **Rationale:** Aligns with **UI Skill 3**. The layout of cards should not be hardcoded but generated based on a structured data format, allowing for easy addition of new spreads.
- **Dependencies:** `data-rendering/offline-first` (must have spread data loaded).

#### Scenario: Rendering a three-card spread
- **Given** the user has selected the "Three-Card Spread".
- **And** the user has initiated a draw.
- **When** the application is ready to display the cards.
- **Then** the UI SHALL render exactly three card elements.
- **And** each card's position SHALL correspond to the `positions` array in the `three-card-spread.json` definition.
- **And** each card position SHALL have an associated title or prompt (e.g., "Past", "Present", "Future") visible to the user at the appropriate time.

#### Scenario: Rendering a one-card spread
- **Given** the user has selected the "One-Card Spread".
- **And** the user has initiated a draw.
- **When** the application is ready to display the cards.
- **Then** the UI SHALL render exactly one card element in the display area.
