import React from "react";
import {useState,useEffect} from "react";
import styles from './Message.module.css'



export const Message = () => {
    const [messageList,setMessageList] = useState([]);
    const [value, setValue] = useState("");

    const sendMessage = (autor, text) => {
        const newMessageList = [...messageList];
        const newMessage ={
            autor,
            text
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };
    const resetForm = () => {
        setValue("");
    };
    const onSubmitMessage = (event) => {
        event.preventDefault ();
        sendMessage("user", value);
        resetForm();
    };

    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };
    useEffect(() => {
        if (messageList.length ===0){
            return;
        }
        const tail = messageList[messageList.length -1];
        if (tail.autor === "bot") {
            return;
        }
        sendMessage("bot", "Hello, friend!");
    },[messageList]);

    return (
        <div>
            <form className={styles.form} onSubmit={onSubmitMessage}>
                <input className={styles.inputField}
                    onChange={onChangeMessageInput}
                    placeholder="Введите сообщение"
                    value={value}
                    type={"text"}
                />
                <button className={styles.send}>Отправить</button>
            </form>
            <ul>
                {messageList.map((item, index) =>(
                    <li className={styles.li} key={index}>
                        {item.author}-{item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};