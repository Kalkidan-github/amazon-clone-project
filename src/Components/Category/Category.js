import React from 'react'
import {categoryInfos} from './CategoryFullinfos'
import CategoryCard from './CategoryCard'
import classes from './categorymodule.css'


function category() {
  return (
    <>
      <section className={classes.category__container}>
        {categoryInfos.map((infos) => {
          <CategoryCard data={infos} />;
        })}
      </section>
    </>
  );
}

export default category