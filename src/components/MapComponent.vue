<template>
  <div>
    <p>Esta en el punto {{ punto }} y un zoom de {{ zoom }}</p>
    <l-map
      ref="map"
      v-model:zoom="zoom"
      style="height: 350px"
      :center="coordenadas"
      @update:center="centerUpdate"
    >
      <l-tile-layer
        :url="url"
        layer-type="base"
        name="OpenStreetMap"
      />

      <l-marker :lat-lng="coordenadas">
        <l-popup>Hello! jkhgjhgjgjfhgfghfh{{ punto }}</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
// import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip, latLng } from '@vue-leaflet/vue-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  data () {
    return {
      zoom: 14,
      coordenadas: [10.4870152, -66.9012229],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      punto: '',
      n: 4.1234567890,
      resultado: '',
      resul: [],
      lat: ''
    }
  },
  methods: {
    centerUpdate (center) {
      // AQUI Notifica cuando el centro es actualizado

      this.punto = center
      this.resultado = this.n.toFixed(4)
      this.resul = Object.entries(this.punto)

      console.log(this.punto)
    }
  }
}
</script>

<style scoped></style>
