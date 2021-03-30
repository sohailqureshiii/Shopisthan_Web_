import React from 'react'
import Shopisthan__logo from '../img/shopisthan-logo.png'
import WishlistIcon from '../img/whislist.jpeg';
import HomeIcon from '../img/homeicon.jpg';
import ExploreIcon from '../img/storeexplore.jpg';
import WorldIcon from '../img/world-icon.svg';
import CartIcon from '../img/cart-icon.svg';
import ProfilePic from '../img/profile-pic.jpeg';
import Notification from '../img/notfi.png';


function navbar() {
    return(
        <div className="Navbar__container">
        <div className="Navbar__items">
            <div className="Navbar__logo">
                <img src={Shopisthan__logo} alt="Shopisthan Logo" />
            </div>
            <div className="Navbar__search">
                <div class=".Navbar__wrapper">
                   <div class=".Navbar__searchBar">
                        <input id="searchQueryInput"
                        type="text"
                        name="searchQueryInput"
                        placeholder="Search"
                       />
                        {/* <button id="searchQuerySubmit"
                        type="submit"
                        name="searchQuerySubmit">
                            <img alt="Search" src={SearchIcon}/>
                        </button> */}
                    </div>
                </div>
            </div>
            <div className="Navbar__menu">
                <div className="Navbar__menuItem">
                     <img  height='30' width='30' src={HomeIcon} alt="Home" />
                    <div>Home</div>
                </div>
                <div className="Navbar__menuItem">
                     <img  height='30' width='30'  src={ExploreIcon} alt="Explore" />
                    <div>Explore Stores</div>
                </div>
                <div className="Navbar__menuItem">
                     <img src={WishlistIcon}  height='30' width='30' alt="My Orders" />
                    <div>wishlist</div>
                </div>
                <div className="Navbar__menuItem">
                     <img font-weight= 'bold' src={Notification}  height='30' width='30' alt="" />
                    <div>Notification</div>
                </div>
            
          
            <div className="Navbar__createShopBtn" >
            <a  href="/createshop" style={{textDecoration :'none', color : 'white'}}>
            CreateShop
                </a>
            </div>
            <div className="Navbar__loginBtn" >
            <a  href="/createshop" style={{textDecoration :'none', color : 'white', textAlign: 'center'}}>
            Login
                </a>
            </div>
            <div className="Navbar__menuItem">
                     <img  height='30' width='30' src={HomeIcon} alt="Home" />
                    <div>Home</div>
                </div>
                <img className="Navbar__profilPic" src={ProfilePic} alt="Profile Pic"  />
            
            </div>
            </div>
    </div>
    )
}

export default navbar