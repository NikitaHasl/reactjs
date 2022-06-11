import {fireEvent, render, screen} from "@testing-library/react";
import {ChatList} from "../ChatList";
import {BrowserRouter} from "react-router-dom";
import {createMemoryHistory} from 'history';

describe('ChatList presentation tests', () => {
    const history = createMemoryHistory();
    const mockRemoveChat = jest.fn();
    const mockHandleSubmit = jest.fn();
    const chats = [{id: 0, name: 'Ann'}];


    it('render passed chat', () => {
        render(
            <BrowserRouter history={history}>
                <ChatList chats={chats} removeChat={mockRemoveChat} handleSubmit={mockHandleSubmit}/>
            </BrowserRouter>
        );

        const renderChat = screen.getByText('Ann');
        expect(renderChat).toBeDefined();
    });

    it('called remove chat func', function () {
        render(
            <BrowserRouter history={history}>
                <ChatList chats={chats} removeChat={mockRemoveChat} handleSubmit={mockHandleSubmit}/>
            </BrowserRouter>
        );

        const deleteChatBtn = screen.getByTestId('DeleteIcon');
        fireEvent(deleteChatBtn, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));
        expect(mockRemoveChat).toHaveBeenCalled();
    });
});