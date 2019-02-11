/**
 * Déclaration
 */
const getData = async bdd => {
    try {
        let data = await fetch(bdd);
        let res = await data.json();
        return res;
    } catch (error) {
        throw error;
    }
}

/**
 * Export
 */
export default getData;