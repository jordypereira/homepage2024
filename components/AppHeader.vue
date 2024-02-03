<script lang="ts" setup></script>

<template>
    <header class="md:mt-32">
      <div class="flex flex-col md:flex-row justify-center items-center p-8">
        <div class="flex flex-col items-center">
          <h1 class="title flex flex-col">
            <span>Jordy</span> <span class="ml-16">Pereira</span>
          </h1>
          <div class="mt-4">Software Engineer based in Stockholm, Sweden</div>
          <ul class="flex w-full justify-between text-red-600  gap-2">
            <li class="hover:text-red-400">
              <a href="https://github.com/jordypereira">Github</a>
            </li>
            <li class="hover:text-red-400">
              <a href="https://twitter.com/_jordypereira">Twitter</a>
            </li>
            <li class="hover:text-red-400">
              <a href="https://www.linkedin.com/in/jordypereira">Linkedin</a>
            </li>
            <!-- <li class="hover:text-red-400">
              <a href="https://dev.to/jordypereira">Dev</a>.to
            </li> -->
          </ul>
        </div>
        <img class="rounded-full mt-8 md:mt-0 md:ml-12" width="200" height="200" src="/images/profile.jpg" alt="me">
      </div>
    </header>
</template>

<style scoped></style>
