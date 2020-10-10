import React from 'react'
import Plan from './Plan'


// BoxOfPlans
export default ({data, annualy, handleSingUp}) => {
  return(
    <div className='table-box'>
      {data.map(
        (tabla, i) => (
          <Plan
            annualy={annualy}
            data={tabla} 
            handleSingUp={handleSingUp}
            key={i}
          />
        )
      )}
    </div>
  )
}
