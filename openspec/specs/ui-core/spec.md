# ui-core Specification

## Purpose
TBD - created by archiving change implement-tarot-ui-skills. Update Purpose after archive.
## Requirements
### Requirement: Minimalist Visual Style
The application SHALL use a minimalist visual style.
- **Rationale:** Aligns with **UI Skill 7** to create a calm, focused environment suitable for tarot reflection.
- **Dependencies:** None.

#### ADDED Scenario: Card Name Display
- **Given** a card has been revealed.
- **When** the card front is displayed.
- **Then** the card's name SHALL be visible as text on the card.
- **And** the text SHALL be styled to be readable but not obtrusive.

### Requirement: Stateless User Session
The application SHALL provide a stateless user session.
- **Rationale:** Aligns with **UI Skill 8**. Tarot readings are ephemeral and should not be persisted, simplifying the user experience and technical design.
- **Dependencies:** None.

#### Scenario: Restarting a reading
- **Given** a user has already drawn and revealed some or all cards in a spread.
- **When** the user clicks the "Restart" or "Draw New Reading" button.
- **Then** the entire card display area SHALL be cleared and returned to its initial pre-draw state.
- **And** any in-memory data related to the previous reading (e.g., drawn cards, orientations) SHALL be discarded.
- **And** the user SHALL be able to immediately start a new reading.

### Requirement: Clear UI Feedback
The UI SHALL provide clear feedback for its state.
- **Rationale:** Aligns with **UI Skill 10** to ensure users understand what the application is doing without needing instructions.
- **Dependencies:** None.

#### Scenario: Initial state
- **Given** the user has just loaded the application.
- **When** the main view is rendered.
- **Then** the UI SHALL display instructional text prompting the user to select a spread and draw cards.
- **Example:** "Select a spread and click 'Draw Cards' to begin."

### Requirement: HTML Structure and Entry Point
The application SHALL use `index.html` as its entry point.

- **Rationale:** Standard practice for web applications and required for GitHub Pages to serve content from the repository root.
- **Dependencies:** None.

#### Scenario: Application entry point
- **Given** the application is deployed.
- **When** a user navigates to the application's base URL.
- **Then** the `index.html` file located in the repository root SHALL be served.
- **And** the `index.html` file SHALL correctly link to `style.css` in the root and `src/main.js` for its logic.

