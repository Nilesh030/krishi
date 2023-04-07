import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onJoinUsClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className={styles.landingPage}>
      <div className={styles.landingpagegroup}>
        <img
          className={styles.droneSprayingFertilizerVegeIcon}
          alt=""
          src="/dronesprayingfertilizervegetablegreenplantsagriculturetechnologyfarmautomation-1@2x.png"
        />
        <div className={styles.krishihal}>KrishiHal</div>
        <div className={styles.connectingGreensWith}>
          Connecting greens with Technology
        </div>
        <div className={styles.whatWeServeContainer}>
          <span>{`What We `}</span>
          <span className={styles.serve}>Serve</span>
        </div>
        <button className={styles.joinUs} onClick={onJoinUsClick}>
          <div className={styles.joinUs1}>Join Us</div>
          <img className={styles.joinUsChild} alt="" src="/group-2.svg" />
        </button>
        <div className={styles.calculator}>
          <img
            className={styles.carboncalculatorCheckIcon}
            alt=""
            src="/carboncalculatorcheck.svg"
          />
          <img
            className={styles.calculatorcircleIcon}
            alt=""
            src="/calculatorcircle.svg"
          />
          <div className={styles.fertilizerCalculator}>
            <p className={styles.fertilizer}>Fertilizer</p>
            <p className={styles.fertilizer}>Calculator</p>
          </div>
        </div>
        <div className={styles.protips}>
          <img
            className={styles.materialSymbolstipsAndUpdaIcon}
            alt=""
            src="/materialsymbolstipsandupdates.svg"
          />
          <img
            className={styles.protipscircleIcon}
            alt=""
            src="/calculatorcircle.svg"
          />
          <div className={styles.proTips}>Pro Tips</div>
        </div>
        <div className={styles.community}>
          <img
            className={styles.protipscircleIcon}
            alt=""
            src="/calculatorcircle.svg"
          />
          <img
            className={styles.iconoircommunity}
            alt=""
            src="/iconoircommunity.svg"
          />
          <div className={styles.community1}>Community</div>
        </div>
        <div className={styles.diagnosis}>
          <img
            className={styles.protipscircleIcon}
            alt=""
            src="/calculatorcircle.svg"
          />
          <img
            className={styles.wpfdoctorsBagIcon}
            alt=""
            src="/wpfdoctorsbag.svg"
          />
          <div className={styles.cropHealing}>Crop Healing</div>
        </div>
        <img
          className={styles.landingpagegroupChild}
          alt=""
          src="/arrow-1.svg"
        />
        <img
          className={styles.landingpagegroupItem}
          alt=""
          src="/arrow-2.svg"
        />
        <img
          className={styles.landingpagegroupInner}
          alt=""
          src="/arrow-3.svg"
        />
        <img className={styles.arrowIcon} alt="" src="/arrow-4.svg" />
      </div>
    </div>
  );
};

export default LandingPage;
