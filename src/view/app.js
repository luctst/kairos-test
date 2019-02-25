/**
 * Import, Variables
 */
import React from "react";
import AppContext from "../model/store/app-context";
import Cards from "./components/container/Cards";
import {CharactersBtn} from "./components/container/CharactersBtn";
import {CharactersLoaded} from "./components/CharactersLoaded";

/**
 * App: HOC component holds all the component's of our app.
 */
export default class App extends React.Component {
    static contextType = AppContext;

    state = {
        cl: 10,
        actualLinkPage: this.props.location.pathname
    }

    getInputValue = event => {
        if (event.target.value !== "") {
            this.setState({cl: parseInt(event.target.value)});
            this.context.cl = parseInt(event.target.value);
            return this.context.pageNumber = event.target.value / 5;
        } else {
            this.context.cl = 10;
            return this.setState({cl: 10});
        }
    }

    render() {
        this.context.actualLinkPage = this.state.actualLinkPage;
        return (
            <React.Fragment>
                <CharactersBtn handleInputValue={this.getInputValue}/>
                <CharactersLoaded/>
                <Cards/>
            </React.Fragment>
        );
    }
}