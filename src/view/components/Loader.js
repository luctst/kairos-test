/**
 * Import
 */
import React from "react";


/**
 * Déclaration
 */
const style = {
    "height": "100vh",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center"
}
const Loader = () => {
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

/**
 * Export
 */
export default Loader;