
import './App.css';
import React,  { Component } from 'react';
import Result  from './Components/Result';
import ColorPicker from './Components/ColorPicker';
import Reset from './Components/Reset';
import SizeSetting from './Components/SizeSetting';

class App extends Component {
  render(){
    return (
      <div>
        <Result></Result>
        <ColorPicker></ColorPicker>
        <Reset></Reset>
        <SizeSetting></SizeSetting>
      </div>
      
      
);
}
}

export default App;
