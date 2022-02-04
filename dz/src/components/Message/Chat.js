import {ListItem, ListItemText} from "@material-ui/core";
import propTypes from "prop-types";
import {Link} from "react-router-dom";


export  const Chat = ({name, id}) => {
    return (
        <ListItem component={Link} to ={`/chats/${id}`} >
            <ListItemText>{name}</ListItemText>
        </ListItem>
    );
};

// Chat.popTypes = {
//     id: propTypes.string,
//     name: propTypes.string
// };