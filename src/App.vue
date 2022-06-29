<template>
  <div>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/products">Products</RouterLink> |
    <RouterLink  to="/cart">Cart</RouterLink>
    <RouterView />
  </div>
</template>

<script>
import { createClient, provideClient } from '@urql/vue';
export default {
  setup() {
    const client = createClient({
      url: 'http://38.242.229.113:8055/graphql',
    });
    provideClient(client)
  }
}
</script>

<style>
</style>