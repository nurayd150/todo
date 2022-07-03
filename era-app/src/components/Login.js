import React, { useState } from "react";
import Form from "./Form";
import  './Login.css';
import {useEffect} from 'react';



function Login() {

  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [taskList, setTaskList] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


  const database = [
    {
      userno: "nurayd150@gmail.com",
      password: "123123"
    },
    {
      userno: "belgin15385@gmail.com",
      password: "abcd12345"
    }
  ];

  const errors = {
    no: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();

    var { no, pass } = document.forms[0];

  
    const userData = database.find((user) => user.userno === no.value);

   
    if (userData) {
      if (userData.password !== pass.value) {
        
        setErrorMessages({ name: "pass", message: errors.pass });
        
      } else {
        setIsSubmitted(true);
      }
    } else {
      
      setErrorMessages({ name: "no", message: errors.no });
    }
    
    };


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  
  const renderForm = (
    <div  className="container"  onSubmit={handleSubmit}>
      <form className="row">
        <div className="col-md-12">
            <div className="form-group mb-3">
                <label className="form-label"/>
                <h1>GİRİŞ YAPINIZ</h1>
            </div>
         <div className="form-group mb-3">
                    <label className="form-label"/>
                    <input type={"text"} name="no" placeholder="Kullanıcı adınız" className="form-control " required />
                   
                    {renderErrorMessage("no")}
                </div>
          <div className="form-group mb-3">
              <label className="form-label"/>
              <input type={"password" } name="pass" placeholder="Şifreniz" className="form-control" required />
              {renderErrorMessage("pass")}
          </div>
        
          <div className="form-group mb-3">
                <label className="form-label"/>
                <input type={"submit"}  name="button" value={"Giriş yap"} onClick={"/Form"} className="form-control"/>
            
         
          </div>
      
            </div>
        </form>
    </div>
  );

  return (
    
    <div className="login">
      <div className="">
        
        {isSubmitted ? <div>{secimegidis()}</div> : renderForm}
      </div>
    </div>
  );
}
function secimegidis(){
    return(
        <Form/>
    );

};
export default Login;