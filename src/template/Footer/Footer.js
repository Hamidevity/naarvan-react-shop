import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import {AiOutlineInstagram , AiFillLinkedin} from "react-icons/ai"
import {BsTelegram , BsGithub} from "react-icons/bs"
import {SiAparat} from "react-icons/si";
const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.footer_links}>
      <div>
        <h4>محصولات</h4>
        <ul>
          <li><Link to="/"></Link> پوشاک</li>
          <li><Link to="/"></Link>  خوراک</li>
          <li><Link to="/"></Link>لوازم جانبی موبایل</li>
          <li><Link to="/"></Link>لوازم جانبی کامپیوتر</li>
        </ul>
      </div>
      <div>
        <h4>  درباره ما </h4>
        <ul>
          <li><Link to="/"></Link> تاریخچه فروشگاه</li>
          <li><Link to="/"></Link>  آدرس فروشگاه</li>
          <li><Link to="/"></Link> شماره تماس</li>
          <li><Link to="/"></Link> تیکت پشتیبانی </li>
        </ul>
      </div>
      <div>
        <h4> بیشتر </h4>
        <ul>
          <li><Link to="/"></Link> مقاله ها </li>
          <li><Link to="/"></Link> تخفیفات</li>
          <li><Link to="/"></Link> جشنواره ها </li>
          <li><Link to="/"></Link> قرعه کشی ها </li>
          <li><Link to="/"></Link> برندگان دوره های قبل </li>
        </ul>
      </div>
      <div>
        <h4>راهنمای ثبت سفارش </h4>
        <ul>
          <li><Link to="/"></Link>نحوه ثبت سفارش </li>
          <li><Link to="/"></Link>رویه ارسال سفارش</li>
          <li><Link to="/"></Link> شیوه های پرداخت </li>
          <li><Link to="/"></Link>وبلاگ ما</li>
        </ul>
      </div>
    </div>
    <div className={styles.social_media}>
      <h3>با ما همراه باشید :</h3>
      <div className={styles.icons}>
       <AiOutlineInstagram/>
       <BsTelegram/>
       <AiFillLinkedin/>
       <SiAparat/>
       <BsGithub/>
      </div>
    </div>
  </footer>
  )
}

export default Footer
