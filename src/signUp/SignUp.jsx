import React, {useState} from 'react'
import axios from 'axios'
import './SignUp.css'
const SignUp = () => {
  
    
    const [user,setUser] = useState({})

    const handleOnChange = (event) =>{
        const {name,value} = event.target
        setUser({...user,[name]:value})
        // console.log(user)
    }

    const handleOnClick= () =>{
        axios.post('http://localhost:8080/app/user/register',user)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        // setUser(user)
        // console.log(user)
    }



  return (
    <>
        <div className='form'>
            <h1>SignUp Form</h1>

            <div className='signup'>
                    <input 
                        name='name' 
                        type='text' 
                        placeholder='Enter your Name'
                        onChange={handleOnChange}
                    />
            </div>
            
            <div className='signup'>
                <input 
                    name='email' 
                    type='text' 
                    placeholder='Enter your Email'
                    onChange={handleOnChange}
                />
            </div>
            
            <div className='signup'>
                <input 
                    name='address' 
                    type='text' 
                    placeholder='Enter your Address'
                    onChange={handleOnChange}
                />
            </div>
            
            
            <div className='signup'>
                <input 
                    name='password'
                    type='password'
                    placeholder='Enter your Password'
                    onChange={handleOnChange}
                />
            </div>
            

            <div className='signup'>
                <input 
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                    onChange={handleOnChange}
                />

            </div>
           
            <button onClick={handleOnClick} >Sign Up</button>
        </div>
    </>
  )
   
}

export default SignUp