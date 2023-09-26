# React redux

This library helps to handle with state; it needs:

- A store
- A method access to it, like selectors
- An update method, like triggers, actions or reducers

## Redux basic's

For redux, there must be a unique resource to access the
global state a "store". A store contain a set of different
state we can access, but we can't modify them directly,
redux uses "actions", "actions" are mutation for the state
or the global state. Last but not least, "reduces" are
"pure functions" used to handle with actions.

> Note: Reducers MUST NOT be asynchronous functions

> Note: Pure functions works as same in same out

React uses something quite similar to Vuex, let's check

![Redux](./.doc/react-redux-overview.png)

![Vuex](./.doc/vuex.png)

## Prop Drilling

This is a side effect of using something like context, it's...
Hardcore, essentially it's like a callback hell, it happens when
we pass props to one component to other just to render information
on a children

![Props_drilling](./.doc/prop-drilling.jpg)

That's spaghetti code.

## Context vs Redux

React Context solves this, it shares data from components, it's useful
for handling with states that are expected not to changes a lot:

- Themes (Light/dark)

- User data

- Language

Redux is easier to debug, but increase bundle size, it's easier to use
middlewares, it also comes with a different life cycle... Redux can also
prevent useless renders.

#### In short

Context works for small projects, without a bunch of data, while redux
works for bigger ones with lots of state
