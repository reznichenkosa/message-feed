import { MESSAGES_FETCHED, MESSAGES_FETCHING, MESSAGES_FETCHING_ERROR, SET_FILTER, SET_SORT_PARAM, TOGGLE_FAVORITE_MESSAGE } from "./message-actions";

const localStorageData = JSON.parse(localStorage.getItem("data"));

const initialState = {
    messages: localStorageData?.messages || [],
    messagesLoadingStatus: 'idle',
    favorite: localStorageData?.favorite || [],
    sort: 'old',
    filter: 'all',
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGES_FETCHING:
            return {
                ...state,
                messagesLoadingStatus: 'loading',    
            };

        case MESSAGES_FETCHED: 
            if (action.payload) {
                return {
                    ...state,
                    messagesLoadingStatus: 'idle',
                    messages: state.messages.concat(action.payload.filter(message => state.messages.every(item => item.id !== message.id)))
                };
            }
            return {
                ...state,
                messagesLoadingStatus: 'idle',
            };
           
        
        case MESSAGES_FETCHING_ERROR: 
            return {
                ...state,
                messagesLoadingStatus: 'error'
            }

        case TOGGLE_FAVORITE_MESSAGE: 
            if (!state.favorite.includes(action.payload)) {
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
        
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }

        default:
            return state;
    }
} 