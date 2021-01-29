import {debounce} from 'common/utils.js'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)

    this.itemImgListener = () => {
      refresh()
    }
    //监听item中组件加载完成
    this.$eventBus.on('itemImageLoad', this.itemImgListener)
  }
}
