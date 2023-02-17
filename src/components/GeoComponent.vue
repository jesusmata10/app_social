<template>
  <div>
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :center="[10.4870152, -66.9012229]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />

      <l-polygon
        :lat-lngs="[
          [10.4870152, -66.9012229],
          [10.4870152, -66.9012229],
          [10.4870152, -66.9012229],
          [10.4870152, -66.9012229],
        ]"
        color="#41b782"
        :fill="true"
        :fill-opacity="0.5"
        fill-color="#41b782"
      >
        <l-popup> Hi! I'm a polygon, nice to meet you! </l-popup>
      </l-polygon>
    </l-map>
  </div>
</template>
<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LLayerGroup,
  LPolygon,
  LPolyline,
  LRectangle,
  LCircle,
  LCircleMarker
} from '@vue-leaflet/vue-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LLayerGroup,
    LPolygon,
    LPolyline,
    LRectangle,
    LCircle,
    LCircleMarker
  },
  data () {
    return {
      zoom: 9,
      coordinates: [10.4870152, -66.9012229]
    }
  }
}
</script>

<style scoped>
div {
    height: 600px;
    width: 100%;
}
</style>
