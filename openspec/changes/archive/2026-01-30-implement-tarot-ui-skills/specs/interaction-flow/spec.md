# Spec: Interaction Flow

This specification details the user-facing interaction model for drawing, shuffling, and revealing tarot cards.

## ADDED Requirements

### Requirement: Explicit Card Draw
Drawing cards SHALL be an explicit, non-interruptible user action.
- **Rationale:** Aligns with **UI Skill 1**. The act of drawing should feel intentional. Preventing simultaneous draws ensures a stable UI state.
- **Dependencies:** `data-rendering/dynamic-layout`.

#### Scenario: User draws cards
- **Given** the user has selected a spread.
- **When** the user clicks the "Draw Cards" button.
- **Then** the "Draw Cards" button SHALL be temporarily disabled to prevent multiple clicks.
- **And** a "Shuffling..." message or animation SHALL be displayed for a brief period.
- **And** after the shuffle indication, the correct number of face-down cards for the chosen spread SHALL be displayed.

### Requirement: Reversed Card Chance
Each drawn card SHALL have a 50% chance of being reversed.
- **Rationale:** Aligns with **UI Skill 2**. Card orientation is a core part of tarot reading and must be represented visually.
- **Dependencies:** None.

#### Scenario: A card is revealed in a reversed orientation
- **Given** a card has been drawn and determined to be reversed.
- **When** the user clicks the face-down card to reveal it.
- **Then** the card's image SHALL be displayed rotated 180 degrees.
- **And** the UI text MAY also include "(Reversed)" or an icon to reinforce the orientation.

#### Scenario: A card is revealed in an upright orientation
- **Given** a card has been drawn and determined to be upright.
- **When** the user clicks the face-down card to reveal it.
- **Then** the card's image SHALL be displayed in its standard, non-rotated orientation.

### Requirement: Progressive Reveal
Information SHALL be revealed progressively to the user.
- **Rationale:** Aligns with **UI Skill 4**. This avoids cognitive overload and creates a paced, reflective experience by showing information one piece at a time.
- **Dependencies:** `interaction-flow/reversed-chance`.

#### Scenario: User reveals cards one by one
- **Given** a spread of face-down cards is displayed.
- **When** the user clicks on the first face-down card.
- **Then** that card alone SHALL flip to its face-up state.
- **And** the interpretation text for that card SHALL appear after the card is revealed.
- **And** the other cards in the spread SHALL remain face-down.

#### Scenario: Full interpretation is hidden before reveal
- **Given** a spread of face-down cards is displayed.
- **When** the view is rendered.
- **Then** no card names, images, or interpretation text SHALL be visible.
- **And** the UI SHALL display a prompt for the user to interact with the cards.
- **Example:** "Tap a card to reveal it."
