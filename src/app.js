import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};
// ReactDOM.render(<p>Loading .....</p> , document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/");
      }
    });
  } else {
    renderApp();
    history.push("/");
  }
});
















// import subtract,{ square,add} from './utils.js';
// import './person.js'
// import isSenior, { canDrink, isAdult } from './person.js';
// console.log('app.js is running');
// console.log(square(4));
// console.log(add(20,20));
// console.log(subtract(100,20));
// console.log(isAdult(20));
// console.log(canDrink(20));
// console.log(isSenior(55));
