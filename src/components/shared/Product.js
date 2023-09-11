import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { shorten, isInCart, quantityCount } from "../helper/function";
import { CartContext } from "../../context/CartContextProvider";
import { GoTrash } from "react-icons/go";
import styles from "./Product.module.css";
function Product({ productData }) {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.cardImage}
          src={productData.image}
          alt="."
          style={{ width: "150px" }}
        />
        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price}$</p>
        <div className={styles.linkContainer}>
          <Link to={`/products/${productData.id}`}>جزییات</Link>
          <div className={styles.buttonContainer}>
            {quantityCount(state, productData.id) > 1 && (
              <button
                className={styles.smallButton}
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: productData })
                }
              >
                -
              </button>
            )}
            {quantityCount(state, productData.id) === 1 && (
              <button
                className={styles.smallButton}
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
              >
                <GoTrash style={{ width: "20px" }} />
              </button>
            )}
            {quantityCount(state, productData.id) > 0 && (
              <span className={styles.counter}>
                {quantityCount(state, productData.id)}
              </span>
            )}
            {isInCart(state, productData.id) ? (
              <button
                className={styles.smallButton}
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: productData })
                }
              >
                +
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: productData })
                }
              >
                افزودن به سبد خرید
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
