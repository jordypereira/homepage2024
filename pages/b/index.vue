<template>
  <main class="flex flex-col justify-center items-center">
    <ContentRenderer v-if="intro":value="intro" class="prose lg:prose-xl">
      <ContentRendererMarkdown :value="intro" />
    </ContentRenderer>
    <pre class="">
      <div class="w-[400px] h-[300px] p-4">
        <h2>ISR + Hybrid Rendering on Vercel</h2>
        <div v-for="page in isrNavigation?.children" class="rounded-full p-2 underline text-red-500 text-of flex justify-center items-center">
          <nuxt-link :to="'/b' + page._path">{{ page.title }}</nuxt-link>
        </div>
      </div>
    </pre>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Field Experiments',
})
const path = useRoute().path
const { data: intro } = await useAsyncData('intro', () => queryContent('intro').findOne())
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const isrNavigation = computed(() => navigation.value?.find((item) => item._path === '/isr'))
</script>

<style scoped>
.text-of {
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
