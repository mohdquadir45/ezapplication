import React from 'react'
import './navbar.css';
const Navbar = () => {
  return (
    <div className='navbar__container'>
        <img src="https://media.licdn.com/dms/image/C560BAQGM74Ib1l-ubw/company-logo_100_100/0/1626978272204?e=1681344000&v=beta&t=T9qFxcbx2PzQOleGtITzJi956udvyCXRXesBdkw7lj4" width={"50px"} alt="logo"/>
        <div className='right-side'>
        <span>Hi, Abhishake</span>
        <img src="/assets/person/1.jpeg" alt="" className='nav__image'/>
        </div>
    </div>
  )
}

export default Navbar
