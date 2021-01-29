<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :paramInfo="paramInfo"/>
      <detail-comment-info :commentInfo="commentInfo"/>
      <goods-list :goods="recommends"/>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
  import DetailParamInfo from './childComps/DetailParamInfo.vue'
  import DetailCommentInfo from './childComps/DetailCommentInfo.vue'

  import GoodsList from 'components/content/goods/GoodsList.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'

  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail.js'

  import {itemListenerMixin} from 'common/mixin.js'

  export default {
    name: 'Detail',
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: []
      }
    },
    mixins: [itemListenerMixin],
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      Scroll,
      GoodsList
    },
    created() {
      this.iid = this.$route.params.iid

      //请求详情数据
      getDetail(this.iid).then(res => {
        //获取顶部轮播图数据
        this.topImages = res.result.itemInfo.topImages

        //获取商品信息
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)

        //获取店铺信息
        this.shop = new Shop(res.result.shopInfo)

        //保存商品详情数据
        this.detailInfo = res.result.detailInfo

        //获取参数信息
        this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)

        //取出评论信息
        if(res.result.rate.cRate !== 0) {
          this.commentInfo = res.result.rate.list[0]
        }
      })

      //请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list

      })
    },
    mounted() {
    },
    //unmounted
    unmounted() {
      //取消全局事件监听
      this.$eventBus.off('itemImageLoad', this.itemImgListener)
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped="scoped">
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
