import coinsReducer, { Creators as CoinsActions } from '../../store/ducks/coins';

const INITIAL_STATE = {
  items: [
    {
      CoinInfo: {
        FullName: 'Bitcoin',
      },
      excluded: false,
    },
    {
      CoinInfo: {
        FullName: 'DogCoin',
      },
      excluded: false,
    },
  ],
};

describe('Coins reducer', () => {
  it('Should be able to set new items', () => {
    const state = coinsReducer({ items: [] }, CoinsActions.setCoinsRequest(INITIAL_STATE.items));

    expect(state.items).toBe(INITIAL_STATE.items);
  });

  it('Should be able to set filter by name', () => {
    const state = coinsReducer(INITIAL_STATE, CoinsActions.setFilter('Dog'));

    expect(state.items[0].excluded).toBeTruthy();
    expect(state.items[1].excluded).toBeFalsy();
  });

  it('Should return current state when a wrong action be set or nothing be passed', () => {
    const state = coinsReducer(INITIAL_STATE, { type: 'SET_WRONG_ACTION' });
    expect(state).toBe(state);
  });
});
