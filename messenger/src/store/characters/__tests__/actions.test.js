import {
    GET_CHARACTERS_REQUEST,
    GET_CHARACTERS_SUCCESS,
    getCharacters,
    getCharactersRequest,
    getCharactersSuccess
} from "../actions";
import {apiCharactersUrl} from "../../../utils/constants";

describe('getCharactersRequest tests', () => {
    it('return object with predefined parameters', () => {
        const expected = {
            type: GET_CHARACTERS_REQUEST,
            payload: 'query',
        }

        const received = getCharactersRequest('query');

        expect(received).toEqual(expected);
    })
})

describe('getCharactersSuccess tests', () => {
    it('return object with predefined parameters', () => {
        const expected = {
            type: GET_CHARACTERS_SUCCESS,
            payload: 'data',
        }

        const received = getCharactersSuccess('data');

        expect(received).toEqual(expected);
    })
})

describe('getCharters tests', () => {
    it('dispatches getCharactersRequest', () => {
        const page = 1;
        const request = `${apiCharactersUrl}/?page=${page}`;
        const mockDispatch = jest.fn();
        getCharacters(page)(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getCharactersRequest(request));
    });

    it('dispatches getCharactersSuccess with result', async () => {

        const mockDispatch = jest.fn();
        const data = {
            info: {
                "count": 826,
                "pages": 42,
            },
            results: {
                "id": 1,
                "name": "Rick Sanchez",
            }
        };

        fetch.mockResponse(JSON.stringify(data));
        await getCharacters()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getCharactersSuccess(data));
    });
})