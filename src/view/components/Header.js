/**
 * Import
 */
import React from "react";

/**
 * Déclaration
 */
const Header = props => {
    return (
        <header className="container mt-3 mb-3">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">{props.title}</h1>
                </div>
            </div>
        </header>
    );
}

/**
 * Export
 */
export default Header;