import React,{ useState } from 'react';
import './App.css';
import data from './Config/Config'
import BoxOfPlans from './Components/BoxOfPlans'


const OptionBox = ({annualy, setAnnualy}) => {
  
  const handleAnnualy = () => setAnnualy(true)
  const handleMonthly = () => setAnnualy(false)
  
  return(
    <div className='option-box'>
      <button 
        onClick={() => handleMonthly(annualy)}
      >
        Monthly
      </button>
      <button 
        onClick={() => handleAnnualy(annualy)}
      >
        Annualy
      </button>
    </div>
  )
}

const handleSingUp = () => console.log('Hola')

export default () => {
  const [annualy, setAnnualy] = useState(false) 
  return (
    <div className='App'>
      <OptionBox 
        annualy={annualy}
        setAnnualy={setAnnualy}
      />
      <BoxOfPlans
        data={data} 
        annualy={annualy}
      />
    </div>
  )
}
