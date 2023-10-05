const logger = (store) => (next) => (action) => {
  console.log(action);
  return next(action);
};

const customizePokedex = (store) => (next) => (action) => {
  const updatedPayload = [
    { name: 'chikorita', url: 'https://pokeapi.co/api/v2/pokemon/152/' },
    ...action.payload,
  ];
  const updatedAction = { ...action, payload: updatedPayload };

  return next(updatedAction);
};

export { logger, customizePokedex };
