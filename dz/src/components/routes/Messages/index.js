import React, {useEffect, useState} from "react";
import {Redirect, useParams} from "react-router-dom";
import {MessageList} from "../../Message/MessageList";
import {MessageInput} from "../../Message/MessageInput";
import {CHATS} from "../../mocks/chats";

export const Messages = () => {
    const { chatId } = useParams();
    const [messageList, setMessageList] = useState([]);

    const sendMessage = (author, text) => {
        const newMessageList = [...messageList];
        const newMessage ={
            author,
            text,
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };

    const onSendMessage = (value) => {
        sendMessage("user :", value);
    };

    useEffect(() => {
        if (messageList.length ===0){
            return;
        }
        const tail = messageList[messageList.length -1];
        if (tail.author === "bot :") {
            return;
        }
        sendMessage("bot :", "Hello, friend!");
    },[messageList]);

    // if (!CHATS.find(({id}) => id === chatId)) {
    //     return <Redirect to="/chats" />;
    // }

    return (
        <>
            <MessageList messageList={messageList} />
            <MessageInput onSend={onSendMessage} />
        </>

    );
};