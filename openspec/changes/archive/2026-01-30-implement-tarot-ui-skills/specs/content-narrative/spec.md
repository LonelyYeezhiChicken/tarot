# Spec: Content and Narrative

This specification governs how the final tarot reading text is composed and presented to the user.

## ADDED Requirements

### Requirement: Composed Reading Narrative
The reading narrative SHALL be composed from multiple data points.
- **Rationale:** Aligns with **UI Skill 5**. A meaningful reading combines the card's general meaning with its context in the spread.
- **Dependencies:** `interaction-flow/progressive-reveal`.

#### Scenario: Composing the text for a revealed card
- **Given** a user has revealed a card (e.g., The Magician, upright).
- **And** the card is in a position with a specific meaning (e.g., "Your current challenge").
- **When** the narrative for that card is displayed.
- **Then** the displayed text SHALL combine the card's name, its orientation, the position's meaning, and the card's interpretation text.
- **And** the text SHALL be formatted for readability using headers and paragraphs, avoiding a single "wall of text".
- **Example:**
    > ### Your current challenge: The Magician (Upright)
    >
    > This card suggests a time of power, skill, and concentration. You have the tools and resources available to you to succeed. The challenge is to recognize and use them effectively.

### Requirement: Advisory Narrative Tone
The narrative tone SHALL be advisory and non-deterministic.
- **Rationale:** Aligns with **UI Skill 6 (Emotional Safety UX)**. The UI must not make definitive claims or offer harmful advice, ensuring a safe and reflective experience.
- **Dependencies:** None.

#### Scenario: Displaying an interpretation
- **Given** any card's interpretation text is being displayed.
- **When** the user reads the text.
- **Then** the language used SHALL be advisory and reflective.
- **And** it SHALL avoid absolute predictions or guarantees.
- **And** it SHALL use phrases like "suggests," "may indicate," "invites reflection on," or "points toward."
- **And** it SHALL NOT contain any medical, legal, or financial advice.

#### Scenario: A "difficult" card is drawn (e.g., The Tower)
- **Given** the user draws a card often associated with negative outcomes, like The Tower or Death.
- **When** the interpretation is displayed.
- **Then** the text SHALL frame the card's meaning in terms of change, transition, or awareness, rather than as a purely negative or frightening event.
- **Example for The Tower:** "This card often points to a sudden, major shift or revelation. It may feel disruptive, but it invites you to question foundations you've taken for granted, ultimately clearing the way for new growth."
