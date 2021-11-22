import * as Vue from 'vue/dist/vue.esm-bundler.js';

const Num = {
	props: ['number'],
	template: `
    <button :class="getClass(number)" @click="click">
      <div>{{ number }}</div>
    </button>
  `,
	methods: {
		click() {
			this.$emit('chosen', this.number);
		},
		getClass(number) {
			return this.isEven(number) ? 'blue' : 'red';
		},
		isEven(val) {
			return val % 2 === 0;
		},
	},
};

const app = Vue.createApp({
	components: {
		Num,
	},
	template: `
    <num v-on:chosen="addNumber" v-for="number in numbers"  :number="number"/>

    <br /><br />
    <num v-for="number in numberHistory"  :number="number"/>
  `,
	data() {
		return {
			numbers: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10],
			numberHistory: [],
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
		addNumber(number) {
			console.log(number);
			this.numberHistory.push(number);
		},
	},
});
app.mount('#app');

// all computed properties takes no arguments.
// Reactive numbers array changes the dom updates.
// for business logic.
// dont user tenary inside HTML create a method for it.
// Computed is known as derived data use it for errors like about etc.
