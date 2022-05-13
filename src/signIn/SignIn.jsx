import React, {useState} from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import './SignIn.css'

const SignIn = () => {
    const navigate = useNavigate()

    const [user,setUser] = useState({})

const handleOnChange = (event) =>{
    const {name,value} = event.target
        setUser({...user,[name]:value})
}

const handleOnClick= () =>{
    axios.post('http://localhost:8080/app/user/signin',user)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}



  return (
    <>

        <div className='button'>
            <Button sx={{}} onClick={()=> navigate('/signup')} variant="contained">SIGN UP</Button>
        </div>
        <div className='form'>
            <h1>Login Form</h1>
            <div className='login'>
                
                
                    <input 
                        name='email' 
                        type='email' 
                        placeholder='ENTER YOUR EMAIL'
                        onChange={handleOnChange}
                    />
                
                
            </div>
            
            <div className='login'>
            
               
                
                    <input 
                        name='password' 
                        type='password' 
                        placeholder='ENTER YOUR PASSWORD'
                        onChange={handleOnChange}
                    />
                
            </div>
            

            <button onClick={handleOnClick} >Sign In</button>
        </div>
    </>
  )
}

export default SignIn