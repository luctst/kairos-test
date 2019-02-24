/**
 * Import
 */
import React from "react";
import AppContext from "../../model/store/app-context";

/**
 * CharactersLoaded: Number of characters loaded.
 */
export const CharactersLoaded = () => {
    return (
        <AppContext.Consumer>
            {context => (
                <section className="container mt-3">
                    <div className="row">
                        <div className="col-12">
                            <p>Characters loaded: <strong>{context.cl}</strong></p>
                        </div>
                    </div>
                </section>
            )}
        </AppContext.Consumer>
    );
}