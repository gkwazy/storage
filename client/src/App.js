import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import formPage from "./pages/formPage";
import mainPage from "./pages/mainPage"
import itemPage from "./pages/itemPage"
import singleItemPage from "./pages/singleItemPage";
import AppBar from "./components/AppBar";
import Grid from "@material-ui/core/Grid";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Modal from "@material-ui/core/Modal"

let IDToken = "garret";

firebase.initializeApp({
    apiKey: "AIzaSyBAwJ7b0Iw8ufJaIF_Sd30RWouKIMLJRnQ",
    authDomain: "shopperlogin-e2ef3.firebaseapp.com"
})


class App extends Component {
    state = {
        isSignedIn: false,
        open: true
    }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID

        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {

        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })

    }

    render() {
        return (

            <div>

                <div>
                    {this.state.isSignedIn ?
                        <div> Signed In</div>
                        :

                        (
                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                        )
                    }
                </div>
                {firebase.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        user.getIdToken().then(function (data) {
                            //console.log(data)
                        });
                    }
                })}
                <Router>
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
            </div>
        )
    }
};

export default App;
