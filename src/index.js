import Vue from 'vue';
import App from "./routes/Home";

console.log("Runnin that script")
const app = new Vue({
    el:"#App",
    render: h => h(App)
    

    // data: {
    //     message: 'Hello Vue.js!'
    // }
});''