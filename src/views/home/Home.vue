<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:left>
      </template>
      <template v-slot:center>
        蘑菇街
      </template>
      <template v-slot:right>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'

  import {getHomeMultidata} from 'network/home.js'

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #FFFFFF;
  }
</style>
