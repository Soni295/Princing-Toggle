import React from 'react'

export const price = (Monthly, annualy) => 
  annualy ? parseInt(Monthly * 12 * 0.95) : Monthly

export const typeOfSus = annualy => 
  annualy ? '/Annualy': '/Monthly'

export default ({data}) => {
  const handleSignIn = data => {
    alert('El tipo de servicio seria ' +JSON.stringify(data))
    alert('Modal en proceso')
  }

  return(
    <button 
      onClick={() => handleSignIn(data)}
      className='btn'> Sing Up</button
    >
  )
}

