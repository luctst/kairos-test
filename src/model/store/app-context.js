/**
 * Import
 */
import React from "react";

/**
 * Crate global context for the app
 * @param Object Who hold all data of our app.
 */
export default React.createContext({
    loaderActive: true,
    dataLoading: false
});