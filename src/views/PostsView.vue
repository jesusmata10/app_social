<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <h2>Mapa</h2>
        <MapComponent />
      </div>
      <div class="col-12 col-md-6">
        <h2>Mapa</h2>
        <GeoComponent />
      </div>
    </div>
  </div>
</template>

<script>
import MapComponent from '@/components/MapComponent.vue'
import GeoComponent from '@/components/GeoComponent.vue'
export default {
  name: 'PostView',
  components: { MapComponent, GeoComponent }

}

</script>
