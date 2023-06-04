import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import  ExpenseListItems  from "../../components/ExpenseListItems";

test('should render ExpenseListeItems correctly' ,() =>{
    const wrapper = shallow(<ExpenseListItems {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
});