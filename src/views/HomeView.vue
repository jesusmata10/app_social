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
        <div class="row justify-content-sm-center">
          <div
            class="card mt-5"
            style="width: 18rem;"
          >
            <div class="card-body">
              <form class="row g-3">
                <div class="col-auto">
                  <label
                    for="staticEmail2"
                    class="visually-hidden"
                  >Email</label>
                  <input
                    id="staticEmail2"
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    value="email@example.com"
                  >
                </div>
                <div class="col-auto">
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
                <div class="col-auto">
                  <button
                    type="submit"
                    class="btn btn-primary mb-3"
                  >
                    Confirm identity
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
