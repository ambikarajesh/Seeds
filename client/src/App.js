import React from 'react';
import './App.css';
import axios from 'axios';
class App extends React.Component{
  componentDidMount(){
    axios.get('/api/product').then(res=>{
      console.log(res);
    })
  }
  render(){
    return (
      <div>
        Hello
      </div>
    );
  }
}

export default App;
