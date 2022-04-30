import {render, screen} from "@testing-library/react";
import {Message} from "../Message";

describe('Message component tests', ()=>{
    it('renders passed text', ()=> {
        render(<Message author='human' text='text'/>);

        const text = screen.getByText('text');
        expect(text).toBeDefined();
    });

    it('renders passed author', ()=> {
        render(<Message author='human' text='text'/>);

        const author = screen.getByText(/human/);
        expect(author).toBeDefined();
    });
})