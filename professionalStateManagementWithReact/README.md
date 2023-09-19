# About this course

`useState` is just the beginning of React state management,
we can use `component` or functions with `hooks`, we can
use simple state or complex/compound states, we can even
handle with state in declarative way or imperative way.
All those possibilities allow us to have find the best
possible solution

The aim of this course is to understand those possibilities
also handle with them to achieve the best solutions, it
extends our toolbox.

## Project - Security codes

The idea is to have a confirmation code, trough state of
React, having some states to handle with it

## Key differences between React.Component and React.useState

> Deeper explanation [here](https://javascript.plainenglish.io/lifecycle-methods-substitute-with-react-hooks-b173073052a)

Hooks "ate" life cycle, is that simple; `useEffect` replaces
a lot of previous functions from life cycle. Check the image
below

![life_cycle_vs_hooks](./.doc/life_cycle_vs_hooks.jpg)

Let's see the way `useEffect` bully life cycle

### One shot behaviour

```javascript
  componentDidMount() {
    console.log("componentWillMount");
  }
  useEffect( () => {
    /*
      This is equivalent to componentWillMount
      when the second parameter at useEffect
      is "[]" this means 'Do it the first time'
    */
  }, [])
```

### Multi calls

```javascript
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  useEffect( () => {
    /*
      This is equivalent to componentDidUpdate
      when the second parameter at useEffect
      is "[someState, otherState, nStatesHere]"
      this means 'Do it each time that var changes'
    */
  }, [someState])
```

### Before unmount

```javascript
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  useEffect(() => {
    // Some stuff, like window.addEventListener()

    // The expression return () => {} is equivalent to componentWillUnmount()
    return () => {
      // Some stuff, like window.removeEventListener()
    }
  }, []);
```

### "Simple states"

This is really easy, "simple states" are usual ones

```javascript
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [value, setValue] = useState("");
```

Those are simple states

### Composed states

It's also something simple, those are state that deals with objects
instead simple values, works as follows

```javascript
  constructor(props) {
    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }
  ...

  this.setState({ error: true, loading: false })
  ...
```

#### Using React.useState

```javascript
const [request, setRequest] = useState({
  loading: false,
  error: false,
});

setRequest({ ...request, error: false });
```

## Declarative vs imperative

Both are ways to write code programming paradigms to be exact, in
short "imperative programming" means "do it, then care about how"
while declarative programming means "This is how to do it, then care
about using it"

[Some reference](https://www.educative.io/blog/declarative-vs-imperative-programming)

This concept is useful for FSM (Final State Machines), reminds a lot
to Vuex

> Boilerplate: Sentence or section (Code structure) use it in a text (Code) many times in different notes

## Reducers

A Reducer is a pure function that takes the state of an application
and action as arguments and returns a new state (Remember Vuex). Reducers
on pure React needs 2 things:

- Type: Which is a "keyword" used to find the action we want to perform (Remember Vuex actions)
- Payload (Optional): Is used to specify a change in that state (Remember Vuex payload)
