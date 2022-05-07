<template>
  <div class="home">
    <HelloWorld msg="이것은 테스트다"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default  {
  name: 'TestView',
  components: {
    HelloWorld
  },
  setup() {

  }
}
</script>
