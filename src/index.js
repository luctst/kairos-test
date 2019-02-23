/**
 * Import
 */
import "./assets/scss/main.scss";
import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CharacterInfo from "./routes/CharacterInfo";
import App from "./view/app";

/**
 * Variables
 */
const root = document.querySelector("#root");

/**
 * Main: HOC component who render App and handle routes.
 */
export class Main extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Switch>
                        <Route path="/:id" exact component={CharacterInfo} />
                        <Route path="/" exact component={App} />
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

/**
 * Exécution
 */
render(<Main/>, root);