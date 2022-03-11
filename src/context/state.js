import { createContext, useState, useEffect } from 'react'


export const StateContext = createContext()

export default function StateContextProvider ({ children }) {
   
    const [disable, setDisable] = useState(true)
    const buttonState = (e) => setDisable(e) 

    const [loading, setLoading] = useState(false)
    const loadingState = (e) => setLoading(e)

    const [formPostData, setformPostData] = useState(undefined)
    const setFormPost = (data) => setformPostData(data)


    async function postData(url = '', data = {}) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: data
        });
        return response.json(); 
      } catch (error) {
        return error
      }
      
    }
  


  
  useEffect(() => {
   
  },[])
  


const context = {disable,loading,formPostData,buttonState,loadingState,setFormPost,postData}

  return (
    <StateContext.Provider value={context}>
      {children}
    </StateContext.Provider>
  )
}