import { AnimatePresence } from 'framer-motion';
import React, { useRef } from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMessages } from "../../store/message/message-actions";
import MessageItem from '../MessagesItem/MessageItem';

const MessagesList = () => {

    const dispatch = useDispatch();
    const { messages, messagesLoadingStatus, sort, filter, favorite } = useSelector(state => state.messages);
    const firstMessage = useRef();
    const observer = useRef();

    const sortedMessages = sort === "old" ? messages : [...messages].reverse();
    const filteredAndSortedMessages = filter === 'all' ? sortedMessages : sortedMessages.filter(item => favorite.includes(item.id));

    useEffect(() => {
        dispatch(loadMessages(messages[messages.length - 1]?.id));

        // eslint-disable-next-line 
    }, []);

    // every 5 second update messages, but the backend is not working properly

    useEffect(() => {
        if (messagesLoadingStatus === 'idle') {
            const timerId = setTimeout(() => {
                dispatch(loadMessages(messages[messages.length - 1]?.id))
            }, 5000);

            return () => {
                clearTimeout(timerId)
            }
        }
        // eslint-disable-next-line
    }, [messagesLoadingStatus]);

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify({ messages, favorite }))
    }, [favorite, messages])

    useEffect(() => {
        if (sort === 'old') {
            document.querySelector('main').scrollTop = document.querySelector('main').scrollHeight;
        } else {
            document.querySelector('main').scrollTop = 0;
        }
    }, [sort])

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        const callback = function (entries, observer) {
            if (entries[0].isIntersecting) {
                dispatch(loadMessages(0, true));
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(firstMessage.current);
        // eslint-disable-next-line
    }, [sort])

    return (
        <>
            <AnimatePresence>
                {sort === 'new' || <div ref={firstMessage}></div>}
                {filteredAndSortedMessages && filteredAndSortedMessages.map((item, i) =>
                    <MessageItem key={item.id} {...item} />
                )}
                {sort === 'old' || <div ref={firstMessage}></div>}
            </AnimatePresence>
        </>
    );
};

export default MessagesList;