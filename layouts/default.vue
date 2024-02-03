<script lang="ts" setup></script>

<template>
  <div class="flex-col flex w-screenmin-h-screen">
    <div class="w-full">
      <AppHeader />
    </div>
    <div class="flex-grow">
      <slot />
    </div>
    <!-- <AppFooter /> -->
  </div>
</template>

<style scoped>
</style>
