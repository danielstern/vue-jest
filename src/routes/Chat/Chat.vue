<template>

    <div>

        <h1>


            Globoticket Customer Service Chat

        </h1>

        <div class="card mb-3">

            <div class="card-body">

                <div v-for="message in messages" v-bind:key="message.id" class="message-display">

                    <strong>{{message.sender}}:</strong> <span>{{message.content}}</span>

                </div>

            </div>
            
        </div>

        <div>

            <form class="form-inline">

                <div class="form-group mb-2 mr-2">

                    <input type="text" placeholder="Your message" class="form-control" v-model="userMessage">

                </div>

                <button type="submit" class="btn btn-primary mb-2" v-on:click="handleMessageSubmit">Send</button>
       
            </form>

        </div>
    </div>

</template>
<script>

    export default {

        data(){

            return {

                userMessage: "Where is my order?",
                messages: this.$attrs.messages || []
            
            }

        },
        methods: {

            handleMessageSubmit(e){

                e.preventDefault();
                console.info("Submitted message", this.userMessage);
                this.$attrs.handleSubmitChatMessage(this.userMessage);

            }

        }

    }
</script>