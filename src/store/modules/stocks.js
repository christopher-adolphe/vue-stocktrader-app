import stocksData from '../../data/stocks-data.js';

const state = {
  stocks: []
};

const mutations = {
  'SET_STOCKS' (state, stocksData) {
    state.stocks = stocksData;
  },
  'RAND_STOCKS' (state) {}
};

const actions = {
  buyStock: ({commit}, order) => {
    // Action performing a mutation from another module through global namespace
    commit('BUY_STOCK', order);
  },
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocksData);
  },
  randomizeStocks: ({commit}) => {
    commit('RAND_STOCKS');
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
