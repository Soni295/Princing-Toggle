import React from 'react'
import './styles.css'
import BtnSingIn, { price, typeOfSus } from './Aux'

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
