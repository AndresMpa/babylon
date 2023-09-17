# Render props and render functions

Render props are similar to compound components but they are a bit more
specific about WH, "How to", "What to" and "When to" render each piece of
the app.

### Render functions

This is so similar to reactContext. Render functions are wrappers for
rendering process just like reactContext, we use a functions to define
what to display in our component:

```jsx
<RenderFunction>
    {info => (
        <OtherComponent {...info} />
    )}
</RenderFunction>
```

### Render props

To use it, we don't use any children, instead of that, we send in any other
prop of that component to render information

```jsx
<ComponentWithRenderProp renderProp={<SomeComponent />}/>
```

With arrays

```jsx
<ComponentWithRenderProp renderProp={someData => <SomeComponent {...someData} />}/>
```

That's extremely useful to have some conditional rendering
