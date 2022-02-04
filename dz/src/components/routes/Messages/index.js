import React, {useEffect} from "react";
import {Redirect, useParams} from "react-router-dom";
import {MessageList} from "../../Message/MessageList";
import {MessageInput} from "../../Message/MessageInput";
import {useDispatch, useSelector} from "react-redux";
import {hasChatById} from "../../store/chats/selectors";
import {createMessage} from "../../store/messages/actions";
import {getChatMessagesById} from "../../store/messages/selectors";

export const Messages = () => {
    const { chatId } = useParams();
    const dispatch = useDispatch();
    const messageList = useSelector(getChatMessagesById(chatId));
    const hasChat = useSelector(hasChatById(chatId));

    const sendMessage = (author, text) => {
        const newMessage ={
            author,
            text,
        };
        dispatch(createMessage(newMessage, chatId))
    };

    const onSendMessage = (value) => {
        sendMessage("user :", value);
    };

    useEffect(() => {
        if (!messageList || messageList.length ===0){
            return;
        }
        const tail = messageList[messageList.length -1];
        if (tail.author === "bot :") {
            return;
        }
        sendMessage("bot :", "Hello, friend!");
    },[messageList]);

   if (!hasChat) {
       return <Redirect to="/chats" />;
   }

    return (
        <>
            <MessageList messageList={messageList} />
            <MessageInput onSend={onSendMessage} />
        </>
    );
};