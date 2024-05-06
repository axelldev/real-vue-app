<script setup lang="ts">
import { inject } from 'vue'
import NavBar from './components/NavBar.vue'
import type { FlashMessageStore } from './types'

const GStore = inject<FlashMessageStore>('GStore')
</script>

<template>
  <div
    id="flash-message"
    v-if="GStore?.flashMessage.message"
    class="absolute top-5 right-5 p-4 z-50 bg-zinc-900 border border-zinc-700 rounded-lg font-bold"
    :class="GStore.flashMessage.type === 'success' ? 'bg-green-500' : 'bg-red-500'"
  >
    {{ GStore.flashMessage.message }}
  </div>
  <NavBar />
  <RouterView />
</template>

<style scoped>
#flash-message {
  animation: slide-up 0.3s ease;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(70%);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
