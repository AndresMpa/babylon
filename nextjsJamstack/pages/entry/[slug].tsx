import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

import { getPlant, QueryStatus } from '@api/index'

import { Layout } from '@components/Layout'
import { RichText } from '@components/RichText'
import { AuthorCard } from '@components/AuthorCard'
import { Grid, Typography } from '@material-ui/core'

export default function PlantEntryPage() {
  const [plantData, setPlantData] = useState<Plant | null>(null)
  const [status, setStatus] = useState<QueryStatus>('idle')
  const router = useRouter()
  const slug = router.query.slug

  useEffect(() => {
    if (typeof slug !== 'string') return

    setStatus('loading')
    getPlant(slug)
      .then((data) => {
        setStatus('success')
        setPlantData(data)
      })
      .catch(() => setStatus('error'))
  }, [slug])

  if (status === 'loading' || status === 'idle') {
    return (
      <Layout>
        <main>Loading {slug?.replaceAll('-', ' ')} data</main>
      </Layout>
    )
  }

  if (plantData === null || status === 'error') {
    return (
      <Layout>
        <main>404 -  {slug?.replaceAll('-', ' ')} was not found</main>
      </Layout>
    )
  }

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
          </section>
          <section className="mt-10">
            <Typography variant="h5" component="h3" className="mb-4">
              Categories
            </Typography>
          </section>
        </Grid>
      </Grid>
      <section className="my-4 border-t-2 border-b-2 border-gray-200 pt-200 pt-12 pb-7">
        <AuthorCard {...plantData.author}></AuthorCard>
      </section>
    </Layout>
  )
}
