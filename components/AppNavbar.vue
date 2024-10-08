<script lang="ts" setup>
const items = [
  { title: 'Home', to: '/' },
  { title: 'Life', to: '/life' },
  { title: 'Culture', to: '/culture' },
  // { title: 'Work', to: '/work' },
]
</script>

<template>
  <nav class="mb-12">
    <ul class="flex gap-4">
      <li v-for="item in items" :key="item.title">
        <NuxtLink :to="item.to">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply underline text-red-600;
}
</style>
