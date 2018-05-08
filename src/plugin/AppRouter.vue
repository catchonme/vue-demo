<template>
    <component :is="routedComponent"></component>
</template>

<script>
  import { listen } from './history'
  export default {
    data() {
      return { current: window.location.pathname };
    },
    created() {
      listen((route, previousRoute) => {
        this.current = route
      });
      window.addEventListener(
        'popstate',
        event => (this.current = window.location.pathname )
      );
    },
    computed:{
      routedComponent() {
        return this.$routes[this.current];
      }
    },
    render(createElement){
      return createElement(this.routedComponent)
    }
  }
</script>

<style scoped>

</style>
