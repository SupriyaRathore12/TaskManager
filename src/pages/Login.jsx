import React, { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import Users from './Users';
import { useNavigate } from 'react-router-dom';
import Textbox from '../components/TextBox';
import Button from '../components/Button';


const Login = () => {
  const user=""
  const {register,handleSubmit,formState:{errors}}=useForm();
  const Navigate = useNavigate()

  const submitHandler = async (data)=>{
    console.log("submit")
  }

useEffect(()=>{
  user && Navigate('/dashboard')
},[user])

  return (
    <div className='w-full p-4 min-h-screen flex items-center justify-center sm:gap-y-5 flex-col lg:flex-row bg-[#f3f4f6]'>
    <div className='w-full md:w-full flex md:gap-20 gap-5  flex-col md:flex-row items-center justify-center'>
      {/* left side */}
      <div className='h-full w-full md:w-1/3 lg:w-1/3 flex flex-col items-center justify-center'>
        <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-5 2xl:-mt-20 md:p-2 md:w-[50rem]'>
          <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-400'>
            Manage all your task in one place!
          </span>
          <p className='flex flex-col gap-0 md:gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-black text-center text-blue-700 w-full '>
            <span>Cloud-Based</span>
            <span>Task Manager</span>
        
          </p>
        </div>
        <div className="floating-sk">
        
      </div>
      </div> 
     

      {/**right sidebar */}  
      <div className="w-full md:w-1/3 md:-1 flex flex-col justify-center md:flex-row items-center  ">
       <form onSubmit={handleSubmit(submitHandler)}className='form-container sm:m-5 w-full bg-white lg:w-[56rem] md:w-[48rem] sm:w-[32rem] w-full  gap-y-8 xl:gap-y-2 p-5  shadow-[0_35px_35px_rgba(4,4,3,0.25)] ' >

       <div className=''>
              <p className='text-blue-600 text-3xl font-bold text-center '>
                Welcome back!
              </p>
              <p className='text-center text-base text-gray-700 '>
                Keep all your credential safge.
              </p>
            </div>

       
            <div className='flex flex-col p-8  gap-y-5 '>
              <Textbox

                placeholder='email@example.com'
                type='email'
                name='email'
                label='Email Address'
                className='w-full rounded-full'
                register={register("email", {
                  required: "Email Address is required!",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder='your password'
                type='password'
                name='password'
                label='Password'
                className='w-full rounded-full'
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password.message : ""}
              />

               <span className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>
                Forget Password?
              </span> 

               <Button
                type='submit'
                label='Submit'
                className='w-full h-10 bg-blue-700 text-white rounded-full'
              />
            </div> 
       
       </form>
      
      </div> 
      
    </div>
  </div>
  )
}

export default Login
