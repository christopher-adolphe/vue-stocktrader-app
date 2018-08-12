<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stockName }} <small>(Price: {{ stockPrice }} | Quantity: {{ quantity }})</small></h3>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model.number="quantity">
        </div>

        <div class="pull-right">
          <button class="btn btn-success" @click="sellStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: ['stockData'],
    data() {
      return {
        stockId: this.stockData.id,
        stockName: this.stockData.name,
        stockPrice: this.stockData.price,
        quantity: 0
      };
    },
    methods: {
      ...mapActions([
        'sellStock'
      ]),
      sellStock() {
        const order = {
          id: this.stockId,
          price: this.stockPrice,
          quantity: this.quantity,
          name: this.stockName
        };

        //console.log(order);

        this.$store.dispatch('buyStock', order);

        this.quantity = 0;
      }
    }
  }
</script>

<style></style>
