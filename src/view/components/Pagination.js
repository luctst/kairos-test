/**
 * Import, Variables
 */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../model/store/app-context";

/**
 * Render a pagination
 */
export const Pagination = () => {
    let [pages] = useState([]);
    return (
        <AppContext.Consumer>
            {context => {
                pages = [];
                for (let i = 1; i <= Math.ceil(context.pageNumber); i++) {
                    pages.push(i);
                }
                return (
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {
                                pages.map((el, i) => {
                                    if (i === 0 && context.actualLinkPage === "/") {
                                        return (
                                            <li key={i} className="page-item active">
                                                <NavLink to={`?cards=${el}`} className="page-link">{el}</NavLink>
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li key={i} className="page-item">
                                                <NavLink to={`?cards=${el}`} className="page-link">{el}</NavLink>
                                            </li>
                                        );
                                    }
                                })
                            }
                        </ul>
                    </nav>
                );
            }}
        </AppContext.Consumer>
    );
}