<template>
  <div>
    <div
      class="border-2 border-black mb-2 p-4"
      v-for="(p, index) in cart"
      :key="p.id"
    >
      <p>{{ p.title }}</p>
      <p>{{ p.price }}</p>
      <button
        @click="deleteFromCart(index)"
        class="border-2 border-black p-1 hover:text-white hover:bg-black"
      >
        delete from cart
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';5
import { deleteFromCart } from '../utils/cart'
export default {
  setup() {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    return {
      cart,
      deleteFromCart
    }
  },
};
</script>
