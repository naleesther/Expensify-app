import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <PrivateRoute path="/dashboard" element={<ExpenseDashboardPage />}/>
        <PrivateRoute path="/create" element={<AddExpensePage/>}/>
        <PrivateRoute path="/edit/:id" element={<EditExpensePage/>}/>  
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);
export default AppRouter;
