<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'

  export default {
    name: 'GoodsList',
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .goods {
    display: flex;
    /*根绝宽度决定一行显示多少个*/
    flex-wrap: wrap;

    /*均等分*/
    justify-content: space-around;

    padding: 2px;
  }
</style>
