import { v4 } from 'uuid';

const _messages = [{

    id: v4(),
    sender:"M",
    content: "Hello. This is customer support."

},{

    id: v4(),
    sender:"M",
    content: "How can we assist you today?"
    
}];

export const ChatMessageService = (messages = _messages) => ({
    // __setMessages(_messages){
        // testing utiltiy function
        // messages = _messages;
    // },
    async getMessages(){
        
        return messages;

    },
    async submitMessage({sender, content}){

        messages.push({
            sender,
            content,
            id: v4()
        })

    },
    subscribe(){
        
        return function*(){

            console.log("You subscribed");
            // What should the subscribe generator return?
            
        }

    }
});