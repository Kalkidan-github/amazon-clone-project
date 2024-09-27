import React from "react";
import Rating from '@mui/material/Rating'
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import classes from './Productmodule.css'

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;
  return (
    <div classeName={'${classes.cart__container}'}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3> {title} </h3>
        <div className={classes.rating}>
                  {/* {rating} */}
                  <Rating value={rating.rate} precision={0.1}/>
                  {/* {cout} */}
                  <smalle> {rating.count}</smalle>
        </div>
        <div>
          <CurrencyFormat amount={price}/>
        </div>
        <button className={classes.button}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
