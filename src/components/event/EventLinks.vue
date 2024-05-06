<template>
  <div class="flex gap-3">
    <router-link
      active-class=""
      exact-active-class="text-green-300"
      :to="{ name: 'event-detail' }"
      class="underline font-bold"
      >Details</router-link
    >
    |
    <router-link :to="{ name: 'event-edit' }" class="underline font-bold">Edit</router-link>
    |
    <router-link :to="{ name: 'event-register' }" class="underline font-bold">Register</router-link>
  </div>
</template>
