<template>
  <Header />
<!--  <router-view :key="$route.fullPath"></router-view>-->
  <Footer />
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer'
// import Middle from "@/components/Middle";


export default {
  name: 'App',
  components: {
    // Middle,
    Header,Footer
  }
}
</script>

<style >

</style>
