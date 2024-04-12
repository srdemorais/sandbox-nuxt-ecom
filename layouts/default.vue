<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt shop</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>

  <!-- page content -->
  <div>
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