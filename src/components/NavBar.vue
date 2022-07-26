<template>
  <div class="hello">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" style="font-family: Monospaced,serif" href="#">Kolʹskiy poluostrov</a>
        <form class="d-flex p-2 bd-highlight" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <span class="nav-link active" aria-current="page">Find more on:</span>
            </li>
            <li class="nav-item">
              <a class="link link-transfusion gradient" target="_blank" href="https://github.com/AmbidexterT"><font-awesome-icon :icon="[ 'fab', 'github' ]" color="#FFF"  /> Github</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/styles/link.css";
</style>
