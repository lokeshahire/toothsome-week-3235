import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/MainPage.module.css";

export default function MainPage() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "J.Crew: Clothes, Shoes & Accessories";
    if (window.pageYOffset > 300) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <div className={styles.mainParent}>
      <div className={styles.MainPageTop}>
        <Link
          to="/products/mens"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",

              backgroundImage: `url("https://raw.githubusercontent.com/lokeshahire/ImageGit/main/image.png")`,
              backgroundSize: "1600px 900px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p style={{ fontSize: 20, paddingTop: 200, paddingLeft: 300 }}>
              Introducing
            </p>
            <p
              style={{
                marginTop: 10,
                marginLeft: 160,
                fontSize: 90,
                fontWeight: "light",
                fontFamily: "freight-big-pro, FreightBig Pro,Times,serif",
              }}
            >
              ITALIAN <br />{" "}
              <i
                style={{
                  marginLeft: 110,
                  fontSize: 90,
                  fontFamily: "freight-big-pro, FreightBig Pro,Times,serif",
                }}
              >
                city wool
              </i>
            </p>
            <p
              style={{
                marginTop: 20,
                marginLeft: 210,

                fontSize: 20,
                color: "white",
              }}
            >
              Our soft yet structured take on suiting, <br /> in a luxe fabric
              from Prato, Italy.
            </p>
          </div>
        </Link>
      </div>
      <div className={styles.MainPage_SubTop}>
        <div className={styles.SubTop_1}>
          <Link
            to="/products/mens"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div
              style={{
                backgroundImage: `url("https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/2022sep_0823_hp_w_img1.jpg")`,
                backgroundSize: "700px 800px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p style={{ fontSize: 40, marginTop: "-100px" }}>
                New <i>fall </i>ARRIVALS
              </p>
              <p style={{ fontSize: 20, fontWeight: 400 }}>
                for your work/life style
              </p>
              <h3 style={{ textDecoration: "underline" }}>Shop Now</h3>
            </div>
          </Link>
        </div>
        <div className={styles.SubTop_2}>
          <Link to="/products/mens" style={{ textDecoration: "none" }}>
            <div
              style={{
                backgroundImage: `url("https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/2022sep_0823_hp_w_img2.jpg")`,
                backgroundSize: "700px 800px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p style={{ fontSize: 40, fontWeight: 400 }}>
                Meet <i>Louisa</i> , <br /> our latest lady jacket
              </p>

              <h4 style={{ textDecoration: "underline" }}>Shop now</h4>
            </div>
          </Link>
        </div>
        <div className={styles.SubTop_3}>
          <Link
            to="/products/mens"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                backgroundImage: `url("https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/2022sep_0823_hp_w_img3.jpg")`,
                backgroundSize: "700px 800px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 style={{ fontSize: 40, fontWeight: 600 }}>
                Fresh cashmere colors
              </h1>
              <h4 style={{ textDecoration: "none" }}>Find your fit</h4>
            </div>
          </Link>
        </div>
        <div className={styles.SubTop_4}>
          <Link
            to="/products/mens"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div
              style={{
                backgroundImage: `url("https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/2022sep_0823_hp_w_img4.jpg")`,
                backgroundSize: "700px 800px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p style={{ fontSize: 40 }}>Lightweight, luxe merino wool</p>

              <h4 style={{ textDecoration: "none" }}>Lighten up</h4>
            </div>
          </Link>
        </div>
        <div className={styles.SubTop_5}>
          <Link
            to="/products/mens"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                backgroundImage: `url("https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/2022sep_0823_hp_w_img5.jpg")`,
                backgroundSize: "700px 800px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p>Pant spotlight:</p>
              <h1 style={{ fontSize: 40 }}>The Kate straight-leg</h1>

              <h4 style={{ textDecoration: "none" }}>
                now in four-season stretch
              </h4>
            </div>
          </Link>
        </div>
        <div className={styles.SubTop_6}>
          <Link
            to="/products/mens"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                backgroundImage: `url("https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/2022sep_0823_hp_w_img6.jpg")`,
                backgroundSize: "700px 800px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p style={{ fontSize: 40 }}>
                Introducing the <br /> Anya scrunchie ballet
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.mainPage_navigation}>
        <div className={styles.navigationWrapper}>
          <div className={styles.navivationTitle}>Shop New Arrivals</div>
          <div className={styles.navigationBtnWrap}>
            <button
              className={styles.navigationBtn}
              onClick={() => navigate("/products/mens")}
            >
              Shop Women
            </button>
            <button
              className={styles.navigationBtn}
              onClick={() => navigate("/products/mens")}
            >
              Shop Men
            </button>
            <button
              className={styles.navigationBtn}
              onClick={() => navigate("/products/mens")}
            >
              Shop Boys
            </button>
            <button
              className={styles.navigationBtn}
              onClick={() => navigate("/products/mens")}
            >
              Shop Girls
            </button>
          </div>
        </div>
      </div>

      <div className={styles.mainMid}>
        <div className={styles.headlineHed}>
          <Link
            to="/products/mens"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img
                className={styles.headImg}
                src="https://www.jcrew.com/brand_creative/2022/202204-Apr/logo_jcrew_collective_20220315_blk.png?imformat=generic"
                alt=""
              />
              <div className={styles.headDes}>
                Meet our creative community
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.mainMidImg}>
          <div className={styles.mainMidImgWrap}>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/05-May2/2022may_0503_hp_w_img7.jpg"
                alt=""
              />
              <h2 className={styles.mainMidH1}>1 piece, 2 ways</h2>
              <h2 className={styles.mainMidH2}>
                How I wear my Astrid chinos with Jen Azoulay
              </h2>
              <div className={styles.mainSpan}>Copy these outfits</div>
            </Link>
          </div>
          <div className={styles.mainMidImgWrap}>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/05-May2/2022may_0503_hp_w_img8.jpg"
                alt=""
              />
              <h2 className={styles.mainMidH1}>What to wear next</h2>
              <h2 className={styles.mainMidH2}>
                The next Dress code with Beverly Nguyen
              </h2>
              <div className={styles.mainSpan}>Find her everyday picks</div>
            </Link>
          </div>
          <div className={styles.mainMidImgWrap}>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/05-May2/2022may_0503_hp_w_img9.jpg"
                alt=""
              />
              <h2 className={styles.mainMidH1}>The new arrivals edit</h2>
              <h2 className={styles.mainMidH2}>
                Instant classics with Alison Bornstein
              </h2>
              <div className={styles.mainSpan}>Shop her timeless style</div>
            </Link>
          </div>
        </div>

        <span
          style={{
            marginLeft: 161.6,
            fontSize: 54.4,
            fontWeight: "400",
          }}
        >
          More Stories
        </span>
        <div className={styles.mainMidBottom}>
          <div>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img11.jpg"
                alt=""
              />
              <h2 className={styles.innerHead}>The edit: sunny outlook</h2>
              <span className={styles.innerSpan}>Shop the color story</span>
            </Link>
          </div>
          <div>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img12.jpg"
                alt=""
              />
              <h2 className={styles.innerHead}>
                Most wanted the Candiz rope tote
              </h2>
              <span className={styles.innerSpan}>See why we're obsessed</span>
            </Link>
          </div>
          <div>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img13_new.jpg"
                alt=""
              />
              <h2 className={styles.innerHead}>
                The edit: block-print paradise
              </h2>
              <span className={styles.innerSpan}>Shop the print focus</span>
            </Link>
          </div>
          <div>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img14.jpg"
                alt=""
              />
              <h2 className={styles.innerHead}>
                Design Try-ons: The April Collection
              </h2>
              <span className={styles.innerSpan}>Shop the video</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.mainAboveFooter}>
        <h2 style={{ fontSize: 36, fontWeight: 400 }}>More you need to see</h2>
        <div className={styles.aboveFooterImgWrap}>
          <div className={styles.aboveFooterInner}>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://www.jcrew.com/s7-img-facade/BH290_BL8486_m?wid=416"
                alt=""
              />
              <div>
                <h5>Shop Women's Dresses & Jumpsuits</h5>
              </div>
            </Link>
          </div>
          <div className={styles.aboveFooterInner}>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://www.jcrew.com/s7-img-facade/AY671_BK0001?wid=416"
                alt=""
              />
              <div>
                <h5>Shop Women's Shirts & Tops</h5>
              </div>
            </Link>
          </div>
          <div className={styles.aboveFooterInner}>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://www.jcrew.com/s7-img-facade/BG652_SU8788_m?wid=416"
                alt=""
              />
              <div>
                <h5>Shop Women's Sweaters</h5>
              </div>
            </Link>
          </div>
          <div className={styles.aboveFooterInner}>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://www.jcrew.com/s7-img-facade/AW770_OR5787_m?wid=416"
                alt=""
              />
              <div>
                <h5>Shop Women's The Tees Shop</h5>
              </div>
            </Link>
          </div>
          <div className={styles.aboveFooterInner}>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://www.jcrew.com/s7-img-facade/BL371_BL8133_m?wid=416"
                alt=""
              />
              <div>
                <h5>Shop Women's Sweatshirts & Sweatpants</h5>
              </div>
            </Link>
          </div>
          <div className={styles.aboveFooterInner}>
            <Link
              to="/products/mens"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://www.jcrew.com/s7-img-facade/BC108_BL8133_m?wid=416"
                alt=""
              />
              <div>
                <h5>Shop Women's Swimwear</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
