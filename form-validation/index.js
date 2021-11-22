import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');

// all computed properties takes no arguments.
// Reactive numbers array changes the dom updates.
// for business logic.
// dont user tenary inside HTML create a method for it.
// Computed is known as derived data use it for errors like about etc.
