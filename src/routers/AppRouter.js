import React from 'react';
import AddExpensePage from '../components/AddExpensePage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
          <Header/>
        <Routes>
            <Route exact path="/" element={<ExpenseDashboardPage/>}/>
            <Route path="/create" element={<AddExpensePage/>}/>
            <Route path="/edit/:id" element={<EditExpensePage/>}/>
            <Route path="/help" element={<HelpPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        </div>    
    </BrowserRouter>
);
export default AppRouter;
