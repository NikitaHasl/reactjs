import {charactersReducer} from "../reducer";
import {getCharactersFailure, getCharactersRequest, getCharactersSuccess} from "../actions";
import {FETCH_STATUSES} from "../../../utils/constants";

describe('characters reducer tests', () => {
    it('sets error to null and status to request if called with request action', () => {
        const result = charactersReducer({
            data: [],
            info: {},
            status: FETCH_STATUSES.IDLE,
            error: 'fatal error',
        }, getCharactersRequest('query'));

        expect(result.error).toBeNull();
        expect(result.status).toEqual(FETCH_STATUSES.REQUEST);
    })

    it('sets error to error message and status to failure if called with failure action', ()=>{

        const errorMsg = '404 not found';
        const result = charactersReducer(undefined, getCharactersFailure(errorMsg));

        expect(result.error).toEqual(errorMsg);
        expect(result.status).toEqual(FETCH_STATUSES.FAILURE);
    })

    it('sets data and info from API and status to success if called with success action', ()=>{

        const data = 'some data';
        const info = 'some info';
        const result = charactersReducer(undefined, getCharactersSuccess({
            results: data,
            info: info,
        }));
        
        expect(result.status).toEqual(FETCH_STATUSES.SUCCESS);
        expect(result.data).toEqual(data);
        expect(result.info).toEqual(info);
    })

})