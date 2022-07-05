<template>
  <div>
    <ServiceContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ServiceContent from '@/components/ServiceContent.vue'

export default defineComponent({
  name: 'ServiciosView',
  components: {
    ServiceContent
  }
})
</script>
