import AppRouter from './AppRouter'
import { listen, push } from './history'

export default {
  install(Vue, options) {
    Vue.component('AppRouter', AppRouter);
    Vue.prototype.$routes = options.routes;
    Vue.prototype.$pushRoute = push;

    if (options.hook){
      listen(options.hook);
    }
  }
};
