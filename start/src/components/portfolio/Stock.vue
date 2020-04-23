<template>
<div class="col-sm-8 col-md-6 ">
    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">
                {{stock.name}}
                <small>  (Price: {{stock.price}} | Quantity : {{stock.quantity}}) </small>
            </h3>
        </div>
        <div class="panel-body">
            <div class="pull-left">
                <input type="number"
                class="form-control"
                placeholder="Quantity"
                v-model="quantity">
            </div>
            <div class="pull-right">
                <button
                class="btn btn-danger"
                @click="sellStock"
                :disabled="!validateSellCheck || +quantity <= 0 || !Number.isInteger(+quantity)">
                {{!validateSellCheck? 'Sell' : 'Not enough'}}</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: [
    'stock'
  ],
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      sl: 'sellStock'
    }),
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity
      }
      this.sl(order)
      this.quantity = 0
    },
    validateSellCheck () {
      if (this.quantity > this.stock.quantity) { return false } else { return true }
    }
  }
}
</script>

<style>

</style>
