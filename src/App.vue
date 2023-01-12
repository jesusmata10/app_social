<template>
  <NavComponents />

  <router-view />
</template>

<script>
import NavComponents from '@/components/NavComponents.vue'
export default {
  name: 'App',
  components: {
    NavComponents
  }
}
</script>
<style>
#app {
  color: #2c3e50;
}
</style>
