import React from 'react';
import { data } from '../Data/GroceryData';
import styles from '../Style/ShowProducts.module.css';

const ShowProducts = () => {
  return (
    <div id={styles.gridBox}>
      {data.map((e) => {
        return (
          <div id={styles.card}>
            <img id={styles.image} src={e.image} />
            <div>
              <p>{e.name}</p>
              <label id={styles.price}>{e.price}</label>
              <label id={styles.offerPrice}> ₹{e.offerPrice}</label>
              {e.stockStatus ? (
                <p id={styles.blue}>In Stock: 56</p>
              ) : (
                <p id={styles.red}>Out of Stock</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowProducts;
