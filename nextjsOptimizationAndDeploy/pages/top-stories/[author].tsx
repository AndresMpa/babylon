import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useState, useEffect } from 'react'

import { VerticalTabs, TabItem } from '@ui/Tabs'
import { Typography } from '@ui/Typography'
import { Alert } from '@ui/Alert'

import { PlantCollection } from '@components/PlantCollection'
import { AuthorCard } from '@components/AuthorCard'
import { Layout } from '@components/Layout'

import { IGetPlantListByAuthorQueryVariables } from '@api/generated/graphql'
import { getAuthorList, getPlantListByAuthor, QueryStatus } from '@api'
import { useRouter } from 'next/dist/client/router'

type TopStoriesPageProps = {
  authors: Author[]
  currentAuthor: Author['handle']
  status: 'error' | 'sucess'
}

export const getServerSideProps: GetServerSideProps<
  TopStoriesPageProps
> = async ({ params }) => {
  const authorHandle = String(params?.author)

  try {
    const authors = await getAuthorList({ limit: 10 })
    const doesAuthorExist = authors.some(
      (author) => author.handle === authorHandle
    )

    // Validates that the author exists and redirects to the first one in the list otherwise.
    if (authors.length > 0 && !doesAuthorExist) {
      const firstAuthor = authors[0].handle

      return {
        redirect: {
          destination: `/top-stories/${firstAuthor}`,
          permanent: false,
        },
      }
    }

    return {
      props: {
        authors,
        currentAuthor: authorHandle,
        status: 'sucess',
      },
    }
  } catch (e) {
    return {
      props: {
        authors: [],
        currentAuthor: authorHandle,
        status: 'error',
      },
    }
  }
}

export default function TopStories({
  authors,
  status,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const currentAuthor = router.query.author

  if (
    typeof currentAuthor !== 'string' ||
    authors.length === 0 ||
    status === 'error'
  ) {
    return (
      <Layout>
        <main className="pt-10 px-6">
          <div className="pb-16">
            <Typography variant="h2">Huh, algo no está bien</Typography>
          </div>
          <article>
            <Alert severity="error">
              {status === 'error'
                ? 'Hubo un error consultando la información. Inspeccionar el request en la pestaña Network de DevTools podría dar más información'
                : 'No se encontró la información. ¿Olvidaste configurar el contenido en Contentful?'}
            </Alert>
          </article>
        </main>
      </Layout>
    )
  }

  const tabs: TabItem[] = authors.map((author) => ({
    content: <AuthorTopStories {...author} />,
    label: author.fullName,
    value: author.handle,
  }))

  return (
    <Layout>
      <main className="pt-10">
        <div className="text-center pb-16">
          <Typography variant="h2">Top 10 Stories</Typography>
        </div>
        <VerticalTabs
          tabs={tabs}
          currentTab={currentAuthor}
          onTabChange={(_, newValue) => {
            router.push(`/top-stories/${newValue}`, undefined, {
              shallow: true,
            })
          }}
        />
      </main>
    </Layout>
  )
}

type AuthorTopStoriesProps = Author

function AuthorTopStories(author: AuthorTopStoriesProps) {
  const { data: plants, status } = usePlantListByAuthor({
    authorId: author.id,
    limit: 12,
  })

  return (
    <div>
      <section className="pb-16">
        <AuthorCard {...author} />
      </section>
      {status === 'error' ? (
        <Alert severity="error">Huh. Something went wrong.</Alert>
      ) : null}
      {status === 'success' && plants.length === 0 ? (
        <Alert severity="info">
          {author.fullName} doesn't have any story yet.
        </Alert>
      ) : null}
      <PlantCollection plants={plants} />
    </div>
  )
}

export const usePlantListByAuthor = (
  args: IGetPlantListByAuthorQueryVariables
) => {
  const [plantList, setPlantList] = useState<Plant[]>([])
  const [status, setStatus] = useState<QueryStatus>('idle')
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setStatus('loading')
    getPlantListByAuthor(args)
      .then((receivedPlants) => {
        setPlantList(receivedPlants)
        setStatus('success')
      })
      .catch((e) => {
        setError(e)
        setStatus('error')
      })
  }, [])

  return {
    data: plantList,
    status,
    error,
  }
}
