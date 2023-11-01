import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    window
      .fetch('/api/avocado')
      .then((response) => response.json())
      .then(({ data, lenght }) => setProductList(data))
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((product, index) => (
        <figure key={index}>
          <Image
            src={product.image}
            alt={product.name}
            height={250}
            width={250}
            priority
          />
          <figcaption>{product.name}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export default HomePage
