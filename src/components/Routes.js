import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Answer from "../routes/Answer";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";

const AppRouter = ({isLoggedIn, userAuth}) => {
    useEffect(()=>{
        console.group(isLoggedIn)
    })
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/">
                    {isLoggedIn ? <Redirect to={{
                                            pathname: `/${userAuth}`,
                                            stete: {userAuth}
                                            }} /> 
                    : <Home />}
                </Route>
                <Route exact path="/auth">
                    {isLoggedIn ? <Redirect to={{
                                            pathname: `/${userAuth}`,
                                            stete: {userAuth}
                                            }} /> 
                    : <Auth />}
                </Route>
                <Route exact path="/logout">
                    <Home />
                </Route>
                <Route exact path="/:id">
                    <Profile userAuth={userAuth}/>
                </Route>
                <Route exact path="/:id/:questionid">
                    <Answer userAuth={userAuth}/>
                </Route>
            </Switch>
        </Router>
        </>
    )
}

export default AppRouter;