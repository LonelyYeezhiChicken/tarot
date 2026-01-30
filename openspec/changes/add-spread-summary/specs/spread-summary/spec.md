# spread-summary Specification

## ADDED Requirements

### Requirement: Spread Summary
The application SHALL display a summary of the reading after all cards have been revealed.

- **Rationale:** To provide a holistic interpretation of the spread.
- **Dependencies:** `ui-core`.

#### Scenario: Displaying the spread summary
- **Given** a user has revealed all cards in a spread.
- **When** the last card is flipped.
- **Then** a summary of the entire spread SHALL be displayed below the card narrative.
- **And** the summary SHALL provide an interpretation of the cards as a whole.
