import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
        
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo" />
        <div className="header__search">
            <input className="header__search__input" type="text" />
            
        </div>
        <div className="navItems">
            <div className="header__options">
                <span className="header__optionLineOne">Hello</span>
                <span className="header__optionLineTwo">Sign In</span>
            </div>
            <div className="header__options">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            <div className="header__options">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
        </div>
    </div>
  )
}

export default Header