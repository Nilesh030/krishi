import { useCallback } from "react";
import "antd/dist/antd.min.css";
import styles from "./ResponsiveHomePageFrame.module.css";
import Weather from "../components/Weather/Weather";
import TrendingPost from "../components/Trending Post/TrendingPost";
import Success from "../components/Success Stories/Success";
import News from "../components/News/News";
import FertilizerCalculator from "../components/FertilizerCalculator/FertilizerCalculator";
import { useNavigate } from "react-router-dom";

const ResponsiveHomePageFrame = () => {
  const navigate = useNavigate();
  const onLoginSignUpClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className={styles.responsivehomepageframe}>
      <div className={styles.responsivehomepagegroup}>
        <div className={styles.footer} />
        <TrendingPost/>
      <Success/>
      <News/>
        <img
          className={styles.backgroundimgIcon}
          alt=""
          src="/backgroundimg@2x.png"
        />
        <div className={styles.homescreenmaincomponentsframe}>
          <div className={styles.homescreenmaincomponentsinside}>
            <FertilizerCalculator/>
            <Weather/> 
           
        </div>
        
        </div>
        <div className={styles.navbar}>
          <div className={styles.navbarframe}>
            <button className={styles.krishihallogo} />
            <div className={styles.navbarcomponentsframe}>
              <button className={styles.community}>Community</button>
              <button className={styles.news}>News</button>
              <button className={styles.howItsWork}>How it’s work</button>
              <button className={styles.services}>Services</button>
              <button className={styles.contactUs}>Contact Us</button>
              <div className={styles.search}>
                <div className={styles.searchbox} />
                <button className={styles.searchicon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </button>
                <div className={styles.searchunderline} />
                <input
                  className={styles.search1}
                  type="text"
                  placeholder="Search"
                  required
                />
              </div>
              <button
                className={styles.loginsignup}
                onClick={onLoginSignUpClick}
              >
                <div className={styles.loginsignup1}>Login/SignUp</div>
                <div className={styles.loginbox} />
              </button>
            </div>
            <button className={styles.navbarhumbargicon}>
              <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            </button>
          </div>
        </div>
              </div>
            
    </div>
  )
};

export default ResponsiveHomePageFrame;
