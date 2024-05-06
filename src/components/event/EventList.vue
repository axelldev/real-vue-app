<script lang="ts" setup>
import EventCard from './EventCard.vue'
import type { EventData } from '@/types'
import EventService from '@/services/eventService'
import { computed, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  page?: number
}>()

const router = useRouter()

const page = computed(() => props.page || 1)
const hasMore = ref(false)

const loading = ref(false)
const events = ref<EventData[]>([])

watchEffect(async () => {
  loading.value = true
  try {
    const data = await EventService.getEvents({
      page: page.value || 1,
      limit: 5
    })
    if (data.data.length === 0) {
      hasMore.value = false
    } else {
      hasMore.value = true
      events.value = data.data
    }
  } catch (error) {
    console.error(error)
    router.push({ name: 'NetworkError' })
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <p v-if="loading" class="text-center">Loading ....</p>
  <div v-else-if="events.length > 0" class="py-2 flex flex-col gap-8 justify-center items-center">
    <EventCard
      v-for="{ title, date, location, id } in events"
      :id
      :date
      :title
      :location
      :key="id"
    />
    <div class="flex justify-center items-center gap-10">
      <router-link
        class="text-start flex-grow"
        v-if="page > 1"
        :to="{ name: 'home', query: { page: page - 1 } }"
        >Previous</router-link
      >
      <router-link
        class="text-end flex-grow"
        v-if="hasMore"
        :to="{ name: 'home', query: { page: page + 1 } }"
        >Next</router-link
      >
    </div>
  </div>
  <div v-else>
    <p>No events found</p>
  </div>
</template>
