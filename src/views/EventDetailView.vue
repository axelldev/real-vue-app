<script lang="ts" setup>
import SectionContainer from '@/components/SectionContainer.vue'
import EventService from '@/services/eventService'
import type { EventData } from '@/types'
import { onMounted, ref } from 'vue'
import { formatDate } from '@/utils/datetime'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const loading = ref(false)
const event = ref<EventData | null>(null)

onMounted(() => {
  loading.value = true
  EventService.getEvent(props.id)
    .then((resp) => {
      event.value = resp.data
    })
    .catch((err) => {
      console.error(err)
    })
    .finally(() => (loading.value = false))
})
</script>

<template>
  <SectionContainer>
    <router-link :to="{ name: 'home' }" class="text-green-300 my-2">Back</router-link>
    <div v-if="loading">Loading ...</div>
    <div v-else-if="event">
      <h1 class="capitalize text-5xl my-3">{{ event?.title }}</h1>
      <p class="description text-zinc-300">{{ event?.description }}</p>
      <p class="text-zinc-400">@{{ event.location }} on {{ formatDate(event.date) }}</p>
    </div>
  </SectionContainer>
</template>
