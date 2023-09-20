# Navigation with React Router

## Concepts

### SSR vs SPA (CSR)

#### SSR

Sever Side Render (SSR) allows server to handle with HTML trough code injection
it means that, client web browser will receive the entire page, so web browser
can look for that build improving at the same time initial load of that build
(Or page). What's not so good about this is that, SSR worsen performance also
reduce interactivity.

> I rather SSR when I need SEO, SEO is something... Awful, but SSR tackles it

#### SPA (CSR)

Client Side Render (CSR) is the coolest thing in word, when your server sucks, CSR
render everything on Clients so your server could be worst under this architecture
Single Page Apps (SPA) are web apps, Web Apps!, Web APPS!, it means interactivity...
They load one index.html file then they build the entire application around that,
so users are the "Target", the engine that makes the app works are users, they are
so useful when you don't need to worry about Web Browsers "SEO", neither first load
or initial load; SPA isn't the best option in those cases

> I have build many SPA use them, they are so cool but mix then with something with better SEO

### Progressive Server Side Rendering + Rehydration

This is a trick, when you want the best of both works PSSR comes to you, and it sucks
PSSR is another architecture to handle with this process of send information, but
it's difficult to handle with it; PRRS allows you to use SSR strategy at the beginning
them slowly move to SPA but... At the end, you take that SSR process an you throw it
to a trash can an let amazing SPA deals with everything

## About React Router

### BrowserRouter

The typical one, that router we generally use that one we need to stand when we need a route
this is the one uses slashes to identify routes and paths is that simple and useful as `/`
or `/something`

### HashRouter

A useful twist for those who needs the URL paths to do something, this options adds a `#`
is that simple and that useful, we can get the current path using a simple regrex to cut
from `#` to the end of that path, that's the biggest difference, also the reason why I like
it. It looks in the end like: `/#/something`

### MemoryRouter (FaithRouter)

`Now you do what they told ya` this thing `uses an array`, might be useful for mobile where
there's no an specific route or path, but I don't trust this approach to a router it's a
bit like a fairy tale, so not trusting on it yet

## NavLink vs Link

This solve some common issues `<Link></Link>` doesn't allow to do something different from
redirections while `<NavLink></NavLink>` allow to send some custom data for `className` or
`style`, that useful to "active" like status for routes

> We can sent params for ids (Called "slug") trough a link as usual `/:slug` we need to add it to the router

### Controlling navigation

This is useful, we have a hook called `useNavigate` that hook is used basically to handle with
navigation (Wow), so we can control navigation using it

```javascript
import { useNavigate } from "react-router-dom";
// ...

const navigate = useNavigate();

navigate("/blog", { replace: true });
// ...
```

We can use it like this to move from some path to other removing previous path from the historical

This hook can also use numbers as follows

```javascript
navigate(-1);
```

### Nesting routes

Nesting routes is weird in here, we use a component called `Outlet`, that component is used to render
a component "inside" other component it looks weird but might work for something

```javascript
import { Outlet } from "react-router-dom";

const component = () => {
  return (
    // ...
    <Outlet></Outlet>
    // ...
  );
};
```

### AuthX

Using react AuthX works as usual, but under hooks or providers, providers provide (Wow) context for AuthX
state, while hooks handle with state, so first we use a provider under a router

```javascript
import { HashRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "@util/auth";

const Router = () => {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Routes>
            <Route path="/some-path" element={<SomeComponent />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
};
```

In that example we use a `<HashRouter>` them the `<AuthProvider>`, that order is important in order to use
`<HashRouter>` methods to handle with redirections according to components needs for `<AuthProvider>` to
handle them

```javascript
<HashRouter>
      <AuthProvider>
            {...}
      </AuthProvider>
</HashRouter>
```

In the other hand, Hooks are useful to access providers methods, this hooks is generally called `useAuth()`,
that hooks "wraps" AuthX methods

```javascript
import { useAuth } from "@util/auth";

const SomeComponent = () => {
  //...
  const auth = useAuth();
  // Functions can be invoke like
  const onLogin = () => auth.login();
};
```

> Check [auth.js](./src/util/auth.js) for a specific example
