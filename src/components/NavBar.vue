<script lang="ts" setup></script>

<template>
  <div class="w-full border-b border-b-zinc-700">
    <nav class="container mx-auto flex gap-3 p-4">
      <router-link :to="{ name: 'home' }" class="font-bold">Home</router-link>
      <router-link :to="{ name: 'about' }" class="font-bold">About</router-link>
    </nav>
  </div>
</template>
