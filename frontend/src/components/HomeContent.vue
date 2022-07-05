<template>
  <main>
    <h1>Descansa</h1>
    <h3>Nos encargamos de todo</h3>
    <button>Delega la digitalización de tu Marca</button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeContent'
})
</script>

<style lang="scss">
main {
  padding: 1rem;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image:
    linear-gradient(
      to bottom,
      rgba(28, 38, 134, 0.85),
      rgba(28, 38, 134, 0.85)
    ),
    url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
  background-size: cover;
  background-position: center;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 0;
  }
  h3 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 0;
  }
  button {
    background: var(--brand-orange);
    color: var(--brand-blue);
    padding: 1rem;
    margin: 24px 0 0;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
  }
}

</style>
