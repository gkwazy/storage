import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar"
import formPage from "./pages/formPage";
import mainPage from "./pages/mainPage"
import itemPage from "./pages/itemPage"
import singleItemPage from "./pages/singleItemPage";

let IDToken = "garret";
const App = () => (
    <Router
        basename={IDToken}>
        <div>
            <AppBar />
            <Switch>
                <Route exact path="/" component={mainPage} />
                <Route exact path="/formPage" component={formPage} />
                <Route exact path="/itemPage" component={itemPage} />
                <Route path="/singleItemPage/" component={singleItemPage} />
            </Switch>
        </div>
    </Router>
);

export default App;
