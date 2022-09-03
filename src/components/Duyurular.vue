<template>
  <div class="dyr">
    <div style="ride:true" id="carouselExampleIndicators" class="carousel slide " data-bs-ride="true">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="src/components/Pictures/432020811971.png"  >
        </div>
        <div class="carousel-item">
          <img src="src/components/Pictures/aesthetic-dark-wallpaper-backgro.jpg"  >
        </div>
        <div class="carousel-item">
          <img src="src/components/Pictures/sunrise-planet-earth-space_11702.jpg" >
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

</template>

<script>
export default {
  name: "cAROUSEL"
}
</script>

<style scoped>

div.dyr{
  text-align: center;
  position: absolute;

}

</style>