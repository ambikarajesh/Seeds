import React from 'react';
import {Switch, Route} from 'react-router';
import {connect} from 'react-redux';
import Layout from './hoc/Layout';
import Home from './container/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Cart from './components/Cart';
import Register from './components/Register';
import './assets/css/styles.css';
import * as actionCreators from './store/actions';
class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(actionCreators.retainState());
  }
  render(){
    return (
      <Layout>
        <Switch>
            <Route path='/cart' exact component={Cart}/>  
            <Route path='/login' exact component={Login}/>
            <Route path='/logout' exact component={Logout}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/' exact component={Home}/>
        </Switch>        
      </Layout>
    );
  }
}

export default connect()(App);
