import React from 'react'
import BtnSingUp, { price, typeOfSus } from './Aux'
import './styles.css'


// Plan
export default ({data, annualy}) => {
  const { type, monthly } = data
  const { diskspace, bandwith } = data
  const { emailAdress, wordPress} = data
  const { support } = data
  //const { Img } = data
  const paymentType = {
    price: price(monthly,annualy),
    sus: typeOfSus(annualy)
  }

  return(
    <div className='table-price'>
      <p className='plan-title'>{type}</p>
      <div className='ball-div'></div>
      <div>
        <p  id='price'>${paymentType.price}</p>
        <p className='info'id='annualy'>{paymentType.sus}</p>
      </div>
      <p className='info'>{diskspace} Gb Diskspace</p>
      <p className='info'>{bandwith} Gb Bandwith</p>
      <p className='info'>{emailAdress} Email Adress</p>
      <p className='info'>{wordPress}</p>
      <p className='info'>{support}</p>
      <BtnSingUp data={{type:type, paymentType}}/>
    </div>
  ) 
}
