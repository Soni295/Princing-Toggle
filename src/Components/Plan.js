import React from 'react'

// Anualiza el precio y le resta el 5%
const AnnualyConvert = price => 
  parseInt(price * 12 * 0.95)

// Si annualy es true anuliza el precio
const price = (Monthly, annualy) =>
  annualy ? AnnualyConvert(Monthly) : Monthly

// Cambia el texto si es anual o mensual
const typeOfSus = annualy =>
  annualy ? '/Annualy': '/Monthly'
function BtnSingIn() {
  return <button className='btn'> Sing Up</button>
}

// Plan
export default ({data, handleSingUp, annualy}) => {
  const { type, Monthly } = data
  const { Diskspace, Bandwith } = data
  const { EmailAdress, WordPress} = data
  const { Support } = data
  
  return(
    <div className='table-price'>
      <p className='plan-title'>{type}</p>
      <div>
        <p>${price(Monthly, annualy)}</p>
        <p className='info'>{typeOfSus(annualy)}</p>
      </div>
      <p className='info'>{Diskspace} Gb Diskspace</p>
      <p className='info'>{Bandwith} Gb Bandwith</p>
      <p className='info'>{EmailAdress} Email Adress</p>
      <p className='info'>{WordPress}</p>
      <p className='info'>{Support}</p>
      <BtnSingIn />
    </div>
  ) 
}
