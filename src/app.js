import Vue from 'vue';
import Button from './Button.vue';

Vue.component('v-button', Button);

new Vue({
    el: '#app',
    data: {
        message: 'hello world',
    },
});