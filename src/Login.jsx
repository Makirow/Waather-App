import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import './Loginvalidation';
import Validation from "./Loginvalidation";

function Login() {

    const [values, setValues] = useState(
        {
            Email: '',
            Password: ''
        }
    )

    const HandleSubmit =  (e) =>{
        e.preventDefault();
        setErrors(Validation(values));
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
                    <input type="email" id="regemail1" required autocomplete="off" name="Email" onChange={HandleInput}/>
                    <label>Email</label>
                </div> 
    
                <div className="input-boxes regpassword">
                    <span className="icon"><ion-icon  name="eye" ></ion-icon></span>
                    <input type="password" id="regpassword" required autocomplete="off" name="Password" onChange={HandleInput} />
                    <label> Password</label>   
                  
                </div>
    
                <div className="remeberforgot" > 
                                        
                <label><input type="checkbox" id="logcheckbox" /> Remember me</label>
                                        <a href="#" id="forgotPasswordLink"  > Forgot password?</a>
                                            
                                               
                                         </div>
                                         <button type="submit" class=" btn btn-primary submitBtn"><Link to={"/homepage"}>Sign in</Link></button>
                                         
                                         <div class="register-area">
                                     <p>Not yet a member ?<a href="#" class="register-link" > <Link to="/signup">Sign Up Now!</Link> </a></p>
                                         </div>
    
            </form>
    </div>
    
    </div>
    
        </div>
    
    )
}

export default Login;