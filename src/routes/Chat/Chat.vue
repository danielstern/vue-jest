<template>
    <div>
        <h1>

            Globoticket Customer Service Chat

        </h1>
        <div class="card mb-3">

            <div class="card-body">
                
                <div>

                    <strong>M:</strong> <span>Hello. This is customer support.</span>

                </div>

                <div>

                    <strong>M:</strong> <span>How can we assist you today?</span>

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
        data:(a)=>{

            return {
                userMessage:""
            };

        },
        mounted() {

        },
        methods: {

            handleMessageSubmit(e){

                e.preventDefault();
                console.log("Submitted message", this.userMessage);
            }

        }
    }
</script>