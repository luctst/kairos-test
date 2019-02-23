/**
 * Import
 */
import React from "react";
import {getData} from "../model/functions";
import AppContext from "../model/store/app-context";
import Cards from "./components/Cards";
import {CharactersBtn} from "./components/CharactersBtn";
import {CharactersLoaded} from "./components/CharactersLoaded";
import Header from "./components/Header";
import Loader from "./components/Loader";

/**
 * Variables
 */
const marvelApiKey = `apikey=f5d9657d8bb68f805b1ec30fe13cf70d`;
const marvelUrlApi = `https://gateway.marvel.com/v1/public`;

/**
 * App: HOC component holds all the component's of our app.
 */
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {};
        fetch(`${marvelUrlApi}/characters?limit=10&${marvelApiKey}`)
            .then(data => data.json())
            .then(dataParsed => this.state.marvelData =dataParsed.data.results);
    }

    getInputValue = event => {
        if (event.target.value !== "") {
            this.setState({
                charactersLimit: parseInt(event.target.value),
                dataLoading: true
            });
        } else if (event.target.value === "") {
            this.setState({ charactersLimit: 10 });
        }
    }

    // componentDidUpdate = async () => {
    //     if (this.state.charactersLimit !== this.state.marvelData.length) {
    //         let resData = await getData(`${marvelUrlApi}/characters?limit=${this.state.charactersLimit}&${marvelApiKey}`);
    //         this.setState({marvelData:resData.data.results, dataLoading: false });
    //     }
    // }

    render() {
        return (
            <AppContext.Provider value={{data: this.state.marvelData}}>
                {(this.state.loaderActive) ? <Loader />:
                <React.Fragment>
                    <Header/>
                    <CharactersBtn
                        getValue={this.getInputValue}
                        display={this.state.dataLoading} />
                    <CharactersLoaded number={this.state.marvelData.length} />
                    <main className="container mt-3 mb-3">
                        {
                            this.state.marvelData.map(el => {
                                return <Cards
                                    id={el.id}
                                    name={el.name}
                                    tab={el.series.items}
                                    key={el.id}
                                    image={`${el.thumbnail.path}.${el.thumbnail.extension}`} />
                            })
                        }
                    </main>
                </React.Fragment>}
            </AppContext.Provider>
        );
    }
}