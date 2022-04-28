import React, { useState } from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from '../../api/service';
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
    // console.log(messages);

    // every 5 second update messages

    // useEffect(() => {
    //   const timerId = setTimeout(() => {
    //     console.log(messages[messages.length-1]?.id);
    //     dispatch(loadMessages(messages[messages.length-1]?.id))}, 5000);

    //   return () => {
    //     clearTimeout(timerId)
    //   }
    // }, [messages]);

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify({messages, favorite}))
    },[favorite, messages])

    return (
        <>
            {filteredAndSortedMessages && filteredAndSortedMessages.map(item => 
                <MessageItem key={item.id} {...item}/>
            )}
        </>
    );
};

export default MessagesList;