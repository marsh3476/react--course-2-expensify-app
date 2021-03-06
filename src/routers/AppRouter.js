import React from 'react';
import {  BrowserRouter, Route, Switch  } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';




const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={props => <ExpenseDashboardPage {...props} />} exact={true}/>
        <Route path="/create" component={props => <AddExpensePage {...props} />} />
        <Route path="/edit/:id" component={props => <EditExpensePage {...props} />} />
        <Route path="/help" component={props => <HelpPage {...props} />} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
  );

export default AppRouter;