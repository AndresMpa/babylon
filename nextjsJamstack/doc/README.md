# Static pages & Jamstack

## Concepts

### Jamstack

Jamstack is an architecture in which everything in rendered in the browser
this architecture is pretty fast. Jamstack is basically a CSR architecture

![Arch](./assets/arch.png)

Ref: https://jamstack.wtf/

### Rendering

It's the process to convert data into HTML, we can classify each "mode" of
rendering as:

- Client-side rendering (CSR): HTML construction happens on the users browser. Works on client demand

![CSR](./assets/csr.png)

- Server-side rendering (SSR): HTML construction happens on a server, then sends the HMTL to the browser. Works on server demand

![SSR](./assets/ssr.png)

- Static Generation rendering (SGR): HTML construction happens on "build time" or generation (On the server), it means that this rendering process happens only one time

Note: Nextjs is able to create hybrid apps that mix each rendering mode

- Ref 1: https://morioh.com/a/9f0457b8ee5f/client-side-rendering-or-server-side-rendering-what-is-the-best-solution-for-your-app
- Ref 2: https://platzi.com/blog/spa-vs-ssr-vs-static-site-generators/

### Content management systems (CMS)

A content management system (CMS) is computer software used to manage the creation and modification of digital content (content management).

- Option 1: https://www.contentful.com/
- Option 2: https://www.sanity.io/exchange/framework=nextjs (With Nextjs support)
- Option 3: https://strapi.io/integrations/nextjs-cms (With Nextjs support)
- Option 4: https://hygraph.com/ (For GraphQL)
- Option 5: https://directus.io/ (Open Source)
- Option 6: https://prismic.io/

#### Contentful

Here there are 3 APIs:

- Content delivery API (CDA) which is the one who handles with updates
- Content management API (CMA) which is the one who handles the content creation
- Content Preview API (CPA) handles with previewing content

To use then it's necessary to create a persona access token (PAT) also an API key:

- To create the API key: Settings > API Keys
- To create the PAT: Settings > CMA Tokens

##### Contentful GraphQL server

There's something cool about contentful which is its server available here:
https://graphql.contentful.com/content/v1/spaces/{SPACE}/explore?access_token={CDA_TOKEN}

Then both things can be use to handle with the CLI

### Design Systems

A design system is a collection of reusable components that follows an standard useful to build any app

- Option 1: https://mui.com/
- Option 2: https://auradesignsystem.com/

### Rendering strategy (Nextjs)

Using Nextjs the rendering strategies look like this:

#### Client-side rendering

As usual we simply use 2 hooks (Or more) to get the data inside a state

```jsx
import { getPlantList } from '../api/'
import { Layout } from '@components/Layout'
import { PlantCollection } from '@components/PlantCollection'
import { useEffect, useState } from 'react'
```

```jsx
export default function Home() {
  const [plantData, setPlantData] = useState<Plant[]>([])

  useEffect(() => {
    getPlantList({ limit: 10 }).then((data) => setPlantData(data))
  }, [])

  return (
    <Layout>
      <PlantCollection plants={plantData} variant="square" />
    </Layout>
  )
}
```

#### Server-side rendering

To render things from the Nextjs server we need to take in consideration a couple of this,
there's a feature call "GetStaticProps" we can use it to create a SSR strategy, it's pretty
simple, we just need to create a new export inside a component at `/pages`, this strategy
only works inside the `/pages` directory, after adding the export we just need to infer its
type using `InferGetStaticPropsType` we infer the type of that exported function, that function
should fulfil the props of the component

> Note: IT MUST BE INSIDE `/pages`

```jsx
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getPlantList } from '@api/index'

import { PlantCollection } from '@components/PlantCollection'
import { Layout } from '@components/Layout'

type HomeProps = {
  plantData: Plant[]
}
```

```jsx
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const plantData = await getPlantList({ limit: 10 })

  return {
    props: { plantData },
  }
}

export default function Home({
  plantData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <PlantCollection plants={plantData} variant="square" />
    </Layout>
  )
}
```

### GetStaticPaths

While `GetStaticProps` gets the information, `GetStaticPaths` defines the pages
that the server will need to create will building any content (On SSG). It's usage
is pretty simple:

```jsx
import { GetStaticPaths } from 'next'
```

```jsx
export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await getItemsList({ limiet: 10 })

  const paths: AnyType[] = entries.map((item) => ({
    params: { slug: item.slug },
  }))

  return {
    paths,
    fallback: false, // This means default 404
  }
}
```

Where `AnyType` will be a type
