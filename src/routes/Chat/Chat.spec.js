import { mount } from '@vue/test-utils'
import Chat  from './Chat.vue';

describe('Mounted App', () => {

    beforeEach(async() => {
        
        console.info("Running before each hook");

    });

    afterAll(async() => {

        console.info("Cleanup hook running.");

    })
    const wrapper = mount(Chat);

    it("should work", (function(){

        expect(1 + 1).toBe(2);


    }))

    it("should throw", (function(){

        throw new Error();

    }))

})