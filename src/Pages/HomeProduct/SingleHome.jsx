import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SliderBox from "../../components/SliderBox";
import {
  change_variant_color,
  change_variant_size,
  get_single_product,
  update_cart_items,
  update_quantity,
} from "../../features/Home/HomeSlice";
import styles from "./SingleHome.module.css";
import { v4 as uuidv4 } from "uuid";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const SingleHome = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentVariant, setCurrentVariant] = useState({});
  const [rupee, setRupee] = useState(0);
  const [quantity, setQuantity] = useState([]);
  const [vID, setVID] = useState(0);
  const [q, setQ] = useState(0);
  const [showAcc, setShowAcc] = useState(false);

  const dispatch = useDispatch();
  const { singleProduct, products_data } = useSelector((state) => state.home);

  useEffect(() => {
    let p_data = [...products_data];
    if (p_data.length > 0) {
      let sProduct = p_data.filter((item) => {
        if (item.id == id) {
          return item;
        }
      });
      console.log(sProduct);
      setCurrentProduct(sProduct[0]);

      let filterCurrentVariant = sProduct[0].variant.filter((el) => {
        return el.status && el;
      });
      setCurrentVariant({ ...filterCurrentVariant[0] });

      const handleIndianRupees = () => {
        let x = sProduct[0].price;
        x = x.toString();
        let lastThree = x.substring(x.length - 3);
        let otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers !== "") lastThree = "," + lastThree;
        let res =
          otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        setRupee(res);
      };
      handleIndianRupees();
      let arr = [];
      for (let i = 0; i < filterCurrentVariant[0].quantity; i++) {
        arr.push({
          id: uuidv4(),
          value: i + 1,
        });
      }
      setQuantity([...arr]);
      setVID(filterCurrentVariant[0].id);
      // console.log("hi", id);
    }
  }, [id, products_data]);

  const handleCart = () => {
    // let cartItem = { ...item };
    // cartItem.variant.map((el) => {
    //   if (el.status) {
    //     return (el.cartQuantity = q);
    //   }
    // });
    console.log(q);
    dispatch(
      update_cart_items({
        id: currentProduct.id,
        quantity: Number(q),
        item: currentProduct,
        variantID: vID,
      })
    );
    dispatch(
      update_quantity({
        id: currentProduct.id,
        variantID: vID,
        quantity: q,
      })
    );
  };

  const handleChangeColor = (variantID) => {
    // dispatch(handleChangeVariantColor(changeData));
    dispatch(
      change_variant_color({
        id: currentProduct.id,
        variantID,
      })
    );
  };
  const handleChangeSize = (id) => {
    dispatch(
      change_variant_size({
        id: currentProduct.id,
        variantID: id,
      })
    );
  };
  return (
    <>
      {currentProduct.id && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.left}>
              <SliderBox
                images={currentVariant.images ? currentVariant.images : ""}
              />
            </div>
            <div className={styles.right}>
              <div className={styles.detailsWrap}>
                <div className={styles.trending}>
                  <p>
                    {currentProduct.Trending === "best_seller"
                      ? "Best Seller"
                      : "Top Rated"}
                  </p>
                </div>
                <div className={styles.title}>
                  <p>{currentProduct.title}</p>
                </div>
                <div className={styles.price}>
                  <p>INR {rupee}</p>
                </div>
                <div className={styles.color}>
                  <p>
                    <span>Color : </span>
                    {currentVariant.color}
                  </p>
                </div>
                <div className={styles.small_price}>
                  <p>INR {rupee}</p>
                </div>
                <div className={styles.colors}>
                  {currentProduct?.variant.map((el) => {
                    return (
                      <div
                        key={el.id}
                        onClick={() => handleChangeColor(el.id)}
                        className={`${styles.dummy} ${
                          el.status && styles.active_color_box
                        }`}
                      >
                        <div className={`${styles.color_box}`}>
                          <img src={el.thumb} alt="" />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.sizes}>
                  {currentProduct.sizes.map((el) => {
                    return (
                      <div
                        onClick={() => handleChangeSize(el.id)}
                        key={el.id}
                        className={`${styles.size} ${
                          el.status && styles.active_size
                        } `}
                      >
                        <p>{el.value}</p>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.quantity}>
                  <label>
                    Quantity:<span> </span>
                    <select
                      disabled={quantity.length > 0 ? false : true}
                      onChange={(e) => {
                        setQ(e.target.value);
                      }}
                      name="quantity"
                    >
                      {quantity.length > 0 ? (
                        quantity.map((q) => {
                          return (
                            <option value={q.value} key={q.id}>
                              {q.value}
                            </option>
                          );
                        })
                      ) : (
                        <option value="Not Available">Not Available</option>
                      )}
                    </select>
                  </label>
                </div>
                <div className={styles.product_details}>
                  <div
                    className={styles.title_bar}
                    onClick={() => setShowAcc(!showAcc)}
                  >
                    <div className={styles.title_left}>
                      <p>Product Details</p>
                    </div>
                    <div className={styles.title_right}>
                      {showAcc ? <RemoveIcon /> : <AddIcon />}
                    </div>
                  </div>
                  {showAcc && (
                    <div className={styles.dropdown}>
                      <p>{currentProduct.desc}</p>
                    </div>
                  )}
                </div>
                <div className={styles.add_to_cart}>
                  <button
                    onClick={() =>
                      quantity.length > 0 ? handleCart() : () => {}
                    }
                    disabled={quantity.length > 0 ? false : true}
                  >
                    {quantity.length > 0 ? "ADD TO BAG" : "UNAVAILABLE"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleHome;
