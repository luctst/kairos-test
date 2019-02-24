/**
 * Import, Variables
 */
import React, {useState} from "react";
import AppContext from "../../model/store/app-context";

/**
 * Render a pagination
 */
export const Pagination = () => {
    const [page, setPage] = useState([]);
    return (
        <AppContext.Consumer>
            {context => {
                for (let i = 1; i <= context.pageNumber; i++) {
                    page.push(
                        <li key={i} className="page-item">
                            <a className="page-link">{i}</a>
                        </li>
                    );
                }
                return (
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            {page}
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                );
            }}
        </AppContext.Consumer>
    );
}