import React from 'react';
import { useData } from '../../Context/Context'
import './styles.css'

const active = {
  background: '#59c384',
  color: '#e5eff7'
} 
const desactive = {
  background: '#d5efe9',
  color: '#59c384'
}

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
