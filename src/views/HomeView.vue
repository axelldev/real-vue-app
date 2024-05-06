<script lang="ts" setup>
import EventList from '@/components/event/EventList.vue'
import SectionContainer from '@/components/SectionContainer.vue'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps<{ page?: number }>()
</script>

<template>
  <SectionContainer>
    <SectionTitle class="text-center">Events</SectionTitle>
    <EventList :page />
  </SectionContainer>
</template>
