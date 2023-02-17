<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="img-cont">
          <img
            alt="Vue logo"
            src="../assets/img/mazebook.svg"
          >
          <h2 class="text-center text-lg-start">
            Con&eacute;ctate con amigos y el resto del mundo usando Mezabook
          </h2>
        </div>
      </div>
      <div class="col-6">
        <CardComponents title="Login" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardComponents from '@/components/CardComponent.vue'
export default {
  name: 'HomeView',
  components: { CardComponents },
  props: ['title']
}
</script>
