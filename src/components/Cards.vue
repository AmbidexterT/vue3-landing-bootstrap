<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <img src="../assets/images/sunset.jpg" width="320" height="200" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Sunsets</h5>
            <p class="card-text">
              Blazing heavenly dawn, striking in its beauty.
            </p>
            <button class="btn btn-primary first" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop1" aria-controls="offcanvasTop1">Watch sunset</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="../assets/images/palat.jpg" width="320" height="200" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Nature</h5>
            <p class="card-text">
              A serene endless space untouched by the hand of man. A place where you can be alone with your thoughts.
            </p>
            <button class="btn btn-primary second" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop2" aria-controls="offcanvasTop2">Nature of Kol'skiy in 4K</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="../assets/images/triple.png" width="320" height="200" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Mountains and waterfalls</h5>
            <p class="card-text">
              Diverse wonders of nature.
            </p>
            <button class="btn btn-primary third" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop3" aria-controls="offcanvasTop3">Journey to nature</button>
          </div>
        </div>
        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop1">
          <div class="offcanvas-body first">
            <iframe width="400" height="200" src="https://www.youtube.com/embed/U4SG679xv54" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="offcanvas-body first">
            <a class="link link-transfusion gradient" target="_blank" href="https://www.youtube.com/watch/v=U4SG679xv54">Watch in Youtube</a>
          </div>
        </div>
        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop2" >
          <div class="offcanvas-body second">
            <iframe width="400" height="200" src="https://www.youtube.com/embed/d-vlkwCs7mw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="offcanvas-body second">
            <a class="link link-transfusion gradient" target="_blank" href="https://www.youtube.com/watch/v=d-vlkwCs7mw">Watch in Youtube</a>
          </div>
        </div>
        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop3">
          <div class="offcanvas-body third">
            <div >
            <iframe width="400" height="200" src="https://www.youtube.com/embed/9z2-pMor5FM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div class="offcanvas-body third" >
            <a class="link link-transfusion gradient" target="_blank" href="https://www.youtube.com/watch/v=9z2-pMor5FM">Watch in Youtube</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "Cards",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.first{
  background: #3b5d7f;
}
.second{
  background: #839c7d;
}
.third{
  background: #b5c77b;
}
.canvas-color {
  background: #0c296b;
}
span {
  font-family: "KTF",monospace;
}
a {
  background: #ffffff;
}
</style>
