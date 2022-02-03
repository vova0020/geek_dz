import {BrowserRouter, Link, Route, Switch} from "react-router-dom"
import {AppBar, Button, Toolbar} from "@material-ui/core";

import {Profile} from "./routes/Profile";
import {Home} from "./routes/Home";
import {Chats} from "./routes/Chats";


export  const Menu = () => {
  return (
      <div>
          <BrowserRouter>
              <AppBar position="static">
                  <Toolbar>
                      <Button to="/" component={Link} color="inherit">
                          Home
                      </Button>
                      <Button to="/profile" component={Link} color="inherit">
                          Profile
                      </Button>
                      <Button to="/chats" component={Link} color="inherit">
                          Chats
                      </Button>
                  </Toolbar>
              </AppBar>
              <Switch>
                  <Route component={Chats} path="/chats" />
                  <Route component={Profile} path="/profile" />
                  <Route component={Home} path="/" />
              </Switch>
          </BrowserRouter>
      </div>
  );
};