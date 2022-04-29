import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMessages } from "../../store/message/message-actions";
import MessageItem from '../MessagesItem/MessageItem';

const MessagesList = () => {

    const dispatch = useDispatch();
    const {messages, messagesLoadingStatus, sort, filter, favorite} = useSelector(state => state.messages);

    const sortedMessages = sort === "old" ? messages : [...messages].reverse();
    const filteredAndSortedMessages = filter === 'all' ? sortedMessages : sortedMessages.filter(item => favorite.includes(item.id));

    useEffect(() => {
        dispatch(loadMessages(messages[messages.length-1]?.id));
        // eslint-disable-next-line 
    },[]);

    // every 5 second update messages, but the backend is not working properly

    useEffect(() => {
      const timerId = setTimeout(() => {
        dispatch(loadMessages(messages[messages.length-1]?.id))}, 5000);

      return () => {
        clearTimeout(timerId)
      }
      // eslint-disable-next-line
    }, [messagesLoadingStatus]);

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify({messages, favorite}))
    },[favorite, messages])

    return (
        <>
            <AnimatePresence>
                {filteredAndSortedMessages && filteredAndSortedMessages.map(item => 
                    <MessageItem key={item.id} {...item}/>
                )}
            </AnimatePresence>
        </>
    );
};

export default MessagesList;