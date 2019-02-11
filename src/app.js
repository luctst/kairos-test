/**
 * Import
 */
import "./assets/scss/main.scss";
import React from "react";
import { render } from "react-dom";
import getData from "./model/fn";
import Loader from "./view/components/Loader";
import Header from "./view/components/Header";
import CharactersBtn from "./view/components/CharactersBtn";
import CharactersLoaded from "./view/components/CharactersLoaded";
import Cards from "./view/components/Cards";
/**
 * Variables
 */
const root = document.querySelector("#root");
const marvelApiKey = `apikey=f5d9657d8bb68f805b1ec30fe13cf70d`;
const marvelUrlApi = `https://gateway.marvel.com/v1/public`;

/**
 * Déclaration
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charactersLimit: 10,
            loaderActive: true,
            dataLoading: false
        }
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
    componentDidMount = async () => {
        let resData = await getData(`${marvelUrlApi}/characters?limit=${this.state.charactersLimit}&${marvelApiKey}`);
        this.setState({ marvelData: resData.data.results, loaderActive: false });
    }
    componentDidUpdate = async () => {
        if (this.state.charactersLimit !== this.state.marvelData.length) {
            let resData = await getData(`${marvelUrlApi}/characters?limit=${this.state.charactersLimit}&${marvelApiKey}`);
            this.setState({ marvelData: resData.data.results, dataLoading: false });
        }
    }
    render() {
        if (this.state.loaderActive) return <Loader />;
        return (
            <React.Fragment>
                <Header title="Marvel Characters List" />

                <CharactersBtn
                    launchReq={() => this.setState({ displayCharacters: !this.state.displayCharacters })}
                    getValue={this.getInputValue}
                    display={this.state.dataLoading} />

                <CharactersLoaded number={this.state.marvelData.length} />

                <main className="container mt-3 mb-3">
                    {
                        this.state.marvelData.map(el => {
                            return <Cards
                                name={el.name}
                                desc={el.description}
                                tab={el.series.items}
                                key={el.id}
                                image={`${el.thumbnail.path}.${el.thumbnail.extension}`} />
                        })
                    }
                </main>
            </React.Fragment>
        );
    }
}

/**
 * Exécution
 */
render(<App />, root);