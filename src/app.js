import Vue from 'vue';
import Button from './Button.vue';
import Icon from './Icon.vue';
import ButtonGroup from './ButtonGroup.vue';
Vue.component('v-button', Button);
Vue.component('v-icon', Icon);
Vue.component('v-button-group', ButtonGroup);

new Vue({
  el: '#app',
  data: {
    message: 'hello world',
    isLoading: true,
  },
});
