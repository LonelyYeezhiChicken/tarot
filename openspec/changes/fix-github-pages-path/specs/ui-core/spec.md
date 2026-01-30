# ui-core Specification

## ADDED Requirements

### Requirement: HTML Structure and Entry Point
The application SHALL use `index.html` as its entry point.

- **Rationale:** Standard practice for web applications and required for GitHub Pages to serve content from the repository root.
- **Dependencies:** None.

#### Scenario: Application entry point
- **Given** the application is deployed.
- **When** a user navigates to the application's base URL.
- **Then** the `index.html` file located in the repository root SHALL be served.
- **And** the `index.html` file SHALL correctly link to `style.css` in the root and `src/main.js` for its logic.
