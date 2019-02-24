/**
 * Import
 */
import React from "react";

const style = {
    "height": "100vh",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center"
}

/**
 * Loader: First component when data are loading.
 */
export const Loader = () => {
    return (
        <section className="container" style={style}>
            <div className="row">
                <div className="col-12">
                    <h1>We fetching the data it should not be long.</h1>
                </div>
            </div>
        </section>
    );
}