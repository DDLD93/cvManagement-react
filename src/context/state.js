import { createContext, useState, useEffect } from 'react'


export const StateContext = createContext()

export default function StateContextProvider ({ children }) {
   
    const [disable, setDisable] = useState(true)
    const buttonState = (e) => setDisable(e) 
    const [loading, setLoading] = useState(false)
    const loadingState = (e) => setLoading(e)
  


  
  useEffect(() => {
   
  },[])
  


const context = {disable,loading,buttonState,loadingState}

  return (
    <StateContext.Provider value={context}>
      {children}
    </StateContext.Provider>
  )
}