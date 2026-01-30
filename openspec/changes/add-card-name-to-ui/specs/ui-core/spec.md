# Spec: UI Core

This specification covers the foundational visual and behavioral aspects of the Tarot UI.

## MODIFIED Requirements

### Requirement: Minimalist Visual Style
The application SHALL use a minimalist visual style.
- **Rationale:** Aligns with **UI Skill 7** to create a calm, focused environment suitable for tarot reflection.
- **Dependencies:** None.

#### ADDED Scenario: Card Name Display
- **Given** a card has been revealed.
- **When** the card front is displayed.
- **Then** the card's name SHALL be visible as text on the card.
- **And** the text SHALL be styled to be readable but not obtrusive.