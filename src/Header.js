import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
  return (
    <div className="header">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo" alt="amazon logo" />

        <div className="header__search">
            <input className="header__searchInput" type="text" />            
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__navItems">
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

        <div className="header__optionBasket">
            <ShoppingCartIcon className="basketIcon" />
            <span className="basketCount header__optionLineTwo ">0</span>
        </div>
    </div>
  )
}

export default Header