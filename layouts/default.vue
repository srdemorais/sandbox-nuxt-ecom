<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt shop</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>

  <!-- page content -->
  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }

  p {
    margin: 20px 0;
  }

</style>