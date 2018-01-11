import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import Header from '../components/Header';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Footer from './../components/Footer';


const AppRouter = (props) =>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path={"/"} component={ExpenseDashboardPage} visibleExpenses={props.visibleExpenses} exact={true}/>
                <Route path={"/create"} component={AddExpensePage}/>
                <Route path={"/edit/:id"} component={EditExpensePage}/>
                <Route path={"/help"} component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer />
        </div>

    </BrowserRouter>
);
export default  AppRouter;
