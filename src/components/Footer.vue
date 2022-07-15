<template>
  <footer class="footer py-3 bg-dark mt-5">
    <component :is="'script'" >
      this.year = 
    </component>
  <div class="container">
    <span class="text-white"> {{new Date().getFullYear()}} All Rights Reserved - Stepan Petrov</span>
  </div>
</footer>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
