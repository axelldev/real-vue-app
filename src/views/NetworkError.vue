<template>
  <div class="text-center my-16">
    <h3 class="text-4xl text-green-400">Uh-Oh!</h3>
    <p>
      It looks like you're experiencing some network issuaes please check your connection and
      <a href="#" @click="$router.go(-1)" class="text-green-300">click here</a> to try again
    </p>
  </div>
</template>
