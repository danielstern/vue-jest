import Vue from 'vue';
import App from "./Home/index.vue";

console.log("Runnin that script")
const app = new Vue({
    el:"#App",
    render: h => h(App)


    

    // data: {
    //     message: 'Hello Vue.js!'
    // }
});''