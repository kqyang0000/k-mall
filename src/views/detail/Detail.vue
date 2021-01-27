<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'

  import {getDetail, Goods, Shop} from 'network/detail.js'

  export default {
    name: 'Detail',
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {}
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll
    },
    created() {
      this.iid = this.$route.params.iid

      getDetail(this.iid).then(res => {
        //获取顶部轮播图数据
        this.topImages = res.result.itemInfo.topImages

        //获取商品信息
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)

        //获取店铺信息
        this.shop = new Shop(res.result.shopInfo)
      })
    }
  }
</script>

<style scoped="">
  #detail {
    position: relative;
    z-index: 10;
    background-color: #FFFFFF;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 10;
    background-color: #FFFFFF;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>
