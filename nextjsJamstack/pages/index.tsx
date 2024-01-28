import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getPlantList } from '@api/index'

import { PlantCollection } from '@components/PlantCollection'
import { Authors } from '@components/Authors'
import { Layout } from '@components/Layout'
import { Hero } from '@components/Hero'

type HomeProps = {
  plantData: Plant[]
}

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
      <Hero {...plantData[0]} className="mb-20" />
      <Authors className="mb-10" />
      <PlantCollection
        plants={plantData.slice(1, 3)}
        variant="vertical"
        className="mb-24"
      />
      <PlantCollection
        plants={plantData.lenght > 8 ? plantData.slice(3, 9) : plantData}
        variant="square"
      />
    </Layout>
  )
}
