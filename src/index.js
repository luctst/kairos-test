/**
 * Import, Variables
 */
import "./assets/scss/main.scss";
import React from "react";
import {render} from "react-dom";
import AppContext from "./model/store/app-context";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Loader } from "./view/components/Loader";
import CharacterInfo from "./view/routes/CharacterInfo";
import App from "./view/app";
import Header from "./view/components/Header";
const root = document.querySelector("#root");
const marvelApiKey = `apikey=f5d9657d8bb68f805b1ec30fe13cf70d`;
const marvelUrlApi = `https://gateway.marvel.com/v1/public`;

/**
 * Main: HOC component who render App and handle routes.
 */
export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaderActive: true,
            cl: 10
        };
        fetch(`${marvelUrlApi}/characters?limit=${this.state.cl}&${marvelApiKey}`)
            .then(data => data.json())
            .then(dataParsed => this.setState({
                marvelData: dataParsed.data.results,
                loaderActive: false,
                pageNumber: this.state.cl / 5,
            }));
    }

    render() {
        if (this.state.loaderActive) return <Loader />;
        return (
            <AppContext.Provider value={this.state}>
                <Router>
                    <React.Fragment>
                        <Header/>
                        <Switch>
                            <Route path="/:id" exact component={CharacterInfo} />
                            <Route path="/" exact component={App} />
                        </Switch>
                    </React.Fragment>
                </Router>
            </AppContext.Provider>
        );
    }
}

/**
 * Render the application :)
 */
render(<Main/>, root);