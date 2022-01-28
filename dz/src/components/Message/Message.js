import React, {useRef} from "react";
import {useState,useEffect} from "react";
import styles from './Message.module.css'
import {Button} from "@mui/material";
import SendIcon from '@material-ui/icons/Send';
import {SnackbarContent} from "@material-ui/core";
import {ChatList} from "./ChatList";



export const Message = () => {
    const [messageList,setMessageList] = useState([]);
    const [value, setValue] = useState("");

    const sendMessage = (author, text) => {
        const newMessageList = [...messageList];
        const newMessage ={
            author,
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
        sendMessage("user :", value);
        resetForm();
    };

    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };


    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [onSubmitMessage]);


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

    return (
        <div className={styles.container}>
            <div>
                <ChatList
                list={[
                    {
                        name: 'name',
                        id: '1'
                    },
                    {
                        name: 'name',
                        id: '2'
                    },
                    {
                        name: 'name',
                        id: '1'
                    }
                ]}
                />
            </div>
            <div>
                <div className={styles.massageList}>
                    {messageList.map((item, index) =>(
                        <SnackbarContent className={styles.massages} key={index}
                                         message={
                                             item.author + item.text
                                         }
                        />
                    ))}
                </div>
                <form className={styles.form} onSubmit={onSubmitMessage}>
                    <input className={styles.inputField}
                           onChange={onChangeMessageInput}
                           placeholder="Введите сообщение"
                           value={value}
                           type={"text"}
                           ref={inputRef}
                    />
                    <Button type={'submit'} variant="contained" endIcon={<SendIcon />}>
                        Отправить
                    </Button>
                </form>
            </div>


        </div>
    );
};