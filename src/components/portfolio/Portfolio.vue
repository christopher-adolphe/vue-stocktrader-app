<template>
  <div>
    <app-stock v-for="stock in stocks" :stockData="stock"></app-stock>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Stock from './StockSingle.vue';

  export default {
    computed: {
      // Setting stocks directly from the state in portfolio.js module
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style></style>
