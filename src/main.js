import {createApp} from 'vue'
import App from './App'
import router from './router'
import eventBus from 'vue3-eventbus'

createApp(App).use(router).use(eventBus).mount('#app')
