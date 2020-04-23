<template>
  <div>
    <h1>This is The Stocks Page</h1>
    <Stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></Stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  components: { Stock },
  computed: {
    stocks () {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style></style>
