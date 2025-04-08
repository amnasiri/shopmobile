import React from 'react';
import './header.css';

function Header() {
  return (
    <div class="header">
      <div className="headerz">
        <img class="logo" src="/Logo.svg" alt="" srcset="" />
        <form>
             <input type="search" name="search" placeholder="Search.."/>
        </form>

        <div class="menu">
        <span><a href="">Home</a></span>
        <span><a href="">About</a></span>
        <span><a href="">Contact Us</a></span>
        <span><a href="">Blog</a></span>

            </div>
            <div class="m-b">
            <img  src="/Burger.svg" alt="" srcset="" />
            </div>


            <div class="icon">
                <img src="/Favorites.svg" alt="" srcset="" />
                <img src="/Cart.svg" alt="" srcset="" />
                <img src="/user.svg" alt="" srcset="" />
                <img class="m-b" src="/Burger.svg" alt="" srcset="" />

            
            </div>
            </div>
    </div>
  )
}

export default Header