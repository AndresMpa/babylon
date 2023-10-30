const logger = (store) => (next) => (action) => {
  console.log(action);
  return next(action);
};

const customizePokedex = (store) => (next) => (action) => {
  if (action.type === 'SET_POKEMON') {
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
  } else {
    return next(action);
  }
};

export { logger, customizePokedex };
