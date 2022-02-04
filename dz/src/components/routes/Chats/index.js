 import {makeStyles} from "@material-ui/core/styles";
import {ChatList} from "../../Message/ChatList";
import {Route, Switch} from "react-router-dom";
import {CHATS} from "../../mocks/chats";
import {Messages} from "../Messages";
 import {useDispatch, useSelector} from "react-redux";
 import {useCallback, useEffect} from "react";
 import {Button} from "@material-ui/core";
 import {createChat, removeChat, setChats} from "../../store/chats/actions";
 import {nanoid} from "nanoid";
 import {removeMessagesByChatID} from "../../store/messages/actions";
 import {getChatsList} from "../../store/chats/selectors";




const  useStyles = makeStyles ({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px 1fr"
    }
});

export const Chats = () => {
    const chats = useSelector(getChatsList);
    const dispatch = useDispatch();
    const classes = useStyles();

    const onCreate = useCallback(() => {
        dispatch(createChat({
            id: nanoid(),
            name: 'chatName'
        }))
    },[]);
    const onDelete = (chatId) => {
        dispatch(removeChat())
        dispatch(removeMessagesByChatID(chatId))
    }
    useEffect(() => {
        dispatch(setChats(CHATS))
    },[])

    return (
        <div className={classes.wrapper}>
            <div>
                <ChatList onDelete={onDelete} list ={chats}/>
                <Button onClick={onCreate}>Create chat</Button>
            </div>
            <div>
                <Switch>
                    <Route component={Messages} path="/chats/:chatId" />
                </Switch>
            </div>
        </div>
    );
};