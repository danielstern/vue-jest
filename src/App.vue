<template>

    <div class="container mt-5">

        <Chat :handleSubmitChatMessage="this.handleSubmitChatMessage" :messages="this.$data.messages"/>

    </div>

</template>

<script>

    import { ChatMessageService } from './services/chatMessageService.js';

    export default {

        data(){

            return {

                messages: []
            }

        },
        async mounted(){

            const messages = await ChatMessageService.getMessages();
            this.$data.messages.push(... messages);

        },
        methods:{

            async handleSubmitChatMessage(content){

                const message = {
                    content,
                    sender: "YOU"
                }

                await ChatMessageService.submitMessage(message);

                this.$data.messages.push(message);

            }

        }

    }

</script>