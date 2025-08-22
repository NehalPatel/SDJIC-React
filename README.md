## SDJIC React – Learning Application

Interactive React learning app demonstrating fundamentals, hooks, forms, context, memoization, routing, and basic auth patterns.

### Live URLs

- **Vercel**: [sdjic-react.vercel.app](https://sdjic-react.vercel.app/)
- **GitHub Pages**: [nehalpatel.github.io/SDJIC-React](https://nehalpatel.github.io/SDJIC-React/)

### Tech Stack

- **React 18**, **react-router-dom 6**
- **Bootstrap 5** for UI
- **Firebase** utilities scaffolded in `src/Util/firebase.js`
- Bootstrapped with **Create React App**

### What’s Inside (Highlights)

- **Components & Layout**: `Components/` (`Header`, `Footer`, `Navigation`, auth components), `Layout.js`
- **Routing & Pages**: `Pages/` (`Home`, `About`, `Contact`, `Error404`, `UserAuth`)
- **Learning Modules**: `Pages/Learn/` including demos for:
  - React basics: components, props, styles (CSS module, CSS file, inline)
  - Hooks: `useState`, `useEffect`, `useMemo`, `useCallback`, `useReducer`, `useRef`, custom hooks
  - Context API demos and user context in `context/user.context.jsx`
  - Performance: memoization patterns and pitfalls
  - Forms: multiple controlled-form examples

### Getting Started

In the project directory:

1. Install dependencies:
   - `npm install`
2. Run the dev server:
   - `npm start`
   - Open `http://localhost:3000`

### Scripts

- `npm start` – start development server
- `npm test` – run tests in watch mode
- `npm run build` – create production build in `build/`
- `npm run eject` – eject CRA config (not reversible)
- `npm run deploy` – deploy to GitHub Pages (uses `gh-pages`)

### Deployment Notes

- Vercel serves the production build automatically from the repository.
- GitHub Pages deployment is configured with `predeploy`/`deploy` scripts and publishes the `build/` folder.

### License

For learning and demonstration purposes.
