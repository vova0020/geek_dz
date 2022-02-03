 import {makeStyles} from "@material-ui/core/styles";
import {ChatList} from "../../Message/ChatList";
import {Route, Switch} from "react-router-dom";
import {CHATS} from "../../mocks/chats";
import {Messages} from "../Messages";
import {Message} from "../../Message/Message";




const  useStyles = makeStyles ({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px 1fr"
    }
});

export  const Chats = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <ChatList list = {CHATS} />
            <div>
                <Switch>
                    <Route component={Messages} path="/chats/:chatId" />
                </Switch>
            </div>
        </div>
    );
};