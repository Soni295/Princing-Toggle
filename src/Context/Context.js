import React, { useState, useMemo } from 'react'
const DataContext = React.createContext()

class Plan{
  constructor(type,monthly,diskspace,bandwith,emailAdress) {
    this.type=type
    this.monthly=monthly
    this.diskspace = diskspace
    this.bandwith = bandwith
    this.emailAdress = emailAdress
    this.wordPress = 'WordPress Installs'
    this.support = 'Private Support'
  }
}

export const DataProvider = props => {
  const [annualy, setAnnualy] = useState(false)
  let basic = new Plan('Basic', 39, 1, 10, 2) 
  let premium = new Plan('Premium', 49, 5, 50, 4) 
  let business = new Plan('Business', 59, 20, 100, 10) 
  
  const data = [ basic, premium, business ]
  
  const value = useMemo(() => 
    ({data, annualy, setAnnualy}), [data,  annualy])

  return <DataContext.Provider value={value} {...props} />
} 

export const useData = () => {
  const context = React.useContext(DataContext)
  if(!context) throw new Error('Don\'t get context')
  return context 
}

