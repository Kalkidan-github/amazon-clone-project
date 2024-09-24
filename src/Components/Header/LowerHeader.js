import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import classes from './Header.module.css'

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <IoMenuSharp />
          <p>Allo</p>
        </li>
        <li> Today's </li>
        <li> Costumer Services </li>
        <li> Registry </li>
        <li>Gift Cards </li>
        <li> Selle </li>
      </ul>
    </div>
  );
}

export default LowerHeader


