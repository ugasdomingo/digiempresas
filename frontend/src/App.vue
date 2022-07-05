<template>
  <nav class="navbar">
    <div class="nav-left">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="digilogo">
      </router-link>
    </div>
    <div class="nav-rigth">
      <router-link to="/formaciones">Formaciones</router-link> |
      <router-link to="/servicios">Servicios</router-link> |
      <router-link to="/salud-empresarial">Salud Empresarial</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">
html,
body,
.app {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--brand-blue);
  color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
}
* {
  --brand-green: #42b983;
  --brand-blue: #1c2686;
  --brand-orange: #FCA90F;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(28, 38, 134, 0.1);
  padding: 4px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.nav-left img {
  height: 40px;
  padding: 0 0 0 20px;
}
.nav-rigth {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0;
  width: 50%;
}
</style>
