import { createContext, useState, useEffect } from "react";
import { useSnackbar } from 'notistack';

export const StateContext = createContext();

export default function StateContextProvider({ children }) {
  const [user, setuser] = useState(localStorage.getItem("user")|| null)
  const { enqueueSnackbar } = useSnackbar();

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

  const notification = (type="info",message)=>{
    enqueueSnackbar(message, {variant:type,
      anchorOrigin:{vertical: "top", horizontal: "right" }});

  }
  async function postForm(url = "") {
    console.log(formPostData)
    setLoading(true);
    const response = await fetch(`http://localhost:5000/forms/create`, {
      method: "POST",
      body:formPostData
    });
    setLoading(false);
    return response.json();
  }

  async function postData(url = "") {
    console.log(url)
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
          notification("success",response.message)
          return
        } 
        notification("error",response.message)
        setLoading(false)
      }).catch((err)=>{
        console.log(err)
        notification("error",response.message)
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
    postForm,
    notification,
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
