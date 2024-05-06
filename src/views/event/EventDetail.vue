<script lang="ts" setup>
import type { EventData } from '@/types'
import { formatDate } from '@/utils/datetime'

defineProps<{
  event: EventData
}>()
</script>

<template>
  <p class="description text-zinc-300">{{ event.description }}</p>
  <p class="text-zinc-400">@{{ event.location }} on {{ formatDate(event.date) }}</p>
</template>
