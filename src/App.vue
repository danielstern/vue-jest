<template>

    <div class="container mt-5">

        <Chat :handleSubmitChatMessage="this.handleSubmitChatMessage" :messages="this.$data.messages"/>

    </div>

</template>

<script>

    import { ChatMessageService } from './services/chatMessageService.js';
    const chatMessageService = ChatMessageService();

    export default {

        data(){

            return {

                messages: []
            }

        },
        async mounted(){
            
            const messages = await chatMessageService.getMessages();
            this.$data.messages.push(... messages);

        },
        methods:{

            async handleSubmitChatMessage(content){

                const message = {
                    content,
                    sender: "YOU"
                }

                await chatMessageService.submitMessage(message);

                this.$data.messages.push(message);

            }

        }

    }

</script>