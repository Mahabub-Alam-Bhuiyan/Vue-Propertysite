<template>
  <Banner />
  <About />
  <Service />
  <Client />
  <Analysis />
  <Contact />
  <Subscribe />
</template>

<script>
import Banner from './middle/Banner'
import About from './middle/About'
import Service from './middle/Service'
import Client from './middle/Client'
import Analysis from './middle/Analysis'
import Contact from './middle/Contact'
import Subscribe from "@/components/middle/Subscribe";

export default {
  name: 'Middle',
  components: {
        Banner,About,Service,Client,Analysis,Contact,Subscribe
  }
}
</script>

<style>

</style>
