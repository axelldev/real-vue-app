<script lang="ts" setup>
withDefaults(
  defineProps<{
    resource?: string
  }>(),
  {
    resource: 'page'
  }
)
</script>

<template>
  <div class="container mx-auto my-20 text-center">
    <h1 class="text-5xl my-3 text-green-300">Oops!</h1>
    <p class="text-zinc-300">The {{ resource }} you are looking for does not exist.</p>
  </div>
</template>
