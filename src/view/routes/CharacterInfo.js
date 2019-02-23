/**
 * Import
 */
import React from 'react';
import {getData} from "../model/functions";

/**
 * CharacterInfo: Hold more infos about a character
 */
export default class CharacterInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount = async () => {
        let characterData = await getData(`https://gateway.marvel.com/v1/public/characters/${this.props.match.params.id}?apikey=f5d9657d8bb68f805b1ec30fe13cf70d`);
        this.setState({data:characterData.data.results[0]});
    }
    render() {
        if (this.state.data) {
            return (
                <React.Fragment>
                    <header className="container mb-3">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-center">{this.state.data.name}</h1>
                            </div>
                        </div>
                    </header>
                    <section className="container description">
                        <div className="row">
                            <div className="col-12">
                                <p className="lead">{this.state.data.description}</p>
                                <p className="small"><strong>Resource API</strong>: {this.state.data.resourceURI}</p>
                            </div>
                        </div>
                    </section>
                    <section className="container stories mb-3">
                        <div className="row">
                            <div className="col-12">
                                <h2>Appears in:</h2>
                                <ul className="list-group">
                                    {
                                        this.state.data.stories.items.map(el => {
                                            return <li
                                                key={this.state.data.id--}
                                                className="list-group-item small">{el.name}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="container more mb-3">
                        <div className="row">
                            <div className="col-12">
                            <h2>See more:</h2>
                                <ul className="list-group">
                                    {
                                        this.state.data.urls.map(el => {
                                            return <li 
                                            key={this.state.data.id++} 
                                            className="list-group-item small">{el.type}: 
                                                <a href={el.url}>{el.url}</a>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="container">
                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-success"><a href="/" className="is__link__info">Home</a></button>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}