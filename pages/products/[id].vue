<template>
  <div>
    <p>Product: {{ id }}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repudiandae dolor velit rem aut! A asperiores ipsum necessitatibus perspiciatis impedit! Esse quos sint adipisci libero magnam, nesciunt harum animi quae?</p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params
</script>

<style scoped>

</style>