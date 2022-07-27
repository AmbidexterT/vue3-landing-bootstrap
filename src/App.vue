<template>
  <NavBar/>
  <Jumbotron/>
  <CTA/>
  <Cards/>
  <Blue/>
  <Footer/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Jumbotron from './components/Jumbotron.vue'
import CTA from './components/CTA.vue'
import Cards from './components/Cards.vue'
import Footer from './components/Footer.vue'
import Blue from './components/Blue.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Jumbotron,
    CTA,
    Cards,
    Blue,
    Footer
  }
}
</script>

<style>
#app {
  font-family: "KTF",monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
