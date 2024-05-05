<script lang="ts" setup>
import { formatDate } from '@/utils/datetime'
import { onMounted } from 'vue'

const { id, date } = defineProps<{
  id: string
  date: string
  title: string
  location: string
}>()

const formatedDate = formatDate(date)

onMounted(async () => {})
</script>

<template>
  <RouterLink :to="{ name: 'event-detail', params: { id } }">
    <article
      class="flex flex-col items-center group cursor-pointer p-6 border border-zinc-700 rounded-md transition-colors hover:border-green-300 w-[350px]"
    >
      <h3 class="font-bold text-lg text-zinc-300 group-hover:text-green-300 transition-colors">
        {{ title }}
      </h3>
      <span class="text-zinc-400">@{{ location }} on {{ formatedDate }}</span>
    </article>
  </RouterLink>
</template>
