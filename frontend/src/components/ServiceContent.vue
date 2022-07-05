<template>
  <div class="container">
    <h1>Descansa, nos encargamosd de todo</h1>
    <div class="card">
      <img src="" alt="service">
      <div class="card-info">
        <h2>Páginas Web</h2>
        <p>
          Diseño y desarrollo de Páginas Web enfocadas en el usuario.
          Permitiendo la automatización de procesos de tu negocio para
          aumentar la eficiencia y la productividad.
        </p>
        <button>Cotizar</button>
      </div>
    </div>
    <div class="card">
      <img src="" alt="service">
      <div class="card-info">
        <h2>Tienda Virtual</h2>
        <p>
          Diseño y desarrollo de Tienda Virtual enfocadas en el usuario.
          Permitiendo la automatización de ventas y generación de leads,
          para crecer exponencialmente.
        </p>
        <button>Cotizar</button>
      </div>
    </div>
    <div class="card">
      <img src="" alt="service">
      <div class="card-info">
        <h2>Aplicaiones Web</h2>
        <p>
          Diseño y desarrollo de Aplicaciones Web a tu medidad.
          Ideal para que tus clientes puedan interactuar con tu negocio.
          Incluye desarrollo de MVP para Startups.
        </p>
        <button>Ver más</button>
      </div>
    </div>
    <div class="card">
      <img src="" alt="service">
      <div class="card-info">
        <h2>Aplicaiones Web</h2>
        <p>
          Diseño y desarrollo de Aplicaciones Web a tu medidad.
          Ideal para que tus clientes puedan interactuar con tu negocio.
          Incluye desarrollo de MVP para Startups.
        </p>
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
</style>
