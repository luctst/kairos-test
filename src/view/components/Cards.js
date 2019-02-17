/**
 * Import
 */
import React from "react";
import {NavLink} from 'react-router-dom';

/**
 * Déclaration
 */
const Cards = props => {
    return (
        <div className="content">
            <div className="content--left">
                <div className="content--title">
                    <h1 className="display-5">Name: {props.name}</h1>
                </div>
                <div className="content--button">
                    <button className="btn btn-primary">
                        <NavLink className="is__link__info" to={`/${props.id}`}>More info</NavLink>
                    </button>
                </div>
                <hr />
                <div className="content--series">
                    <p className="small">Seen in comics:</p>
                    <ul className="list-group">
                        {
                            props.tab.map(el => {
                                return <li className="list-group-item">{el.name}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="content--right">
                <div className="content--picture">
                    <p className="small">Picture:</p>
                    <img src={props.image} className="is__img__card"></img>
                </div>
            </div>
        </div>
    );
}

/**
 * Export
 */
export default Cards;