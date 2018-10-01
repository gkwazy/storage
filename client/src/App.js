import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import formPage from "./pages/formPage";
import mainPage from "./pages/mainPage"
import itemPage from "./pages/itemPage"
import singleItemPage from "./pages/singleItemPage";
import AppBar from "./components/AppBar";
import Grid from "@material-ui/core/Grid";

let IDToken = "garret";

const App = () => (
    <Router
        basename={IDToken}>
        <div>
            <Grid>
                <AppBar />
            </Grid>
            <div>
                <p>{"             "}</p>
            </div>
            <Grid>
                <Switch>
                    <Route exact path="/" component={mainPage} />
                    <Route exact path="/formPage" component={formPage} />
                    <Route exact path="/itemPage" component={itemPage} />
                    <Route path="/singleItemPage/" component={singleItemPage} />
                </Switch>
            </Grid>
        </div>
    </Router>
);

export default App;
