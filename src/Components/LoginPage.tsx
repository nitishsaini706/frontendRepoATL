import React,{useState} from 'react'
import Login from './Login';

const LoginPage :React.FC = ()=> {
  const [showLogin,setShowLogin]=useState(false)
  const [showSignup,setShowSignup]=useState(false)
  return (
    <div className="App">
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#131319]">
      <div className="flex  text-white w-[80px] mb-[50px] ">
        <div>

        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="8,6 16,12 8,18" fill="currentColor" />
        </svg>
        </div>
        <div>
        
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
          <line x1="6" y1="18" x2="18" y2="6" stroke="currentColor" strokeWidth="2" />
        </svg>
        
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="2" />
        </svg>
        </div>
      </div>
      <Login setShowLogin={setShowLogin} setShowSignup={setShowSignup}/>
      </div>
      </div>
  )
}

export default LoginPage;
