# Frontend Assignment

This project is a React application created for a frontend assignment. It utilizes various technologies and tools to build a responsive and interactive user interface.

## Table of Contents

- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Scripts](#scripts)
- [Linting](#linting)
- [Running the Project](#running-the-project)
- [Storybook](#storybook)
- [Build](#build)

## Dependencies

- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker): A library for generating fake data.
- [chart.js](https://www.npmjs.com/package/chart.js): A simple yet flexible JavaScript charting library.
- [react](https://reactjs.org/): A JavaScript library for building user interfaces.
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2): A React wrapper for Chart.js.
- [react-dom](https://reactjs.org/docs/react-dom.html): ReactDOM library for web applications.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): Declarative routing for React.js.
- [react-scripts](https://create-react-app.dev/docs/available-scripts/): Scripts and configuration used by Create React App.
- [web-vitals](https://www.npmjs.com/package/web-vitals): A tiny JavaScript library for measuring web vitals.

## Dev Dependencies

- [@babel/plugin-proposal-private-property-in-object](https://www.npmjs.com/package/@babel/plugin-proposal-private-property-in-object): Babel plugin for private property syntax in objects.
- [@storybook/addon-actions](https://www.npmjs.com/package/@storybook/addon-actions): Storybook addon that logs actions in the UI.
- [@storybook/addon-essentials](https://www.npmjs.com/package/@storybook/addon-essentials): Storybook addon essentials.
- [@storybook/addon-interactions](https://www.npmjs.com/package/@storybook/addon-interactions): Storybook addon for actions.
- [@storybook/addon-links](https://www.npmjs.com/package/@storybook/addon-links): Storybook addon for linking stories.
- [@storybook/addon-onboarding](https://www.npmjs.com/package/@storybook/addon-onboarding): Storybook addon for onboarding.
- [@storybook/addons](https://www.npmjs.com/package/@storybook/addons): Official addons package for Storybook.
- [@storybook/blocks](https://www.npmjs.com/package/@storybook/blocks): Storybook blocks for the design system.
- [@storybook/preset-create-react-app](https://www.npmjs.com/package/@storybook/preset-create-react-app): Storybook preset for Create React App.
- [@storybook/react](https://www.npmjs.com/package/@storybook/react): Storybook for React.
- [@storybook/react-webpack5](https://www.npmjs.com/package/@storybook/react-webpack5): Storybook for React with Webpack 5.
- [@storybook/test](https://www.npmjs.com/package/@storybook/test): Official Storybook testing utilities.
- [eslint-plugin-storybook](https://www.npmjs.com/package/eslint-plugin-storybook): ESLint plugin for Storybook.
- [prop-types](https://www.npmjs.com/package/prop-types): Runtime type checking for React props and similar objects.

## Scripts

- `start`: Run the development server using `react-scripts`.
- `build`: Build the production-ready bundle using `react-scripts`.
- `test`: Run tests using `react-scripts`.
- `eject`: Eject from `react-scripts` configuration.
- `storybook`: Run Storybook development server.
- `build-storybook`: Build Storybook for production.

## Linting

Linting is configured using the `eslint-plugin-storybook` for Storybook and the default `react-app` configuration for the rest of the project.

## Running the Project

To run the project locally, use the following steps:

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Storybook

To view the Storybook development environment, use the following command:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to explore the Storybook stories.

## Build

To build the production-ready bundle, use the following command:

```bash
npm run build
```

This will create an optimized build in the `build` directory.

---
