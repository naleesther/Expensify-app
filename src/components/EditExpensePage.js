import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import { Link, redirect } from "react-router-dom";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = () => {
    // console.log(this.props.expense);
    this.props.startRemoveExpense(this.props.expense.id);
    // this.props.history('/')
  };
  render() {
    // const location = useLocation();
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button
          onClick={() => {
            startRemoveExpense(this.props.expense.id);
          }}
        >
          Remove
        </button>
        <button onClick={redirect("/")}>Link</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === window.location.pathname.split("/")[2]
    ),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
