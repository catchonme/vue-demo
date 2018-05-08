<template>
    <div>
      <button @click="goTo('/articles')">Go to Articles</button>
      <button @click="goTo('/')">Go to Home</button>
      <app-router></app-router>
    </div>
</template>

<script>
  export default {
    methods:{
      goTo(route) {
        this.$pushRoute(route)
      }
    }
  };
</script>

<style scoped>

</style>
