/**
 * Import, Variables
 */
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {pushInTab} from "../model/functions";
import AppContext from "../model/store/GlobalState";
import Cards from "./components/Cards";
import {CharactersBtn} from "./components/container/CharactersBtn";
import {CharactersLoaded} from "./components/CharactersLoaded";
import { Pagination } from "./components/Pagination";

/**
 * App: HOC component holds all the component's of our app.
 */
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cl: 10,
            cards: []
        }
        pushInTab(Math.ceil(this.state.cl / 5), this.state.cards);
    }

    static contextType = AppContext;
    
    getInputValue = event => {
        if (event.target.value !== "") {

            const value = event.target.value;
            this.context.cl = parseInt(event.target.value);
            this.context.pageNumber = event.target.value / 5;

            this.setState(state => {
                state.cards = [];
                state.cl = parseInt(value);
                pushInTab(this.context.pageNumber, state.cards);
                return state;
            });
        } else {
            this.context.cl = 10;
            return this.setState({cl: 10});
        }
    }

    componentDidMount() {
        this.context.cards = this.state.cards;
    }
    componentDidUpdate() {
        this.context.cards = this.state.cards;
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <CharactersBtn handleInputValue={this.getInputValue}/>
                    <CharactersLoaded/>
                    <Route path={`/cards/:el`} component={Cards} exact/>
                    <Pagination/>
                </React.Fragment>
            </Router>
        );
    }
}