import {ListItem, ListItemText} from "@material-ui/core";
import propTypes from "prop-types";


export  const Message = (props) => {
    return (
      <ListItem>
          <ListItemText>
              [{props.author}]: {props.text}
          </ListItemText>
      </ListItem>
    );
};

Message.propTypes ={
    text: propTypes.string,
    author: propTypes.string
};