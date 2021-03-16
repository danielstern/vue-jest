import Vue from 'vue';

import App from "./App.vue";
import Chat from './routes/Chat/Chat.vue';

const chatComponent = Vue.component('Chat',Chat);

new Vue({

        el:"#App",
        render: h => h(App),
        components:{

            "Chat":chatComponent

        }
        
    }

);