<script lang="ts" setup>
import type { EventData, FlashMessageStore } from '@/types'
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps<{
  event: EventData
}>()

const router = useRouter()
const GStore = inject<FlashMessageStore>('GStore')

const registerService = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 1000)
  })

const loading = ref(false)

function register() {
  if (loading.value) return
  loading.value = true
  registerService()
    .then(() => {
      if (GStore) {
        GStore.flashMessage = {
          message: 'You have successfully registered to the event',
          type: 'success'
        }
        setTimeout(() => {
          GStore.flashMessage.message = null
        }, 3000)
      }
      router.push({ name: 'event-detail' })
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<template>
  <h3>Register to {{ event.title }}</h3>
  <button
    class="my-4 block px-4 py-2 bg-green-400 text-zinc-900 rounded-lg font-bold tranistion-colors hover:shadow-md hover:shadow-green-500/50"
    :class="{ 'cursor-not-allowed': loading, 'opacity-50': loading }"
    @click="register"
    :disabled="loading"
  >
    {{ loading ? 'Loading ...' : 'Register' }}
  </button>
</template>
