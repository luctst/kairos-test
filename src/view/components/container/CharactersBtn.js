/**
 * Import
 */
import React from "react";
import AppContext from "../../../model/store/GlobalState";

/**
 * CharactersBtn: HOC, Number of characters with <LoaderImg/> component.
 */
export class CharactersBtn extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <section className="container">
                <div className="characters--option">
                    <p className="small">Number of characters to loaded, default 10 - max 100.</p>
                    <input type="number" className="form-control" 
                    onBlur={this.props.handleInputValue}/>
                </div>
            </section>
        );
    }
}