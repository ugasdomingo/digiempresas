<template>
  <div>
    <HomeContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeContent from '@/components/HomeContent.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeContent
  }
})
</script>
