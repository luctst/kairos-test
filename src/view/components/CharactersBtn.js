/**
 * Import
 */
import React from "react";
import LoaderImg from "./LoaderImg";

/**
 * CharactersBtn: HOC, Number of characters with <LoaderImg/> component.
 */
export const CharactersBtn = props => {
    return (
        <section className="container">
            <div className="characters--option">
                <p className="small">Number of characters to display, default 10 - max 100.</p>
                <input type="number" className="form-control" onChange={props.getValue} />
                {props.display ? (<LoaderImg />) : null}
            </div>
        </section>
    );
}