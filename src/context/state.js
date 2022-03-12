import { createContext, useState, useEffect } from "react";
import { stringify } from "stylis";

export const StateContext = createContext();

export default function StateContextProvider({ children }) {
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
    setLoading(true);
    const response = await fetch(`http://localhost:4000/forms/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formPostData,
    });
    setLoading(false);
    return response.json();
  }
  const login = (data) => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => {
        res.json();
      })
      .then((response) => {
        response.statu == "success"
          ? localStorage.setItem("user", JSON.stringify(response.payload))
          : console.log("error login");
      }).catch((err)=>{
        console.log(err)
      });
  };

  useEffect(() => {}, []);

  const context = {
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
