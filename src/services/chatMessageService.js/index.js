import { v4 } from 'uuid';

const messages = [{

    id: v4(),
    sender:"M",
    content: "Hello. This is customer support."

},{

    id: v4(),
    sender:"M",
    content: "How can we assist you today?"
    
}];

export const ChatMessageService = {
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
            
        }

    }
}