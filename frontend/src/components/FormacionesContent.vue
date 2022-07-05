<template>
  <div class="container">
    <h1>Desarrolla tus habilidades</h1>
    <div class="card">
      <img
        src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="formacion"
      >
      <div class="card-info">
        <h2>Titulo de la formación</h2>
        <p>Todo lo que vas a aprender</p>
        <button>Ver más</button>
      </div>
    </div>
    <div class="card">
      <img
        src="https://images.pexels.com/photos/7267105/pexels-photo-7267105.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="formacion"
      >
      <div class="card-info">
        <h2>Titulo de la formación</h2>
        <p>Todo lo que vas a aprender</p>
        <button>Ver más</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormacionesContent'
})
</script>

<style lang="scss">
.container {
  position: relative;
  top: 100px;
  display: grid;
  grid-gap: 20px;
  place-items: center;
}
.card {
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  height: 150px;
  background-color: var(--brand-green);
  border-radius: 10px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 10px 0 0 10px;
    object-fit: cover;
  }

}
.card-info {
  padding: 0 20px 0;
}
</style>
