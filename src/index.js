import * as Vue from 'vue/dist/vue.esm-bundler.js';

const app = Vue.createApp({
	template: `
    <p>{{count}}</p>
    <div v-if="isEven(count)">Even</div>
    <div v-else>Odd</div>

    <div v-for="number in numbers">
      <div :class="getClass(number)">
        {{number}}
      </div>
    </div>
    <br /><br />
    <button @click="increment">Increment</button>
  `,
	data() {
		return {
			count: 0,
			numbers: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10],
		};
	},
	computed: {
		evenList() {
			return this.numbers.filter((num) => this.isEven(num));
		},
	},
	methods: {
		increment() {
			this.count++;
		},
		isEven(val) {
			return val % 2 === 0;
		},
		getClass(number) {
			return this.isEven(number) ? 'blue' : 'red';
		},
	},
});
app.mount('#app');

// all computed properties takes no arguments
// Reactive numbers array changes the dom updates.
// for business logic
// dont user tenary inside HTML create a method for it
