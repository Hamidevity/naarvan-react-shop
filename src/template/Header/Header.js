import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";
import { CartContext } from "../../context/CartContextProvider";

function Header() {
  const { state } = useContext(CartContext);

  return (
    <header className={styles.container}>
      <h1> Naarvan</h1>

      <button className={styles.header_button}>
        <BsSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="بنویس و پیداش کن رفیق . . . "
          className={styles.header_searchBar}
        />
      </button>

      <div className={styles.header_loginContainer}>
        <div className={styles.header_divLogin}>
          <Link to={"/"} className={styles.header_divLink}>
            <Link to="/signIn">
              <HiOutlineLogin className={styles.header_loginIcon} />
            </Link>
            <p>
              {" "}
              <span>
                <Link to="/signIn">ورود</Link>
              </span>{" "}
              |{" "}
              <span>
                <Link to="/signIn" className={styles.signIn}>
                  ثبت نام{" "}
                </Link>{" "}
              </span>
            </p>
          </Link>
        </div>
        <hr className={styles.hr} />
        <Link to={"/Cart"} className={styles.link_cartIcon}>
          <span className={styles.borderCounter}></span>
          <span className={styles.counter}>{state.itemsCounter}</span>
          <BsCart3 className={styles.cartIcon} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
