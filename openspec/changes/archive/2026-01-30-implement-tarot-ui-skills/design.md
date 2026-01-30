# Design: UI Redesign for Tarot Skills

## 1. Overview

This document outlines the architectural and design decisions for implementing the new Tarot UI based on `UI_SKILLS.md`. The primary goals are to establish a clean, stateless frontend architecture, implement a progressive reveal user flow, and ensure the application is maintainable.

## 2. Architectural Decisions

### 2.1. Stateless Frontend

In accordance with **UI Skill 8 (Stateless Session Design)**, the application will not persist any state between sessions. A "session" is defined as the period from page load to page refresh/close.

- **State Management:** All application state (e.g., current spread, drawn cards, revealed cards) will be held in-memory in JavaScript variables. There will be no use of `localStorage`, `sessionStorage`, or server-side persistence.
- **Reset Flow:** A "Restart" or "Draw New Reading" button will be present. Clicking this will call a `reset()` function that clears all in-memory state variables and re-renders the initial UI, effectively starting a new session without a page reload.

### 2.2. Data Loading Strategy

To comply with **UI Skill 9 (Offline-First Compatibility)** and improve maintainability, the current data loading mechanism will be refactored.

- **Problem:** The current `main.js` contains a hardcoded list of file paths for each card. This is not scalable.
- **Solution:** On application startup, the application will instead read the contents of the `/data` and `/data/spreads` directories to dynamically discover all card and spread files.
    - This can be simulated in a development environment by a script that generates a manifest file (`data-manifest.json`) which the frontend can then fetch. The manifest would contain all the paths.
    - For the live frontend, since it cannot list directory contents, we will fetch a pre-generated `card-manifest.json` and `spread-manifest.json`. This is a more robust approach than hardcoding every single file in `main.js`. For the purpose of this implementation, we will assume a build step or the server can provide these manifest files. For local development, we will fetch all known files as is, but the logic will be centralized.

### 2.3. Progressive Reveal Flow

To implement **UI Skill 4 (Progressive Reveal Flow)**, the rendering logic will be significantly altered.

- **Current State:** The entire reading (card, meaning, position) is rendered immediately upon drawing.
- **New Flow:**
    1.  **Draw:** User clicks "Draw". A "Shuffling..." message appears (**UI Skill 10**).
    2.  **Placement:** The required number of "card back" elements are rendered in the spread layout. They are not interactive yet.
    3.  **Reveal:** The UI prompts the user to "Tap to reveal". Each card back becomes clickable.
    4.  **Flip & Show:** When a card is clicked, it will "flip" (using a CSS animation). The card front is shown, and its orientation (upright/reversed) is made clear visually (**UI Skill 2**).
    5.  **Display Meaning:** The meaning associated with the card and its position appears *after* the flip animation completes.
    6.  **Summary:** Once all cards in the spread are revealed, a final summary section can be displayed.

## 3. Component-Based Rendering

While not using a full-blown framework, the rendering logic in `main.js` will be organized into "component-like" functions to improve clarity.

- `renderAppContainer(state)`: Renders the main container and controls (buttons, selectors).
- `renderSpreadLayout(spread, drawnCards)`: Renders the card placeholders for a given spread.
- `renderCard(cardElement, cardData)`: Renders a single card, handling its state (face-down, face-up, revealed text).
- `renderNarrative(cardData, position)`: Composes and renders the interpretive text for a card.

This approach will make the DOM manipulation logic easier to manage and debug as the application complexity grows.
