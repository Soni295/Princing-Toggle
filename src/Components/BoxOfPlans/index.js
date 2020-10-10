import React from 'react'
import Plan from '../Plan/index'
import { useData } from '../../Context/Context'
import './styles.css'
export default () => {
  const { data, annualy } = useData()
  return(
    <div className='table-box'>
      {data.map(
        tabla  => (
          <Plan
            annualy={annualy}
            data={tabla} 
            key={tabla.type}
          />
        )
      )}
    </div>
  )
}
