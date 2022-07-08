import * as Yup from 'yup';

module.exports = {
  arrayFromNumber: (array, limit = 1) => {
    return Array(Math.ceil(array.length / limit))
      .fill()
      .map((_, item) => item + 1);
  },

  productSchema: () => {
    return Yup.object().shape({
      title: Yup.string().min(3).max(40).required(),
      price: Yup.number().min(5).max(10000).required(),
      description: Yup.string().min(3).max(180).required(),
      categoryId: Yup.number().required(),
      images: Yup.array().of(Yup.string()),
    });
  },
};
