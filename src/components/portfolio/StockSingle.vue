<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stockData.name }} <small>(Price: {{ stockData.price }} | Quantity: {{ stockData.quantity }})</small></h3>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" :class="{ danger: insufficentQuantity }" placeholder="Quantity" v-model.number="sellQuantity">
        </div>

        <div class="pull-right">
          <button class="btn btn-success" @click="sellStock" :disabled="insufficentQuantity || sellQuantity <= 0 || !Number.isInteger(sellQuantity)">{{ insufficentQuantity ? 'Not enough' : 'Sell' }}</button>
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
        sellQuantity: 0
      };
    },
    computed: {
      insufficentQuantity() {
        return this.sellQuantity > this.stockData.quantity;
      }
    },
    methods: {
      ...mapActions({
        placeSellingOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          id: this.stockData.id,
          name: this.stockData.name,
          price: this.stockData.price,
          quantity: this.sellQuantity
        };

        this.placeSellingOrder(order);

        this.sellQuantity = 0;
      }
    }
  }
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
