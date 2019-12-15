import _Vue from 'vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const log = (value: any): void => {
  console.log(value);
};

export default {
  install(Vue: typeof _Vue): void {
    Vue.prototype.$log = log;
  }
};
