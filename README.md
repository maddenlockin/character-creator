# React Character Designer

### Learning Objectives

- Create a React app using reusable stateless components and stateful
- Use npx create-react-app my-cool-project to create a react app
- Push a react app to github using git remote set-url origin
- Use Netlify to deploy a React app.
- Use attributes in parent components to pass data down to child components as props.
- Explain that when state changes in any component, React updates the DOM in whatever components are impacted by the change.
- Use .map to iterate over an array and render new elements for each item in an array.
- Add a unique key to each element rendered from a .map in React.
- Use useState to add state to a React component
- Destructure props in functional components
- Use the presentational / container component pattern

### Live Example

[React Character Designer](https://alchemy-react-character.netlify.app/)

### Description

For this app, we'll be creating a React app using props and state.

Create a new React app using `npx create-react-app <app name>` and be sure to add in your `.eslint` and prettier [configs](https://github.com/alchemycodelab/config-build-deploy/tree/main/eslint).

### Acceptance Criteria

- Users should be able to update the characters head, torso and legs using select menus
- Users should be able to add catchphrases for their character which get listed on the page
- The app should utilize the presentational / container component pattern. Use <App /> as your container component and make presentational components in a `components` directory
- Presentational components should have snapshot tests

### Rubric

| Task                                                                                 | Points |
| ------------------------------------------------------------------------------------ | ------ |
| Users are able to update the characters features (2 points per feature)              | 6      |
| Users are able to add catchphrases                                                   | 4      |
| App is separated into presentational / container components that pass state as props | 4      |
| Snapshot tests                                                                       | 4      |
| Deployed on Netlify, CI Passing                                                      | 2      |