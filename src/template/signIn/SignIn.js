import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Naarvan Shop</h1>
        <input type="text" placeholder="شماره تلفن خود را وارد کنید" required />
        <input type="password" placeholder="رمز خود را وارد کنید" required />
        <button type="submit"> ورود</button>
        <p>
          آیا هنوز ثبت نام نکردید؟؟
          <Link to="/signIn" className={styles.link}>
            {" "}
            ثبت نام
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
