import React from 'react'
import { useData } from '../../Context/Context'
import { active, desactive } from './Aux'
import './styles.css'


// OptionBox
export default () => {
  const { setAnnualy, annualy } = useData()

  return(
    <div className='option-box'>
    
      <button 
        style={annualy ? desactive: active} 
        className='column' 
        onClick={() => setAnnualy(false)}
      >
        Monthly
      </button>

      <button 
        style={annualy ? active: desactive} 
        className='column' 
        onClick={() => setAnnualy(true)}
      >
        Annualy
      </button>
    
    </div>
  )
}
