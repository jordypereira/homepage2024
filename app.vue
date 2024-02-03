<script lang="ts" setup>
const title = "Jordy Pereira"
const description = "Software Engineer. Person. Inhabitant of planet Earth."
const image = "/images/cover.png"
const icon = "/images/icon.png"

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})

useSeoMeta({
  title,
  description,
  author: "Jordy Pereira",
  creator: "Jordy Pereira",
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: 'https://jordypereira.be',
  ogType: 'profile',
  profileFirstName: 'Jordy',
  profileLastName: 'Pereira',
  profileUsername: 'jordypereira',
  profileGender: 'male',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: icon,
  twitterCard: 'summary'
})
</script>


<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
