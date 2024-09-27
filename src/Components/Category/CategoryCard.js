// import React from 'react',
import classes from './categorymodule.css'

function CategoryCard({ data }) {
  return (
      <div className={classes.catagory}>
          <a href=""> 
              <span>
                  <h2> (data.title) </h2>
              </span>
              <img src={data.imgLink} alt=""/>

              <p> show now</p>

          </a>
          
              
    </div>
  )
}

export default CategoryCard