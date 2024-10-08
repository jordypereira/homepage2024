<script lang="ts" setup>
const { films } = await useNotion()
</script>

<template>
  <article class="md:max-w-4xl mx-6 md:mx-auto md:px-6">
    <div>
      <h2>Culture Lists</h2>
      <div>
        <h3>Films</h3>
        <ul>
          <li v-for="film in films" :key="film.id">
            <h4>{{ film.name }}</h4>
            <p>Year: {{ film.year }}</p>
            <p>Rating: {{ film.rating }}</p>
            <p>Tags: {{ film.tags.join(', ') }}</p>
            <p>Analysis: {{ film.analysis }}</p>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<style scoped>
li {
  margin-bottom: 1rem;
  list-style: none;
}

</style>
