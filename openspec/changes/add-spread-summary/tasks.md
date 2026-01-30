# Tasks: Add Spread Summary

1.  [x] **Task 1: Detect completion of reading:**
    -   In `src/main.js`, modify the `handleCardClick` function to detect when all cards have been flipped.
2.  [x] **Task 2: Generate spread summary:**
    -   Create a new function `generateSpreadSummary(drawnCards, spread)` that generates a summary of the reading.
3.  [x] **Task 3: Render spread summary:**
    -   Create a new function `renderSpreadSummary(summary)` that creates and appends a new DOM element to display the summary.
4.  [x] **Task 4: Integrate summary generation and rendering:**
    -   Call `generateSpreadSummary` and `renderSpreadSummary` from `handleCardClick` when the reading is complete.
5.  [x] **Task 5: Style the summary:**
    -   Add CSS rules in `public/style.css` to style the spread summary display.
6.  [x] **Task 6: Validation:**
    -   Manually verify that the spread summary appears correctly after all cards are flipped.