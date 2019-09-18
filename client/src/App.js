import React from 'react';
import './App.css';
import axios from 'axios';
import {Switch, Route} from 'react-router';
import Layout from './hoc/Layout';
import Home from './container/Home';
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
            <Route path='/' exact component={Home}/>
        </Switch>        
      </Layout>
    );
  }
}

export default App;
