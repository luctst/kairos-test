/**
 * Import, Variables
 */
import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../model/store/GlobalState";

/**
 * Render a pagination
 */
export const Pagination = () => {
    let [pages, setPages] = useState([]);
    const context = useContext(AppContext);
    pages = [];
    for (let i = 1; i <= Math.ceil(context.pageNumber); i++) {
        pages.push(i);
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {
                    pages.map((el, i) => {
                        return (
                            <li key={i} className="page-item">
                                <NavLink
                                    to={`/cards/${i}`}
                                    className="page-link">{i}
                                </NavLink>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}