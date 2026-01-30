Tarot UI Skills for Gemini CLI
Skill Set Overview

This project requires the AI to implement a Tarot-focused frontend UI with specific interaction patterns, visual states, and narrative flow.
The following skills define UI behaviors and responsibilities.

UI Skill 1 — Card Draw Interaction

Description
Implement an intuitive tarot card drawing interaction that feels intentional, not random noise.

Requirements

Draw cards only after explicit user action (button / tap)

Prevent multiple draws at the same time

Support both:

random draw

seed-based deterministic draw

UI States

idle

shuffling

drawn (face-down)

revealed (face-up)

UI Skill 2 — Card Orientation (Upright / Reversed)

Description
Visually represent tarot card orientation clearly and consistently.

Requirements

50% chance of reversed (unless disabled)

Reversed cards must be visually rotated (e.g. 180°)

Orientation state must be readable in code and UI

UX Rule

Orientation should be visible before reading text is shown

UI Skill 3 — Spread Layout Rendering

Description
Render different tarot spreads dynamically based on configuration.

Supported Spreads

One-card spread

Three-card spread

Five-card spread

Requirements

Layout generated from spread definition (positions array)

Each position has:

title

meaning / prompt

Responsive layout (desktop + mobile)

UI Skill 4 — Progressive Reveal Flow

Description
Control the pacing of information revelation to avoid cognitive overload.

Flow

Cards appear face-down

User reveals cards one by one

Card meaning appears after reveal

Final summary appears last

UX Rule

Do not show full interpretation immediately

UI Skill 5 — Reading Narrative Composition

Description
Compose a readable tarot interpretation from structured data.

Requirements

Combine:

card name

orientation

position meaning

short interpretation text

Avoid walls of text

Use paragraph separation and headers

Tone

Neutral

Reflective

Non-deterministic (no absolute predictions)

UI Skill 6 — Emotional Safety UX

Description
Ensure the UI does not imply fatalism, certainty, or harmful advice.

Rules

No definitive future claims

No medical, legal, or financial guarantees

Use advisory language:

“suggests”

“may indicate”

“invites reflection”

UI Skill 7 — Minimalist Tarot Visual Style

Description
Use a calm, focused visual style suitable for tarot reflection.

Design Guidelines

Neutral or dark background

Limited color palette

No excessive animation

Typography should prioritize readability

UI Skill 8 — Stateless Session Design

Description
Tarot readings are ephemeral and not persisted.

Rules

No user accounts

No saving past readings

Refresh resets the session

Optional “Restart Reading” action

UI Skill 9 — Offline-First Compatibility

Description
The UI must function without network access after initial load.

Requirements

All tarot data loaded from local JSON

No runtime API calls

Graceful handling of missing assets

UI Skill 10 — Explainable Interaction

Description
Users should understand what the UI is doing without instructions.

Examples

“Shuffling cards…”

“Tap to reveal”

“This position represents your current state”
