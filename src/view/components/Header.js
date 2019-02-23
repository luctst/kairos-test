/**
 * Import
 */
import React from "react";

/**
 * Header: Used for render the main title of the app.
 */
export default class Header extends React.PureComponent {
    render() {
        return (
            <header className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Marvel Characters List</h1>
                    </div>
                </div>
            </header>
        );
    }
}