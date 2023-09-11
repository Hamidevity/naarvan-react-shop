import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import Cart from "../../components/shared/Cart";

// Context
import { CartContext } from "../../context/CartContextProvider";
// styles
import styles from "./shop.module.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>مجموع اجناس : </span> {state.itemsCounter}
          </p>
          <p>
            <span>مجموع صورت حساب پرداختی:</span> {state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
                پرداخت و نهایی کردن سفارش
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              ثبت سفارش جدید
            </button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div className={styles.complete}>
          <h3>  پرداخت موفقفیت آمیز بود</h3>
          <Link to="/"> خرید بیشتر</Link>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div className={styles.complete}>
          <h3> خرید دیگه ای داری ؟؟</h3>
          <Link to="/"> فروشگاه </Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
