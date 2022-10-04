import React from 'react';
import styles from '../Style/MainBody.module.css';
import { FaBars } from 'react-icons/fa';
import { BsGrid } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import ShowProducts from './ShowProducts';

const MainBody = () => {
  return (
    <div id={styles.body}>
      <nav id={styles.heading}>
        <h3>Product</h3>
        <button id={styles.addProduct}>Add Product</button>
      </nav>
      <div id={styles.mainBox}>
        <nav id={styles.miniNav}>
          <div className={styles.side}>
            <lable>All</lable>
            <lable>Active</lable>
            <lable>Iactive</lable>
            <lable>Draft</lable>
          </div>
          <div className={styles.side}>
            <lable>Sort</lable>
            <select>
              <option>Date Created</option>
            </select>
            <FaBars size={18} />
            <BsGrid size={18} />
          </div>
        </nav>
        <hr />
        <nav id={styles.filterNavbar}>
          <div id={styles.inputBox}>
            <BiSearch size={18} />
            <input type={'text'} placeholder='Search' id={styles.searchBox} />
            <ImCross id={styles.cross} />
          </div>
          <select>
            <option>Type</option>
          </select>
          <select>
            <option>Category</option>
          </select>
          <select>
            <option>Brands</option>
          </select>
          <select>
            <option>Stock Type</option>
          </select>
          <select>
            <option>Suplier</option>
          </select>
          <select>
            <option>Tags</option>
          </select>
          <select>
            <option>Availability</option>
          </select>
        </nav>
        <ShowProducts />
      </div>
    </div>
  );
};

export default MainBody;
