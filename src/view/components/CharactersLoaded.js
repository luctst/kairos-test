/**
 * Import
 */
import React from "react";

/**
 * Déclaration
 */
const CharactersLoaded = props => {
    return (
        <section className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <p>Characters loaded: <strong>{props.number}</strong></p>
                </div>
            </div>
        </section>
    );
}

/**
 * Export
 */
export default CharactersLoaded;