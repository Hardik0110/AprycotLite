import React, { useState , useEffect} from 'react'
import { FaGoogle, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import login from '/src/assets/Login/login.png'
import logo from '/src/assets/MainLogo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotated(prev => ! prev)
    },3000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
  }

  return (
    <div className='min-h-screen flex justify-between items-center bg-[#FFF6D8]'>
      <div className='w-1/2 flex flex-col items-center'>
        <img src={logo} alt="logo" className='w-48 h-22 mb-8' />
        <h1 className='text-4xl font-bold mb-8'>Sign Up</h1>
        
        <form className='space-y-6 w-[400px]' onSubmit={handleSubmit}>
          <p className='text-gray-500 text-center mb-6'>Sign in to stay connected</p>
          <div>
            <label className='ml-4 text-gray-500 mb-4'>Email</label>
            <input 
              type="email" 
              placeholder="Email Address"
              className='w-full px-4 py-3 rounded-full bg-white border-2 border-orange-500 focus:outline-none focus:border-orange-600'
            />
          </div>
          <div>
            <label className='ml-4 text-gray-500'>Password</label>
            <input 
              type="password" 
              placeholder="Password"
              className='w-full px-4 py-3 rounded-full bg-white border-2 border-orange-500 focus:outline-none focus:border-orange-600'
            />
          </div>
          
          <div className='flex items-center'>
            <input 
              type="checkbox" 
              id="remember" 
              className='w-4 h-4 rounded-lg border-orange-500'
            />
            <label htmlFor="remember" className='ml-2 text-gray-600'>Remember me</label>
          </div>

          <button 
            type="submit"
            className='ml-40 px-8 rounded-full bg-orange-500 text-white py-3 font-semibold hover:bg-orange-600 transition-colors duration-300'
          >
            Sign In
          </button>
          <p className='ml-20 text-gray-600'>- Or Sign in with other accounts</p>
          <div className='flex justify-center space-x-6 mt-8'>
            <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow'>
              <FaGoogle className='text-orange-500' />
            </button>
            <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow'>
              <FaFacebookF className='text-orange-500' />
            </button>
            <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow'>
              <FaInstagram className='text-orange-500' />
            </button>
            <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow'>
              <FaLinkedinIn className='text-orange-500' />
            </button>
          </div>
        </form>
      </div>

      <div className='w-1/2'>
        <img 
          src={login} 
          alt="login" 
          className='object-contain w-[600px] h-[500px] transition-all duration-300 ease-in-out'
          style={{ transform: isRotated ? 'rotate(90deg)' : 'rotate(30deg)' }}
        />
      </div>
    </div>
  )
}

export default Login