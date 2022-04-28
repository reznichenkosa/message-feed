import { getMessages } from "../../api/service";

export const MESSAGES_FETCHING = '@@message/MESSAGES_FETCHING';
export const MESSAGES_FETCHED = '@@message/MESSAGES_FETCHED';
export const MESSAGES_FETCHING_ERROR = '@@message/MESSAGES_FETCHED_ERROR';
export const TOGGLE_FAVORITE_MESSAGE = '@@message/TOGGLE_FAVORITE_MESSAGE';
export const SET_SORT_PARAM = '@@message/SET_SORT_PARAM';

export const messagesFetching = () => ({type: MESSAGES_FETCHING});
export const messagesFetched = (messages) => ({type: MESSAGES_FETCHED, payload: messages});
export const messagesFetchingError = () => ({type: MESSAGES_FETCHING_ERROR});
export const toggleFavoriteMessage = (id) => ({type: TOGGLE_FAVORITE_MESSAGE, payload: id});
export const setSortParam = (param) => ({type: SET_SORT_PARAM, payload: param});

export const loadMessages = (messageId) => (dispatch) => {
    dispatch(messagesFetching());
    getMessages(messageId)
    .then(data => dispatch(messagesFetched(data.Messages)))
    .catch(err => dispatch(messagesFetchingError()));
}