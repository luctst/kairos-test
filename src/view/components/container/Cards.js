/**
 * Import, Variables
 */
import React from "react";
import { NavLink } from 'react-router-dom';
import AppContext from "../../../model/store/app-context";
import { getData } from "../../../model/functions";
import {Pagination} from "../Pagination";
const marvelApiKey = `apikey=f5d9657d8bb68f805b1ec30fe13cf70d`;
const marvelUrlApi = `https://gateway.marvel.com/v1/public`;

/**
 * Cards: Create a little card with info's about a character, render <Pagination/>
 */
export default class Cards extends React.Component {
    static contextType = AppContext;

    shouldComponentUpdate = async () => {
        if (this.context.cl <= this.context.marvelData.length) {
            const nameIndex = this.context.marvelData[this.context.cl];
            const inputIndex = this.context.marvelData.indexOf(nameIndex);
            const marvelDataLength = this.context.marvelData.length;
            this.context.marvelData.splice(inputIndex, marvelDataLength - this.context.cl);
            return true;
        } else {
            const dataParsed = await getData(`${marvelUrlApi}/characters?limit=${this.context.cl}&${marvelApiKey}`);
            this.context.marvelData = dataParsed.data.results;
            this.forceUpdate();
            return true;
        }
    }

    render() {
        return (
            <React.Fragment>
                <main className="container mt-3 mb-3">
                    {this.context.marvelData.map((el, i) => {
                        if (i <= 4) {
                            return (
                                <div className="content" key={el.id}>
                                    <div className="content--left">
                                        <div className="content--title">
                                            <h1 className="display-5">Name: {el.name}</h1>
                                            <span className="small mb-2">Numéro {i + 1}</span>
                                        </div>
                                        <div className="content--button">
                                            <button className="btn btn-primary">
                                                <NavLink className="is__link__info" to={`/${el.id}`}>More info</NavLink>
                                            </button>
                                        </div>
                                        <hr />
                                        <div className="content--series">
                                            <p className="small">Seen in comics:</p>
                                            <ul className="list-group">
                                                {
                                                    el.comics.items.map(el => {
                                                        return <li key={el.name} className="list-group-item">{el.name}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content--right">
                                        <div className="content--picture">
                                            <p className="small">Picture:</p>
                                            <img
                                                src={`${el.thumbnail.path}.${el.thumbnail.extension}`} className="is__img__card"></img>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </main>
                <Pagination/>
            </React.Fragment>
        );
    }
}