/**
 * HTTP request with async, await.
 * @param String The url to get data from
 */
export const getData = async bdd => {
    try {
        let data = await fetch(bdd);
        let res = await data.json();
        return res;
    } catch (error) {
        throw error;
    }
}

/**
 * Http request by using then, catch.
 * @param String the url to get data from.
 */
export const getDataThen = (bdd, props) => {
    fetch(bdd)
        .then(data => data.json())
        .then(dataParsed => props += dataParsed.data.results)
        .catch(error => error);
}

/**
 * Create new tab with data to display in <Cards/> component
 * @param Number the number of link in the <Pagination/> component.
 * @param Array the array to push the data.
 * @returns new array.
 */
export const pushInTab = (numberOfPages, tab) => {
    for (let i = 0; i < numberOfPages; i++) {
        tab.push({
            id: i,
            index: i * 5,
        });
    }
}