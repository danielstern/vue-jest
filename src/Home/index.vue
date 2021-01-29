<template>
    <div>
        <h1>
            Globoticket Customer Service Chat
        </h1>
        <div id="ChatMessagesWindow" class="chat-messages-window">
            <div>
                <p>
                    R: Hello. This is customer support.
                </p>
            </div>
            <div>
                <p>
                    R: How can I help you today?
                </p>
            </div>
        </div>
        <div>
            <form action="">
                <input type="text" placeholder="Your message">
                <button type="submit">Send</button>
            </form>
            

        </div>
    </div>
</template>
<style scoped>

    .chat-messages-window {
        width: 100%;
        border: 1px solid gainsboro;
        height: 100;
        background-color: pink;
    }

</style>