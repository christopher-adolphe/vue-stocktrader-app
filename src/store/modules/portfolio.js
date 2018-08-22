const state = {
  funds: 100000,
  stocks: []
};

const mutations = {
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  },
  'BUY_STOCK' (state, {id, price, name, quantity}) {
    const record = state.stocks.find(element => element.id == id);

    // If the record already exists, only update the quantity
    if (record) {
      record.quantity += quantity;
    }
    // Else add the order to the portfolio stocks array
    else {
      state.stocks.push({
        id: id,
        quantity: quantity
      });
    }

    state.funds -= price * quantity;
  },
  'SELL_STOCK' (state, {id, price, quantity}) {
    const record = state.stocks.find(element => element.id == id);
    
    if (record.quantity > quantity) {
      record.quantity -= quantity
    }
    else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }

    state.funds += price * quantity;
  }
};

const actions = {
  sellStock: ({commit}, order) => {
    commit('SELL_STOCK', order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    // Using map method allows to transform each element of the array
    return state.stocks.map(stock => {
      // Accessing the 'stocks' getter from the stocks.js module
      const record = getters.stocks.find(element => element.id == stock.id);

      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds: state => {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
