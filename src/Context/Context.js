import React, { useState, useMemo } from 'react'
import { basic, premium, business } from './Plans'
const DataContext = React.createContext()

export const DataProvider = props => {
  const [annualy, setAnnualy] = useState(false)
  
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

