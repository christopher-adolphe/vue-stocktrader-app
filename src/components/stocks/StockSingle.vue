<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stockData.name }} <small>(Price: {{ stockData.price }})</small></h3>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" :class="{ danger: insufficientFunds }" placeholder="Quantity" v-model.number="quantity">
        </div>

        <div class="pull-right">
          <button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)">{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stockData'],
    data() {
      return {
        quantity: 0
      };
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds() {
        return this.stockData.price * this.quantity > this.funds;
      }
    },
    methods: {
      buyStock() {
        const order = {
          id: this.stockData.id,
          name: this.stockData.name,
          price: this.stockData.price,
          quantity: this.quantity
          
        };

        //console.log(order);

        this.$store.dispatch('buyStock', order);

        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
