/**
 * Import
 */
import React from 'react';
import {NavLink} from "react-router-dom";
import AppContext from "../../model/store/app-context";

/**
 * CharacterInfo: Hold more infos about a character
 */
export default class CharacterInfo extends React.Component {
    static contextType = AppContext;

    componentWillUnmount() {
        delete this.context.character;
    }

    render() {
        this.context.marvelData.map(el => parseInt(this.props.match.params.id) === el.id ? this.context.character = el : null);
        return (<React.Fragment>
            <header className="container mb-3">
            <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">{this.context.character.name}</h1>
                    </div>
                </div>
            </header>
            <section className="container description">
                <div className="row">
                    <div className="col-12">
                        <p className="lead">{this.context.character.description}</p>
                        <p className="small"><strong>Resource API</strong>: {this.context.character.resourceURI}</p>
                    </div>
                </div>
            </section>
            <section className="container stories mb-3">
                <div className="row">
                    <div className="col-12">
                        <h2>Appears in:</h2>
                        <ul className="list-group">
                            {
                                this.context.character.stories.items.map(el => {
                                    return <li
                                        key={this.context.character.id--}
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
                                this.context.character.urls.map(el => {
                                    return <li
                                        key={this.context.character.id++}
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
                        <button className="btn btn-success">
                            <NavLink to="/" className="is__link__info">Home</NavLink>
                        </button>
                    </div>
                </div>
            </section>
        </React.Fragment>);
    }
}