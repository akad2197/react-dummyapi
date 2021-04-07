import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import UserList from '../../Pages/UserList/'
import UserFullProfile from  '../../Pages/UserFullProfile/' 
import PostList from '../../Pages/PostList/'


class RouterClass extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header></header>
          <Switch>
          <Route
                exact
                path="/"
                component={PostList}
              />
              <Route exact path="/userList" component={UserList} />
              <Route exact path="/userProfile" component={UserFullProfile} />
            <Route
              render={() => {
                return (
                  <div>
                    <h1> 404 page error</h1>
                  </div>
                );
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RouterClass;



