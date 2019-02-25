// /**
//  * Import
//  */
import React from "react";
export default React.createContext();
// const Store = React.createContext();
// import {getData} from "../functions";
// const marvelApiKey = `apikey=f5d9657d8bb68f805b1ec30fe13cf70d`;
// const marvelUrlApi = `https://gateway.marvel.com/v1/public`;

// /**
//  * Hold all state who's been share by components of our app.
//  */
// export default class GlobalState extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loaderActive: true,
//             cl: 10
//         };
//         this.httpRequest();
//     }

//     httpRequest = async () => {
//         const dataParsed = await getData(`${marvelUrlApi}/characters?limit=${this.state.cl}&${ marvelApiKey}`);
//         this.state.marvelData =  dataParsed.data.results;
//         this.state.loaderActive =  false;
//         this.state.pageNumber =  this.state / 5;
//         return this.state;
//     }

//     render() {
//         console.log("Render global state");
//         return (
//             <Store.Provider value={this.state}>
//                 {this.props.children}
//             </Store.Provider>
//         );
//     }
// }
