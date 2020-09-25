import Vue from 'vue';
import chai from 'chai';
import spies from 'chai-spies';
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

// unit test
const expect = chai.expect;
chai.use(spies);
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
    },
  });
  vm.$mount();
  let useElement = vm.$el.querySelector('use');
  const href = useElement.getAttribute('xlink:href');
  expect(href).to.equal('#i-setting');
  vm.$el.remove();
  vm.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true,
    },
  });
  vm.$mount();
  let useElement = vm.$el.querySelector('use');
  const href = useElement.getAttribute('xlink:href');
  expect(href).to.equal('#i-loading');
  vm.$el.remove();
  vm.$destroy();
}

{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
    },
  });
  const div = document.createElement('div');
  document.body.appendChild(div);
  vm.$mount(div);
  let svg = vm.$el.querySelector('svg');
  const { order } = window.getComputedStyle(svg);
  expect(order).to.equal('1');
  vm.$el.remove();
  vm.$destroy();
}

{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
    },
  });
  vm.$mount();
  const spy = chai.spy(() => {});
  vm.$on('click', spy);
  let button = vm.$el;
  button.click();
  expect(spy).to.have.been.called();
  vm.$el.remove();
  vm.$destroy();
}
