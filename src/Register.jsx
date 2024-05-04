import React, { useState } from "react";
import "./Register.css";
import { auth } from "./Components/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";


function Register() {


    const [state, setState] = useState(false);
    const SignUp= () => {

        const login = document.getElementsByClassName("Register-section");
 
        setTimeout(function() {
            setState(!state);
        }, 1000);

                
            }

            const [UserName, setUserName] = useState('');
            const [Email, setEmail] = useState('');
            const [Password, setPassword] = useState('');
            const [ConfirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async(info) =>{
    info.preventDefault();

  try{
        
         createUserWithEmailAndPassword(auth,  Email, Password);
         console.log("Account Successfully created")

  }catch(error){
      console.log(error);
     

  }

  } 

    return(
        <div className="wrapper Register-section">

        <div className="sub-wrapper">
    
    
    
    <div className="form-box">
        <h2>Sign Up</h2>
        <div className="error-txt">
                hello
       </div>
            <form action="#"  onSubmit={handleSubmit}>
                
            <div className="input-boxes Username boxes">
                    <span className="icon"><ion-icon name="person"></ion-icon></span>
                    <input type="text" id="regtext1" required autoComplete="off" name="Username" onChange={(info) => setUserName(info.target.value)} />
                    <label htmlFor="username" >User Name</label>
                </div>
    
                <div className="input-boxes regemail1 boxes ">
                    <span className="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="email" id="regemail1" required autoComplete="off" name="Email" onChange={(info) => setEmail(info.target.value)} />
                    <label htmlFor="email">Email</label>
                </div> 
    
                <div className="input-boxes regpassword">
                    <span className="icon"><ion-icon  name="eye" ></ion-icon></span>
                    <input type="password" id="regpassword" required autoComplete="off" name="Password" onChange={(info) => setPassword(info.target.value)}  />
                    <label htmlFor="password"> Password</label>
    
                    <div className="passwordConent">
                           <p>Password must contain</p>
                           <ul className="Requirement-list">
                             <li>
                             <ion-icon  name="mail"></ion-icon>
                                  <span>Atlease 8 Characters in Length</span>
                             </li>
                             <li>
                                  <ion-icon  name="mail"></ion-icon>
                                  <span>Atlease 1 number (0...9)</span>
                             </li>
                             <li>
                                   <ion-icon  name="mail"></ion-icon>
                                  <span>Atlease 1 lowercase letter (a...z)</span>
                             </li>
                             <li>
                                  <ion-icon  name="mail"></ion-icon>
                                  <span>Atlease 1 uppercase letter (A...Z)</span>
                             </li>
                             <li>
                                  <ion-icon  name="mail"></ion-icon>
                                  <span>Atlease 1 spacial symbol (!...$)</span>
                             </li>
                           </ul>
                       </div>
                </div>

                <div className="input-boxes regpassword">
                    <span className="icon"><ion-icon  name="eye" ></ion-icon></span>
                    <input type="password" id="regpassword" required autoComplete="off" name="Password" onChange={(info) => setConfirmPassword(info.target.value)} />
                    <label htmlFor="confirmpassword">Confirm Password</label>
    
                   
                </div>
    
                <div className="remeberforgot" > 
                                        
                                                  <label id="terms"  > By Sign Up i agree to your terms 
                                                          and policies
                                                  </label>
                                            
                                               
                                         </div>
                                         <button type="submit" class=" btn btn-primary submitBtn"><Link>Sign Up </Link></button>
                                         
                                         <div className="register-area">
                                             <p>Already have an account? <a href="#" className="login-link" ><Link to="/login"> Sign In Now!</Link></a></p>
                                         </div>
    
            </form>
    </div>
    
    </div>
    
        </div>
    
    )
}

export default Register;