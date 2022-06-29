<template>
  <div>
      <div v-if="fetching">Loading...</div>
      <div v-else-if="error">Oh no... {{ error }}</div>
      <div class="w-full " v-else>
         <div class=" flex flex-wrap" v-if="data">
              <div class="border w-96 mr-3 border-gray-300 rounded-xl" v-for="p in data.products" :key="p.id">
               <img class="w-full" :src="'http://38.242.229.113:8055/assets/' + p.image.id"/>
                  <p class="font-medium text-start m-2 text-black text-sm">{{ p.title }}</p>
                  <div class="flex justify-between items-center p-4"><p class="font-semibold flex-end ">{{ p.price }} USD</p>
                    <button @click="addToCart(p)" class="font-bold text-lg text-white bg-green-600 rounded-xl p-2 ">купить
                    </button>
                  </div>   
            </div>
         </div>
      </div>
  </div>
</template>

<script>
import { useQuery, gql } from "@urql/vue";
import { addToCart } from '@/utils/cart'
export default {
  setup() {
    const result = useQuery({
      query: gql`
        {
          products(limit: 10) {
            id
            title
            price
            description
              image {  
            id  
          }  

          }
        }
      `,

    });
    return {
      fetching: result.fetching,
      data: result.data,
      error: result.error,
      addToCart
    };
  },
};
</script>

<style scoped></style>