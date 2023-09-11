import { Link } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Naarvan Shop</h1>
        <input type="text" placeholder="شماره تلفن خود را وارد کنید" required />
        <input type="password" placeholder="رمز خود را وارد کنید" required />
        <input type="password" placeholder="تکرار رمز عبور" required />
        <button type="submit"> ثبت نام</button>
        <p>
          آیا قبلا ثبت نام کرده اید؟؟{" "}
          <Link to="/signIn" className={styles.link}>
            {" "}
            ورود
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
