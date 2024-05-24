import React, { useEffect, useState } from "react";
import "./Register.css";
import { auth, db } from "./Components/Firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useHref, useNavigate, } from "react-router-dom";
import { toast } from 'react-toastify';

import Notification from "./Components/notification/Notification";



function Register() {


    const [state, setState] = useState(false);
    
let newLocate = useNavigate()
    const newLocation = useHref("/homepage")
    const oldLocation = useHref(" ")

     const [locate, setLocation] = useState(false)


  const HandleSignUpForm = async(e) =>{
    e.preventDefault()
     const formData = new FormData(e.target);
  
     const {username, email, password} = Object.fromEntries(formData);
     
     try {

        setLocation(true);
     
            const response = await createUserWithEmailAndPassword(auth, email, password);
  
            await setDoc(doc(db, "username", response.user.uid), {
                   username, email,
                   id: response.user.uid,
                   blocked: []
                  
            });
  
  
            await setDoc(doc(db, "userchat", response.user.uid), {
              chats: [],
             
       });
  
             toast.success("Account Successfully Created");
             toast.success("Please clickagain this time to enter");
            
           
      
     } catch (error) {
           console.log(error);
           toast.error(error.message)
           setLocation(false)
           
     }

   
  
  }
  
  
  const checking = () =>{
    if (locate) {
          newLocate("/homepage")
    }
    else{
     newLocate("/")
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
            <form action="#"  onSubmit={HandleSignUpForm}>
                
            <div className="input-boxes Username boxes">
                    <span className="icon"><ion-icon name="person"></ion-icon></span>
                    <input type="text" id="regtext1" autoComplete="off" name="username" />
                    <label htmlFor="username" >User Name</label>
                </div>
    
                <div className="input-boxes regemail1 boxes ">
                    <span className="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="email" id="regemail1"autoComplete="off" name="email" />
                    <label htmlFor="email">Email</label>
                </div> 
    
                <div className="input-boxes regpassword">
                    <span className="icon"><ion-icon  name="eye" ></ion-icon></span>
                    <input type="password" id="regpassword" required autoComplete="off" name="password"  />
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

                    
                <div className="remeberforgot" > 
                                        
                                                  <label id="terms"  > By Sign Up i agree to your terms 
                                                          and policies
                                                  </label>
                                            
                                               
                                         </div>
                                        <button  onClick={checking} type="submit" class=" btn btn-primary submitBtn"><Link to={locate ? "/homepage" : undefined}>Sign Up </Link></button> 
                                         
                                         <div className="register-area">
                                             <p>Already have an account? <a href="#" className="login-link" ><Link to="/login"> Sign In Now!</Link></a></p>
                                         </div>
    
            </form>
    </div>
    
    </div>

    <Notification />
    
        </div>
    
    )
}

export default Register;