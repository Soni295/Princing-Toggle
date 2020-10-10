import React from 'react';
import BoxOfPlans from './Components/BoxOfPlans/index'
import Title from './Components/Title/index'
import OptionBox from './Components/OptionBox/index'
import './App.css';

// App
export default () => (
  <div className='App'>
   <div>
      <Title />
      <OptionBox />
      <BoxOfPlans />
    </div>
  </div>
)
