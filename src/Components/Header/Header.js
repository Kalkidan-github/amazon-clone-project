import React from 'react';
import classes from './Header.module.css';
import {Link} from 'react-router-dom'
import {SlLocationPin} from "react-icons/sl";
import {BsSearch} from "react-icons/bs";
import {BiCart} from "react-icons/bi";
import LowerHeader from './LowerHeader';

function Header() {
  return (
    <>
      {/* <section> */}
        <section>
          <div className={classes.header__container}>
            {/* {logo} */}
          <div className={classes.logo__container}>
           <Link to="/"> 
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo" />
              </Link>
              
              <div className={classes.delivery}>
                <span>
                  <SlLocationPin/>
                </span>
                <div>
                  <p> Dliver to </p>
                  <span> Ethiopia </span>
                </div>
              </div>
          </div>
          
            {/* search section */}

            <div className={classes.search}>
              <section name="" id="">
                <option value=""> All </option>
              </section>
              <input type="text" />
              <BsSearch size={25} />
            </div>
                  
            {/* other section */}
            <div className={classes.order__container}>
          <Link to="" className={classes.language}>  
                <img src="https://cdn.icon-icons.com/icons2/97/PNG/256/united_states_flags_flag_17080.png" alt=""/>
                      
                <section name="" id="">
                  <option value=""> EN </option>
              </section>
            </Link>
        
            <Link to="">
                <p> Sigh in </p>
              <span> Account & Lists </span>
            </Link>   
            
            {/* Order */}
            <Link to="/orders">
              <p> returns </p>
              <span> & Orders </span>
            </Link>
              
            {/* Cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              {/* icon */}
              <span>0</span>
            </Link>
          </div>
        </div>
        </section>
        <LowerHeader/>
         
    </>
   
  );
};


export default Header
