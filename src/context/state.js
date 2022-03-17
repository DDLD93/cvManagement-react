import { createContext, useState, useEffect } from "react";
import { stringify } from "stylis";

export const StateContext = createContext();

export default function StateContextProvider({ children }) {
  const [user, setuser] = useState(localStorage.getItem("user")|| null)

  const [disable, setDisable] = useState(true);
  const buttonState = (e) => setDisable(e);

  const [loading, setLoading] = useState(false);
  const loadingState = (e) => setLoading(e);

  const [formPostData, setformPostData] = useState(undefined);
  const setFormPost = (data) => setformPostData(data);

  const [isLogin, setisLogin] = useState(true);
  const changeIsLogin = (e) => setisLogin(e);

  const [isAdmin, setisAdmin] = useState(true);
  const changeIsAdmin = (e) => setisAdmin(e);

  async function postData(url = "") {
    console.log(formPostData)
    setLoading(true);
    const response = await fetch(`http://localhost:5000/forms/modify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formPostData),
    });
    setLoading(false);
    return response.json();
  }
  const login = (data) => {
    setLoading(true)
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
       console.log("respose>>>>>",response)
        if(response.status == "Success"){
          localStorage.setItem("user", JSON.stringify(response.payload))
          localStorage.setItem("token", "token")
          setuser(JSON.parse(localStorage.getItem("user")))
          setLoading(false)
        } 
        setLoading(false)
      }).catch((err)=>{
        console.log(err)
        setLoading(false)
      });
  };

  useEffect(() => {
  
    let localuser =JSON.parse(localStorage.getItem("user"))|| null
    setuser(localuser)
   
  }, []);

  const context = {
    user,
    disable,
    loading,
    formPostData,
    isLogin,
    isAdmin,
    changeIsLogin,
    changeIsAdmin,
    buttonState,
    loadingState,
    setFormPost,
    postData,
    login,
  };

  return <StateContext.Provider 
            value={context}>
            {children}
          </StateContext.Provider>;
}
