import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import LoginPage from './../components/LoginPage'
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Footer from './../components/Footer';
import PrivateRoute from './PrivateRoutes';
import PublicRoute from './PublicRoutes';

export const history = createHistory();

const AppRouter = (props) =>(
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path={"/"} component={LoginPage} exact={true}/>
                <PrivateRoute path={"/dashboard"} component={ExpenseDashboardPage} visibleExpenses={props.visibleExpenses} />
                <PrivateRoute path={"/create"} component={AddExpensePage}/>
                <PrivateRoute path={"/edit/:id"} component={EditExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer />
        </div>

    </Router>
);
export default  AppRouter;
