import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import './Loginvalidation';
import { toast } from 'react-toastify';
import { auth } from "./Components/Firebase";
import Validation from "./Loginvalidation";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Notification from "./Components/notification/Notification";

function Login() {

    const [values, setValues] = useState(
        {
            Email: '',
            Password: ''
        }
    )
const newLocate = useNavigate();
    const [locate, setLocation] = useState(false)
    const [locate1, setLocation1] = useState(false)

    const SignUpUsingGoogle = () =>{

        const provider = new GoogleAuthProvider()

         signInWithPopup(auth, provider)

         .then((result) => {
                 const credential = GoogleAuthProvider.credentialFromResult(result);
                 const token = credential.accessToken; 
                 const user = result.user;
                 console.log(user)
                 setLocation(true)
         } ).catch((error) => {
               const errorCode = error.code;
               setLocation(false)
               const errorMessage = error.message
               toast.error(errorMessage)
         })
    }


    

    const [loading, setLoading] = useState(false)

    const HandleSubmit =  async(e) =>{
        setLoading(true)
           e.preventDefault()
        
           const formData = new FormData(e.target);
        
           const {email, password} = Object.fromEntries(formData);
        
           try {
            const message = "yess";
            setLocation(true);
             await signInWithEmailAndPassword(auth, email,password)
             toast.success("Sign was a  Success");
             toast.success("Please click again this time to enter");
            
            
           } catch (error) {
            setLocation(false);
               console.log(error);
               toast.error(error.message)
              
           }          

           finally{
            setLoading(false)
           }
           
        }

        const checking = () =>{
               if (locate) {
                     newLocate("/homepage")
               }
               else{
                newLocate("/login")
               }
        }
    const [Errors, setErrors] = useState({})

    const HandleInput = (e) =>{
        setValues(prevState => ({...prevState,[e.target.name]: [e.target.value]}))
       
    }

    return(
        <div className="wrapper Login-area"  >

        <div className="sub-wrapper">
    
    
    
    <div className="form-box">
        <h2>Sign In</h2>
        <div className={ `error-txt  ${Errors.Email || Errors.Password ? 'active' : undefined }`}>
               {Errors.Email}{Errors.Password}
       </div>
            <form action="#" onSubmit={HandleSubmit} >
                
           
    
                <div className="input-boxes regemail1 boxes ">
                    <span className="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="email" id="regemail1"  autocomplete="off" name="email" />
                    <label>Email</label>
                </div> 
    
                <div className="input-boxes regpassword">
                    <span className="icon"><ion-icon  name="eye" ></ion-icon></span>
                    <input type="password" id="regpassword" autocomplete="off" name="password" />
                    <label> Password</label>   
                  
                </div>
    
                <div className="remeberforgot" > 
                                        
                <label style={{color:'rgb(255, 255, 255, 0.5)'}} ><input type="checkbox" id="logcheckbox" /> Remember me</label>
                                        <a href="#" id="forgotPasswordLink"  > Forgot password?</a>
                                            
                                               
                                         </div>

                                         <div className="div" >

                                         <button type="submit" class=" btn btn-primary submitBtn " onClick={checking}><Link to={locate ? "/homepage" : undefined}>Sign In </Link> </button>
                                         <b className="opting" >Or</b>
                                         <button  class=" btn btn-primary submitBtn" onClick={SignUpUsingGoogle}> Sign in Using Google </button>

                                         </div>
                                         
                                         
                                         <div class="register-area">
                                     <p>Not yet a member ?<a href="#" class="register-link" > <Link to="/">Sign Up Now!</Link> </a></p>
                                         </div>
    
            </form>
    </div>
    
    </div>
    <Notification />
    
        </div>
    
    )
}

export default Login;