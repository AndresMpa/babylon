import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';

import Chart from '@common/Char';

const PRODUCT_LIMIT = 0;
const PRODUCT_OFFSET = 0;

export default function Data() {
  const products = useFetch(
    endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET)
  );
  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);

  const countOccurrences = (arr) =>
    arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        borderWidth: 2,
        label: 'Categories',
        data: countOccurrences(categoryCount),
        backgroundColor: [
          '#ffbb11',
          '#c0c0c0',
          '#50Af95',
          '#f0ba2f',
          '#2a71d0',
        ],
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
}
