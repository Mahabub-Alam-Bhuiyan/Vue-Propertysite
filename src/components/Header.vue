<template>
<TopHead />
  <Nav />
    <router-view/>

</template>

<script>
import TopHead from '/views/TopHead.vue'
import Nav from '../components/Nav'

export default {
  name: 'App',
  components: {
    TopHead,
    Nav

  }
}
</script>

<style>

</style>
