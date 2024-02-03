<script lang="ts" setup></script>

<template>
  <body class="min-h-screen pb-12 bg-white">

    <main class="md:max-w-4xl mx-6 md:mx-auto md:px-6">
      <section>
        <h2 class="heading">About</h2>
        <p>Living in <span class="text-yellow-600">Stockholm, Sweden</span>. Grown up in <span
            class="text-red-700">Belgium</span>, with
          roots in <span class="text-red-500">Portugal</span> and <span class="text-blue-500">Greece</span>.
        </p>
        <p>I want to grow and keep learning as a developer.</p>
        <br>
        <div class="flex flex-col items-center">
          <img
            src="https://github-readme-stats.vercel.app/api?username=jordypereira&count_private=true&title_color=dc2626&icon_color=dc2626"
            alt="Github Contributions">
          <br>
          <img src="https://github-readme-stats.vercel.app/api/wakatime?username=jordypereira&title_color=dc2626"
            alt="Weekly stats">
        </div>
      </section>

      <!-- Experience -->
      <section class="mt-12">
        <h2 class="heading">Experience</h2>
        <ol>
          <li>
            <span class="text-red-600">2023 - 2100 </span> Happy Socks - Lead Developer E-Commerce
          </li>
          <li>
            <span class="text-red-600">2021 - 2023 </span> Happy Socks - Senior Frontend Developer
          </li>
          <li>
            <span class="text-red-600">2019 - 2021 </span> Prorenata - Frontend Developer
          </li>
          <li>
            <span class="text-red-600">2016 - 2019</span>
            Karel de Grote University College - Bachelor in Science - Multimedia Technology: Web &
            UX
          </li>
        </ol>
      </section>

      <section class="mt-12">
        <h2 class="heading">Projects</h2>
        <ul>
          <li><Dot />Currently leading a team of 5 developers to create a seamless E-commerce experience.
          <li><Dot />Experience leading projects with over 20 stakeholders, migrating large parts of a codebase and system.</li>
          <li><Dot />Helped transition a monolith Magento 2 Ecommerce website to be fully composable, with a modern Nuxt 3 frontend, serverless functions, headless CMS, Commerce API, Payment, Merchandising, ...</li>
          </li>
        </ul>
      </section>

      <!-- Timeline -->
      <section class="mt-12">
        <h2 class="heading">Tech Stack</h2>
        <p class="flex flex-wrap gap-2">
          <img alt="Nuxt" src="https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82"/>
          <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=white&style=for-the-badge"/>
          <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
          <img alt="Amazon_AWS" src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"/>
          <img alt="Redis" src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white"/>
          <img alt="Zod" src="https://img.shields.io/badge/-Zod-%233068B7?style=for-the-badge"/>
          <img alt="Bun" src="https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white"/>
        </p>
        <!-- <a href="/timeline" class="text-red-600">See Timeline</a> -->
      </section>
    </main>
  </body>
</template>

<style scoped></style>
