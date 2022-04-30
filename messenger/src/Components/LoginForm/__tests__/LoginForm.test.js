import {fireEvent, render, screen} from "@testing-library/react";
import {LoginForm} from "../LoginForm";

describe('LoginForm component', ()=>{
    it('called onSubmit when button click', function () {
        const mockSubmit = jest.fn();
        render(<LoginForm onSubmit={mockSubmit}/>);

        const submitInput = screen.getByRole('button');
        fireEvent(submitInput, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
})