import React from 'react'
import './styles.css'

// Pasa el precio con un 5% de descuento anualizado
const AnnualyConvert = price => parseInt(price * 12 * 0.95)

// Chequea si convertir o no el precio
const price = (Monthly, annualy) => annualy ? AnnualyConvert(Monthly) : Monthly

// texto Anual / Mensual
const typeOfSus = annualy => annualy ? '/Annualy': '/Monthly'

const BtnSingIn =({data}) => {
  const handleSignIn = data => {
    alert('El tipo de servicio seria ' +JSON.stringify(data))
    alert('Modal en proceso')
  }

  return  <button   onClick={() => handleSignIn(data)}
      className='btn'> Sing Up</button>
}

// Plan
export default ({data, annualy}) => {
  const { type, monthly } = data
  const { diskspace, bandwith } = data
  const { emailAdress, wordPress} = data
  const { support } = data
  //const { Img } = data
  const paymentType = {
    price:price(monthly,annualy),
    sus:typeOfSus(annualy)
  }
  return(
    <div className='table-price'>
      <p className='plan-title'>{type}</p>
      <div className='ball-div'></div>
      {/*<img className='ball-img' src={Img} />*/}
      <div>
        <p id='price'>${paymentType.price}</p>
        <p className='info'id='annualy'>{paymentType.sus}</p>
      </div>
      <p className='info'>{diskspace} Gb Diskspace</p>
      <p className='info'>{bandwith} Gb Bandwith</p>
      <p className='info'>{emailAdress} Email Adress</p>
      <p className='info'>{wordPress}</p>
      <p className='info'>{support}</p>
      <BtnSingIn data={{type:type, paymentType}}/>
    </div>
  ) 
}
