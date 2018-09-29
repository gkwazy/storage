import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import formPage from "./pages/formPage";
import mainPage from "./pages/mainPage";
import itemPage from "./pages/itemPage"

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={mainPage} />
                <Route exact path="/formPage" component={formPage} />
                <Route exact path="/itemPage" component={itemPage} />
            </Switch>
        </div>
    </Router>
);

export default App;
