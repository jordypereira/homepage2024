<template>
  <main class="mx-auto prose lg:prose-xl">
    <ContentRenderer :value="data" />
  </main>
</template>

<script lang="ts" setup>
const path = useRoute().path
const folderName = 'b'
const pathWithoutFolder = path.replace(`/${folderName}`, '')
const { data } = await useAsyncData(pathWithoutFolder, () => queryContent(pathWithoutFolder).findOne())
</script>

<style scoped>

</style>
