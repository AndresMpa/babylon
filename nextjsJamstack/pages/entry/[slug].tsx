import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

import {
  getCategoryList,
  getPlantList,
  getPlant,
  QueryStatus,
} from '@api/index'

import { Layout } from '@components/Layout'
import { RichText } from '@components/RichText'
import { AuthorCard } from '@components/AuthorCard'
import { Grid, Typography } from '@material-ui/core'
import { PlantEntryInline } from '@components/PlantCollection'

type PathType = {
  params: {
    slug: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await getPlantList({ limiet: 10 })
  const paths: PathType[] = entries.map((plant) => ({
    params: { slug: plant.slug },
  }))
  return {
    paths,
    fallback: false, // This means default 404
  }
}

type PlantEntryProps = {
  plantData: Plant | null
  otherEntries: Plant[] | null
  categories: Categories[] | null
}

export const getStaticProps: GetStaticProps<PlantEntryProps> = async ({
  params,
}) => {
  const slug = params?.slug

  if (typeof slug !== 'string') {
    return { notFound: true }
  }

  try {
    const plantData = await getPlant(slug)
    const otherEntries = await getPlantList({ limit: 5 })
    const categories = await getCategoryList({ limit: 10 })

    return {
      props: { plantData, otherEntries, categories },
    }
  } catch (e) {
    return { notFound: true }
  }
}

export default function PlantEntryPage({
  plantData,
  otherEntries,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={9} component="article">
          <figure>
            <img
              src={plantData.image.url}
              alt={plantData.image.title}
              srcSet={plantData.image.url}
            />
          </figure>
          <div className="px-12 pt-8">
            <Typography variant="h2">{plantData.plantName}</Typography>
          </div>
          <div className="p-10">
            <RichText richText={plantData.description} />
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={3} component="aside">
          <section>
            <Typography variant="h5" component="h3" className="mb-4">
              Recent posts
            </Typography>
            {otherEntries?.map((plantEntry) => (
              <article className="mb-4" key={plantEntry.id}>
                <PlantEntryInline {...plantEntry} />
              </article>
            ))}
          </section>
          <section className="mt-10">
            <Typography variant="h5" component="h3" className="mb-4">
              Categories
            </Typography>
            {categories?.map((category) => (
              <li key={category.id}>
                <Link passHref href={`/category/${category.slug}`}>
                  <Typography variant="h6" component="a">
                    {category.title}
                  </Typography>
                </Link>
              </li>
            ))}
          </section>
        </Grid>
      </Grid>
      <section className="my-4 border-t-2 border-b-2 border-gray-200 pt-200 pt-12 pb-7">
        <AuthorCard {...plantData.author}></AuthorCard>
      </section>
    </Layout>
  )
}
