import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../redux/slices/authSlice';  // ✅ Redux Action Import
import Textbox from '../components/TextBox';
import Button from '../components/Button';

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // ✅ Form Submit Handler (Redux + LocalStorage me User Save Karna)
  const submitHandler = async (data) => {
    console.log("Form Submitted:", data);

    // ✅ Fake User Data (Aage Backend se Replace Hoga)
    const userData = {
      id: Date.now(),
      name: "Demo User",
      email: data.email,
    };

    // ✅ Redux me user store karo
    dispatch(setCredentials(userData));

    // ✅ Navigate to Dashboard
    navigate("/dashboard");
  };

  console.log("Redux User =", user);

  // ✅ Agar User Logged In Hai Toh Dashboard Pe Redirect Karna
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className='w-full p-4 min-h-screen flex items-center justify-center sm:gap-y-5 flex-col lg:flex-row bg-[#f3f4f6]'>
      <div className='w-full md:w-full flex md:gap-20 gap-5 flex-col md:flex-row items-center justify-center'>

        {/* Left Side */}
        <div className='h-full w-full md:w-1/3 lg:w-1/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg flex flex-col items-center justify-center gap-5'>
            <span className='flex gap-1 py-1 px-3 border rounded-full text-sm text-gray-400'>
              Manage all your tasks in one place!
            </span>
            <p className='text-4xl sm:text-5xl md:text-6xl font-black text-center text-blue-700'>
              Cloud-Based Task Manager
            </p>
          </div>
        </div>

        {/* Right Side (Login Form) */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit(submitHandler)} className='bg-white  w-full rounded-xl  p-5 shadow-lg'>
            <div className='text-center'>
              <p className='text-blue-600 text-3xl font-bold'>Welcome back!</p>
              <p className='text-gray-700'>Keep all your credentials safe.</p>
            </div>

            <div className='flex flex-col p-8 gap-y-5'>
              <Textbox
                placeholder='email@example.com'
                type='email'
                label='Email Address'
                register={register("email", { required: "Email Address is required!" })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder='your password'
                type='password'
                label='Password'
                register={register("password", { required: "Password is required!" })}
                error={errors.password ? errors.password.message : ""}
              />

              <span className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>
                Forget Password?
              </span>

              <Button type='submit' label='Login' className='w-full h-10 bg-blue-700 text-white rounded-full' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
