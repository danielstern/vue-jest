import Vue from 'vue';
import App from "./App.vue";
import Chat from './routes/Chat/Chat.vue';

import { ChatMessageService } from './services/chatMessageService.js';

const chatComponent = Vue.component('Chat',Chat);
const app = new Vue({
        el:"#App",
        render: h => h(App),
        components:{
            "Chat":chatComponent
        }
        // components: {
            // "Chat":Chat
        // },
    },
    {
        ChatMessageService
    }
    

    // data: {
    //     message: 'Hello Vue.js!'
    // }
);