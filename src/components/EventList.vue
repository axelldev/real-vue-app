<script lang="ts" setup>
import EventCard from './EventCard.vue'
import type { EventData } from '@/types'
import EventService from '@/services/eventService'
import { onMounted, ref } from 'vue'

const events = ref<EventData[]>([])

onMounted(async () => {
  try {
    const resp = await EventService.getEvents()
    events.value = resp.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div class="py-2 flex flex-col gap-8 justify-center items-center">
    <EventCard
      v-for="{ title, date, location, id } in events"
      :id
      :date
      :title
      :location
      :key="id"
    />
  </div>
</template>
