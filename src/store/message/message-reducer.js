import { MESSAGES_FETCHED, MESSAGES_FETCHING, MESSAGES_FETCHING_ERROR, SET_SORT_PARAM, TOGGLE_FAVORITE_MESSAGE } from "./message-actions";

const initialState = {
    messages: [],
    messagesLoadingStatus: 'idle',
    favorite: [],
    sort: 'new',
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGES_FETCHING:
            return {
                ...state,
                messagesLoadingStatus: 'loading'    
            };

        case MESSAGES_FETCHED: 
            return {
                ...state,
                messagesLoadingStatus: 'idle',
                messages: state.messages.concat(action.payload)
            };
        
        case MESSAGES_FETCHING_ERROR: 
            return {
                ...state,
                messagesLoadingStatus: 'error'
            }

        case TOGGLE_FAVORITE_MESSAGE: 
            if (state.favorite.includes(action.payload)) {
                return {
                    ...state,
                    favorite: state.favorite.concat(action.payload)
                }
            }
            return {
                ...state,
                favorite: state.favorite.filter(item => item !== action.payload)
            }
        
        case SET_SORT_PARAM:
            return {
                ...state,
                sort: action.payload
            }
        
        default:
            return state;
    }
} 