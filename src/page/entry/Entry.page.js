import React , {useState} from "react"
import { Card } from "react-bootstrap";
import { Login } from "../../components/login/Login.com";
import { ResetPassword } from "../../components/password-reset/PasswordReset.com";
import './entry.style.css'


export const Entry = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [formLoad, setFormLoad] = useState('login') 
 
   const handleOnChange = e => {
    const {name, value} = e.target;
    switch(name){
        case 'email':
          setEmail(value)
          break;
          case 'password':
            setPassword(value)
            break;  
         default: 
         break; 

    }
   }

   const handleOnSubmit = e =>{
    e.preventDefault()

    if(!email || !password){
       return  alert("Fill up all the form filed...")
    }

    // future
    console.log(email, password)
   }

   const handleOnResetSubmit = e =>{
    e.preventDefault()

    if(!email){
       return  alert("Fill up  the email")
    }

    // future
    console.log(email)
   }

   const formSwitcher = formType =>{
    setFormLoad(formType)
   }

    return(
        <div className="entry-page bg-info "> 
   <Card className="form-box">
    {formLoad === 'login'&& 
    <Login
    handleOnChange = {handleOnChange}
    email= {email}
    pass = {password}
    handleOnSubmit = {handleOnSubmit} 
    formSwitcher ={formSwitcher}
    />
    }

{/* Password Reset */}
{formLoad ==='reset' && 
<ResetPassword
    handleOnChange = {handleOnChange}
    email= {email}
    handleOnResetSubmit = {handleOnResetSubmit} 
    formSwitcher ={formSwitcher}
    />
}
   </Card>
        
        </div>
    )
}