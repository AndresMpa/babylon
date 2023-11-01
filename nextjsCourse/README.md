# Next course

Tags: Frontend, Nextjs, TypeScript, Nodejs

## Basic

About the basic script we have:

- `next dev` to start a development server
- `next build` to build an app
- `next start` to start next in production
- `next lint` to lint code

By default nextjs also builds using chuck, code splitting and some other
interesting features

> By default nextjs also uses Server Side Rendering SSR, so nextjs is more useful for SEO than React by default

## Routing Based on File system (RBF)

### Static routing

RBF is an interesting proposal to solves to routing issue, instead of
using a different file to define the entire routing system it uses the
file system tree to get the routes done on the app.

> This feature is the `basic` way to do it, dynamic routing routing works under a different proposal.

A quick example:

```bash
`-- pages
    |-- about.jsx
    `-- index.jsx
```

Will return as router:

- `localhost:3000/` which is the `index.jsx` file
- `localhost:3000/about` which is the `about.jsx` file

It also makes the parsing from `.jsx` to `.js` by itself, but if I
save `index` or `about` as `.js` it'll get it too

### Dynamic routing

To using dynamic routing, we need to attach an static route first then
we use `[var].js` to get a dynamic route

Example:

```bash`
-- pages
|-- about.jsx
|-- index.jsx
`-- product
        `-- [productId].jsx

````

Then, we can get the query parameter value using a simple hook provided
by nextjs

```javascript
// [productId].jsx
import { useRouter } from "next/router";

// ...

const ProductItem = () => {
  const router = useRouter();

  return <div>{router.query.productId}</div>
}
```
