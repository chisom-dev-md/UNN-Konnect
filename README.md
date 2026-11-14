# UNN-Konnect — Component-Based Beginner Project

This project separates the UNN-Konnect front-end into pages, reusable components, and data files. It uses HTML, CSS, JavaScript, JSX, React, and Vite. It does not use TypeScript, Tailwind, a router library, or a UI component library.

## Run in VS Code
1. Extract this ZIP.
2. Open the `UNN-Konnect-Components` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL Vite displays (usually `http://localhost:5173`).

## How the folders work
- `index.html`: the HTML page React mounts into.
- `src/main.jsx`: starts React and renders `App`.
- `src/App.jsx`: shared state, page navigation, and the overall app layout.
- `src/pages/`: each major screen (Home, Navigator, Marketplace, Events, Dashboard, Admin).
- `src/components/`: reusable parts such as Header, Footer, LocationCard, ProductCard, EventCard, and CampusMap.
- `src/data/`: sample locations, products, events, and navigation labels.
- `src/style.css`: the shared visual design and responsive layout.
- `public/hero-campus.jpg`: hero image used by the CSS.

## Suggested learning order
1. Read `src/main.jsx`.
2. Read `src/App.jsx` and follow the `pageContent` selection.
3. Read `src/components/Header.jsx` to learn props and click handlers.
4. Read `src/pages/Home.jsx` to see how components and data are combined.
5. Read `src/pages/CampusNavigator.jsx` and `src/components/LocationCard.jsx` to learn state, filtering, `.map()`, and props.
6. Read `src/pages/Dashboard.jsx` to see how tasks are added, completed, and deleted.
7. Read `src/data/places.js` to see how content is kept separate from layout.

## Notes
This is a front-end demonstration. The campus data, vendor listings, prices, and events are sample content and should be verified before real use. There is no backend, database, real login, or server-side form submission. Saved items and tasks reset when the page is refreshed.
