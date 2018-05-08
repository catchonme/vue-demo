import Vue from 'vue';
import App from './components/App'

import AppRouter from './plugin';

import HomePage from './components/HomePage'
import ArticlesPage from './components/ArticlesPage'

const routes = {
  "/":HomePage,
  "/articles":ArticlesPage
};

Vue.use(AppRouter, {
  routes,
  hook:(to, from) => console.log(to, from)
});

const app = new Vue({
  el:'#app',
  render(h) {
    return h(App);
  }
});

/*
如何写一个自己的路由库
https://vueschool.io/articles/tutorials/make-router-vue-js-plugin
*/
