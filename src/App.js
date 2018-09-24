import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar"
import formPage from "./pages/formPage";
import mainPage from "./pages/mainPage"
const App = () => (
    <Router>
        <div>
            <AppBar />
            <Switch>
                <Route exact path="/" component={mainPage} />
                <Route exact path="/formPage" component={formPage} />
            </Switch>
        </div>
    </Router>
);

export default App;
