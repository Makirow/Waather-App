function Validation(Values) {
   

    let Error = {}
    const emailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    
    
    if (Values.Email === " " && Values.Password === " " && Values.Name === " ") {
         Error.Email = "Please  fill in the forms";
    }
    else if(!emailPattern.test(Values.Email))
        {
             Error.Email = "Sorry, incorrect email";
        }
       
        else{
            Error.Email = "";
            Error.Password = "";
        }


        

        return Error;
}

export default Validation;