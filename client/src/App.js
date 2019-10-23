import React from 'react';
import {Switch, Route} from 'react-router';
import {connect} from 'react-redux';
import Layout from './hoc/Layout';
import Home from './container/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Cart from './components/Cart';
import Register from './components/Register';
import PwdReset from './components/PwdReset';
import NewPwdSet from './components/NewPwdSet';
import User from './components/User';
import './assets/css/styles.css';
import * as actionCreators from './store/actions';
import Auth from './hoc/Auth';
class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(actionCreators.retainState());
  }
  render(){
    return (
      <Layout>
        <Switch>
          {/* private route */}
          <Route path='/user' exact component={Auth(User)}/>
          {/* public route */}
            <Route path='/cart' exact component={Cart}/>  
            <Route path='/login' exact component={Login}/>
            <Route path='/logout' exact component={Logout}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/pwdreset' exact component={PwdReset}/>
            <Route path='/pwdreset/:token' exact component={NewPwdSet}/>
            <Route path='/' exact component={Home}/>
        </Switch>        
      </Layout>
    );
  }
}

export default connect()(App);
