import React from 'react'

export default function Navbar() {
  return (
    <div className='navbarContainer'>
        <div className="logo">
            {/* <span></span */}
        </div>
        <div className="actionsBtn">
          <div className="loginBtn">
              <span>Signin</span>
          </div>
          <div className="registerBtn">
              <span>Register</span>
          </div>
        </div>
    </div>
  )
}
