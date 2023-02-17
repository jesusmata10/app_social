<template>
  <div class="row justify-content-sm-center">
    <div
      class="card mt-5"
      style="width: 22rem;"
    >
      <div class="card-body">
        <h5 class="card-title">
          {{ title }}
        </h5>
        <form class="row g-3">
          <div class="d-grid gap-2">
            <label
              for="email"
              class="visually-hidden"
            >Email</label>
            <input
              id="email"
              type="text"
              class="form-control"
              placeholder="Email"
            >
          </div>
          <div class="d-grid gap-2">
            <label
              for="inputPassword2"
              class="visually-hidden"
            >Password</label>
            <input
              id="inputPassword2"
              type="password"
              class="form-control"
              placeholder="Password"
            >
          </div>
          <div class="d-grid gap-2">
            <button
              type="submit"
              class="btn btn-block btn-primary mb-3"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponents',
  components: '',
  props: ['title']

}
</script>
