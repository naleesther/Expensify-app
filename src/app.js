import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => {
    return(
        <div>
        This is from my dashboard component okay
    </div>
    );
}
   
const AddExpensePage = () => {
    return(
        <div>
        This from my add expense page
       </div>

    )
};

const EditExpensePage = () => {
    return(
        <div>
        This from my add expense page
    </div>

    )

}

const HelpPage = () => {
    return(
        <div>
        This from my add expense page
    </div>

    )
}


const Routes = ()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={AddExpensePage}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage} />
        </Switch>    
        </BrowserRouter>

    );
}

ReactDOM.render(<Routes /> , document.getElementById('app'));
























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

