<script lang="ts" setup>
import SectionContainer from '@/components/SectionContainer.vue'
import EventService from '@/services/eventService'
import type { EventData } from '@/types'
import { onMounted, ref } from 'vue'
import EventLinks from '@/components/event/EventLinks.vue'
import { useRouter } from 'vue-router'
import { AxiosError } from 'axios'

const props = defineProps<{
  id: string
}>()

const router = useRouter()

const loading = ref(false)
const event = ref<EventData | null>(null)

onMounted(() => {
  loading.value = true
  EventService.getEvent(props.id)
    .then((resp) => {
      event.value = resp.data
    })
    .catch((err) => {
      if (err instanceof AxiosError && err?.response?.status === 404) {
        router.push({
          name: 'NotFoundResource',
          params: { resource: 'event' }
        })
      } else {
        router.push({ name: 'NetworkError' })
      }
    })
    .finally(() => (loading.value = false))
})
</script>

<template>
  <SectionContainer>
    <router-link :to="{ name: 'home' }" class="text-green-300 my-2">Back</router-link>
    <div v-if="loading">Loading ...</div>
    <div v-else-if="event" class="flex flex-col items-center">
      <h1 class="capitalize text-5xl">{{ event?.title }}</h1>
      <div class="my-8">
        <EventLinks :event-id="event.id" />
      </div>
      <router-view :event />
    </div>
  </SectionContainer>
</template>
