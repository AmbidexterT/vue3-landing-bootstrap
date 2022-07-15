<template>
  <NavBar/>
  <Credit/>
  <Jumbotron/>
  <CTA/>
  <Cards/>
  <Footer/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Jumbotron from './components/Jumbotron.vue'
import CTA from './components/CTA.vue'
import Cards from './components/Cards.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Jumbotron,
    CTA,
    Cards,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
