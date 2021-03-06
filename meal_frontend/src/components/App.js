import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom"

import { Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './meals/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import DailyMeal from '../dailyMeals/DailyMeal';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import { Form } from './meals/Form';

// Alert Options
const alertOptions = {
    timeout: 3000,
    postition: 'bottom center'
}


class App extends Component{
    componentDidMount() {
        store.dispatch(loadUser());
    }
    
    render(){
        return (
            <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
                <Router>
                <Fragment>
                    <Header />
                    <Alerts />
                    <div className="container">
                        <Switch>
                            <PrivateRoute exact path ="/" component = {DailyMeal} />
                            <Route exact path ="/register" component ={Register} /> 
                            <Route exact path ="/login" component = {Login} /> 
                            <PrivateRoute exact path ="/mealList" component = {Dashboard} /> 
                        </Switch>
                    </div>
                </Fragment>
                </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));