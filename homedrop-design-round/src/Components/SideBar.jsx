import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BiCubeAlt } from 'react-icons/bi';
import { MdOutlineInventory2 } from 'react-icons/md';
import { RiShoppingCartFill } from 'react-icons/ri';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { IoIosPeople } from 'react-icons/io';
import styles from '../Style/SideBar.module.css';

const SideBar = () => {
  return (
    <div id={styles.body}>
      <div className={styles.sideBarOptions}>
        <IoIosPeople />
        <p>Overview</p>
      </div>
      <div className={styles.sideBarOptions}>
        <AiOutlineHome />
        <p>Sales</p>
      </div>
      <div className={styles.sideBarOptions}>
        <FiShoppingCart />
        <p>Purchase</p>
      </div>
      <div className={styles.sideBarOptions}>
        <BiCubeAlt />
        <p>Inventory</p>
      </div>
      <div className={styles.sideBarOptions}>
        <MdOutlineInventory2 />
        <p>Marketing</p>
      </div>
      <div className={styles.sideBarOptions}>
        <RiShoppingCartFill />
        <p>Analytics</p>
      </div>
      <div className={styles.sideBarOptions}>
        <TbBrandGoogleAnalytics />
        <p>Staff</p>
      </div>
    </div>
  );
};

export default SideBar;
