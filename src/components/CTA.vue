<template>
  <div class="container my-5">
    <div class="row">
      <div class="col">
        <div class="grad text-white my-1 py-1 card" >
          <div class="card-body text">
            Boundless space, striking in its beauty and bringing peace of mind
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTA'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grad {
  background: rgb(51,86,126);
  background: linear-gradient(153deg, rgba(51,86,126,1) 0%, rgba(200,217,122,1) 100%, rgba(32,62,35,1) 100%);
}
.text {
  font-family: "ui-monospace",serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  font-size: 30px;
}
</style>
