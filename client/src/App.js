import React from 'react';
import axios from 'axios';
import {Switch, Route} from 'react-router';
import Layout from './hoc/Layout';
import Home from './container/Home';
import Login from './components/Login';
import Cart from './components/Cart';
import Register from './components/Register';
import './assets/css/styles.css';
class App extends React.Component{
  componentDidMount(){
    axios.get('/api/product').then(res=>{
      console.log(res);
    })
  }
  render(){
    return (
      <Layout>
        <Switch>
            <Route path='/cart' exact component={Cart}/>  
            <Route path='/login' exact component={Login}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/' exact component={Home}/>
        </Switch>        
      </Layout>
    );
  }
}

export default App;
