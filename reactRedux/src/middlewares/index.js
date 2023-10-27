const logger = (store) => (next) => (action) => {
  console.log(action);
  return next(action);
};

const customizePokedex = (store) => (next) => (action) => {
  const updatedPayload = [
    {
      name: 'chikorita',
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
      },
    },
    ...action.payload,
  ];
  const updatedAction = { ...action, payload: updatedPayload };

  return next(updatedAction);
};

export { logger, customizePokedex };
