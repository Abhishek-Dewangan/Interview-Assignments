import React from 'react';
import {
  AiOutlineBell,
  AiOutlineMenu,
  AiOutlineQuestionCircle,
  AiOutlineSearch,
} from 'react-icons/ai';
import { BsChevronCompactDown, BsDot } from 'react-icons/bs';
import styles from '../Style/Navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <nav id={styles.navbar}>
        <div id={styles.left}>
          <AiOutlineMenu id={styles.css} size={20} />

          {/* Logo */}
          <img
            id={styles.logo}
            src='https://thumbs.dreamstime.com/z/initial-letter-sh-logotype-company-name-blue-circle-swoosh-design-vector-logo-business-identity-203854861.jpg'
          />
          <p id={styles.logoTitle}>Swastik Marketing</p>
        </div>

        {/* Search Box */}
        <div id={styles.inputBox}>
          <AiOutlineSearch size={25} />
          <input id={styles.searchArea} type={'search'} placeholder='Search' />
        </div>
        <div id={styles.right}>
          <div id={styles.connected}>
            <BsDot size={20} />
            <p>connected</p>
          </div>
          <AiOutlineQuestionCircle size={25} />
          <AiOutlineBell size={25} />
          <div>
            <div id={styles.name}>AD</div>
          </div>
          <BsChevronCompactDown />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
