import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token ,setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src="data:image/png;base64,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" alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>menu</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
            </ul>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
