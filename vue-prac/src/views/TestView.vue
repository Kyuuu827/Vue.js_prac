<template>
  <div class="home">
    <HelloWorld msg="Vue.js Practice"/>
    <home-view />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import HomeView from './HomeView.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestView',
  components: {
    HelloWorld,
    HomeView
  },
  setup() {
    
    watch()
    onMounted()

  }
}) 
</script>