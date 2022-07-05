<template>
  <div>
    <FormacionesContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormacionesContent from '@/components/FormacionesContent.vue'

export default defineComponent({
  name: 'FormcionesView',
  components: {
    FormacionesContent
  }
})
</script>
