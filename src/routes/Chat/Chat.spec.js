import { mount, shallowMount } from '@vue/test-utils'
import Chat  from './Chat.vue';

describe('Chat Service', () => {

    let wrapper = null;
    beforeEach(async() => {
        
        wrapper = mount(Chat, { propsData: {

        }});

    });

    afterAll(async() => {

        console.info("Cleanup hook running.");

    })

    // describe()

    it("should match the snapshot",()=>{

        expect(wrapper.element).toMatchSnapshot();

    });

    it("should have a list item for every message passed into props",()=>{

        //  this pattern shows clearly why beforeAll / afterrAll testing should be limited

        const specialWrapper = shallowMount(Chat, { propsData: {

            messages:["a message", "another message"]

        }});

        expect(specialWrapper.findAll(".message-display")).toHaveLength(2);

    })

    

})