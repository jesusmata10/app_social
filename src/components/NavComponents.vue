<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div
      id="navbarText"
      class="container justify-content-evenly"
    >
      <router-link
        to="/"
        class="nav-link active"
        aria-current="page"
      >
        <span class="material-icons-outlined">
          home
        </span>
      </router-link>

      <router-link
        to="/posts"
        class="nav-link"
      >
        <span class="material-icons-outlined">
          source
        </span>
      </router-link>

      <router-link
        to="/prueba"
        class="nav-link"
      >
        <span class="material-icons-outlined">
          info
        </span>
      </router-link>

      <router-link
        to="/about"
        class="nav-link"
      >
        <span class="material-icons-outlined">
          info
        </span>
      </router-link>
    </div>
  </nav>
</template>

<script>

</script>

<style scoped>
.material-icons-outlined {
  color: white;
  font-size: 1.4em;
  background-color: rgba(218, 218, 218, 0.158);
  padding: 0.3em;
  border-radius: 50%;
  margin: 0.1em;

}

.navbar{
  padding-bottom: 0;
  padding-top: 0;
}

.nav-link {
  padding: 0.2rem 1rem;
}

</style>
