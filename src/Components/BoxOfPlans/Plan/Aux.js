import React from 'react'

export const price = (Monthly, annualy) => 
  annualy ? parseInt(Monthly * 12 * 0.95) : Monthly

export const typeOfSus = annualy => 
  annualy ? '/Annualy': '/Monthly'

export default ({data}) => (
  <button 
    className='btn'
    onClick={() => console.log(data)}  
  > 
    Sing Up
  </button>
)
