# Tasks: Redesign UI to implement Tarot UI Skills

This list breaks down the work required to implement the UI redesign. Tasks should be completed in the order listed, as some are dependent on others.

## Capability: ui-core

-   [ ] **Task 1: Refactor HTML Structure:**
    -   Update `public/index.html` to provide a cleaner semantic structure for the new design.
    -   Add a container for the main app, a control area, and a card display area.
    -   Add a "Restart" button element.

-   [ ] **Task 2: Implement Minimalist Visual Style:**
    -   Update `public/style.css` to implement the minimalist, dark/neutral theme as per **UI Skill 7**.
    -   Define styles for the overall layout, typography, and color palette.
    -   Remove old styles that are no longer needed.

-   [ ] **Task 3: Implement Stateless Reset Logic:**
    -   In `src/main.js`, create a `reset()` function that clears the card display area and resets any in-memory state variables to their initial values.
    -   Attach an event listener to the "Restart" button to call the `reset()` function.

## Capability: data-rendering

-   [ ] **Task 4: Centralize Data Loading:**
    -   Refactor the data loading logic in `src/main.js`.
    -   Instead of a hardcoded array, create a more robust function to fetch card and spread data based on a manifest or a well-known structure. (For now, can keep the array but move it to a dedicated `data.js` module).

-   [ ] **Task 5: Implement Dynamic Spread Layout:**
    -   In `src/main.js`, create a function `renderSpreadLayout(spreadId)` that takes a spread ID.
    -   This function should clear the display area and render the correct number of card placeholders based on the selected spread's definition.
    -   Initially, these placeholders will be styled as card backs.

## Capability: interaction-flow

-   [ ] **Task 6: Implement "Draw" and "Shuffle" Flow:**
    -   Modify the "Draw" button's event listener.
    -   When clicked, it should briefly show a "Shuffling cards..." message (**UI Skill 10**).
    -   After a short delay, it should call `renderSpreadLayout` to display the face-down cards.
    -   The draw logic should determine and store the orientation (upright/reversed) for each card (**UI Skill 2**).

-   [ ] **Task 7: Implement Progressive Reveal:**
    -   Add event listeners to the face-down card elements.
    -   When a card is clicked, it should trigger a CSS flip animation.
    -   The card's image should be displayed, visually rotated 180 degrees if it is reversed.
    -   The click listener should be disabled after the card is revealed.

## Capability: content-narrative

-   [ ] **Task 8: Compose and Display Card Narrative:**
    -   Create a function `composeNarrative(card, position, isReversed)` that generates the interpretive text.
    -   This function must adhere to the tone and language guidelines in **UI Skill 6 (Emotional Safety UX)**.
    -   When a card is revealed, this function is called, and the resulting text is displayed near the card.

-   [ ] **Task 9: Final Summary Display:**
    -   Implement logic to check if all cards in the spread have been revealed.
    -   Once all cards are revealed, display a concluding message or a summary of the reading.

## Validation

-   [ ] **Task 10: Manual Validation:**
    -   Perform a full walkthrough of the user journey: selecting a spread, drawing, revealing cards one-by-one, and restarting.
    -   Verify that all 10 UI Skills from `UI_SKILLS.md` have been met.
    -   Check for console errors.
