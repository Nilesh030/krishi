import { useCallback } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
//import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/responsivehomepageframe");
  }, [navigate]);

  const onIcbaselineToggleOffClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  const onSkipForNowClick = useCallback(() => {
    navigate("/responsivehomepageframe");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signupgroup}>
        <div className={styles.signupgroupChild} />
        <div className={styles.signupgroupItem} />
        <div className={styles.signUp}>Sign Up</div>
        <div className={styles.signIn}>Sign In</div>
        <div className={styles.signupgroupInner} />
        <img className={styles.lineIcon} alt="" src="/line-31.svg" />
        <div className={styles.lineDiv} />
        
        <input className={styles.enterEmailphoneNo} type="text" placeholder="Enter Email/Phone No." required="" spellcheck="false" data-ms-editor="true" fdprocessedid="0yfsa5"></input>
        <input className={styles.enterYourName} type="text" placeholder="Enter Your Name" required="" spellcheck="false" data-ms-editor="true" fdprocessedid="0yfsa5"></input>
        <input className={styles.enterPassword} type="text" placeholder="Enter Password" required="" spellcheck="false" data-ms-editor="true" fdprocessedid="0yfsa5"></input>
        <input className={styles.reenterPassword} type="text" placeholder="Reenter Password" required="" spellcheck="false" data-ms-editor="true" fdprocessedid="0yfsa5"></input>
        <button className={styles.rectangleButton} onClick={onRectangleButtonClick}>
        </button>
        <div className={styles.register}>Register</div>
        <img
          className={styles.icbaselineToggleOffIcon}
          alt=""
          src="/icbaselinetoggleoff.svg"
          onClick={onIcbaselineToggleOffClick}
        />
        <div
          className={styles.skipForNow}
          onClick={onSkipForNowClick}
        >{`Skip For Now ->`}</div>
      </div>
    </div>
  );
};

export default SignUpPage;
