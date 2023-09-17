# Render patterns on React

Render patterns on react are basically different ways to do something
quite simple "Render", it means; those patterns doesn't alter functionality
what they do is to improve usability

In orders of complexity:

- [Compound Components](./compoundComponents/)
- [Render Props and Render Functions (Children and cloneElement)](./renderPropsAndRenderFunctions/)
- [High Order Components (HOC)](./highOrderComponents/)

### Render props vs. High Order Components vs. React Hooks

It's important to understand what are those guys up there, those a patterns
so each one of them comes with good and bad things or "pros" and "cons" so
summarizing it we could see it as a table just as follows:

#### Layout construction

| Compound components with React Hooks                     | Render props/function                               |
| -------------------------------------------------------- | --------------------------------------------------- |
| Common                                                   | A bit more complex                                  |
| Easy to use, easy to use a lot of code with this pattern | Easy to replace components, easy to switch a layout |

In order to replace easier components, also thinking about "props" I rather `Render props/function`

#### Share data

| Compound components with React Hooks             | Render props and render function                                         | High Order Components - HOC                                                                                              |
| ------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Common, nothing fancy. Easier to use than others | Easy to achieve callback hells or spaghetti code, it's not easy to scale | Easy to understand, difficult to be created also it's also easy to achieve a callback hell, it's not so easy to scale it |

Nothing fancy is a ton better than not understanding I rather `Compound components with React Hooks`

> Note: HOC might be less painful to scale using `compose`
