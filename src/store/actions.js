import Vue from 'vue';

export const loadData = ({commit}) => {
  // Using vue-resource to make a get request
  Vue.http.get('data.json')
    // Formatting the response of the get request on a javascript object
    .then(response => response.json())
    // Using the formatted data to set the states
    .then(data => {
      // Checking if data exists before setting the states
      if (data) {
        // Setting the different states from the extracted data
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;
        const stocks = data.stocks;

        // Creating a portfolio object to store states for the portfolio module
        const portfolio = {
          funds,
          stockPortfolio
        };

        // Committing to the mutations in stocks & portfolio modules to set the states
        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
      }
    });
};