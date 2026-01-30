# Spec: UI Core

This specification covers the foundational visual and behavioral aspects of the Tarot UI.

## ADDED Requirements

### Requirement: Minimalist Visual Style
The application SHALL use a minimalist visual style.
- **Rationale:** Aligns with **UI Skill 7** to create a calm, focused environment suitable for tarot reflection.
- **Dependencies:** None.

#### Scenario: Initial Page Load
- **Given** the user opens the application in their browser.
- **When** the page finishes loading.
- **Then** the page background SHALL be a neutral or dark color.
- **And** the UI SHALL use a limited, cohesive color palette.
- **And** all text SHALL use a font that prioritizes readability.
- **And** there SHALL be no excessive or distracting animations on load.

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
