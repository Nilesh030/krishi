import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignInPage.module.css";

const SignInPage = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/responsivehomepageframe");
  }, [navigate]);

  const onVectorClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const onSkipForNowClick = useCallback(() => {
    navigate("/responsivehomepageframe");
  }, [navigate]);

  return (
    <div className={styles.signInPage}>
      <img
        className={styles.wp3519531GreenThemesBackgroIcon}
        alt=""
        src="/wp3519531greenthemesbackground-1@2x.png"
      />
      <div className={styles.signingroup}>
        <div className={styles.signingroupChild} />
        <div className={styles.signUp}>Sign Up</div>
        <div className={styles.signIn}>Sign In</div>
        <img className={styles.signingroupItem} alt="" src="/line-3.svg" />
        <div className={styles.signingroupInner} />
        <input className={styles.enterEmailphoneNo} type="text" placeholder="Enter Email/Phone No." required="" spellcheck="false" data-ms-editor="true" fdprocessedid="0yfsa5"></input>
        <input className={styles.enterPassword} type="text" placeholder="Enter Password" required="" spellcheck="false" data-ms-editor="true" fdprocessedid="0yfsa5"></input>
        <button
          className={styles.rectangleButton}
          onClick={onRectangleButtonClick}
        >
        </button>
        <div className={styles.logIn}>Log In</div>
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector2.svg"
          onClick={onVectorClick}
        />
        <div
          className={styles.skipForNow}
          onClick={onSkipForNowClick}
        >{`Skip For Now ->`}</div>
      </div>
    </div>
  );
};

export default SignInPage;
