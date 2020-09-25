import Vue from 'vue';
import Button from './Button.vue';
import Icon from './Icon.vue';
Vue.component('v-button', Button);
Vue.component('v-icon', Icon);

new Vue({
  el: '#app',
  data: {
    message: 'hello world',
  },
});
