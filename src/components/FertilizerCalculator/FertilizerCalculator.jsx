import React from 'react'
import styles from "../.././pages/ResponsiveHomePageFrame.module.css";
const FertilizerCalculator = () => {
  return (
    <div className={styles.crophealandcalculatorframe}>
              <div className={styles.crophealer}>
                <img
                  className={styles.crophealingboxIcon}
                  alt=""
                  src="/crophealingbox.svg"
                />
                <div className={styles.crophealingheading}>Crop Healing</div>
                <button className={styles.uploadbutton}>
                  <div className={styles.uploadbuttontext}>
                    Upload
                  </div>
                </button>
                <div className={styles.uploadpicture}>
                  <div className={styles.uploadpicturebox} />
                  <img
                    className={styles.uploadpicturecameraicon}
                    alt=""
                    src="/uploadpicturecameraicon@2x.png"
                  />
                  <div className={styles.uploadpicturetext}>
                    Upload a Picture
                  </div>
                </div>
                <div className={styles.seediagnosis}>
                  <div className={styles.uploadpicturebox} />
                  <img
                    className={styles.seediagnosissymbolIcon}
                    alt=""
                    src="/seediagnosissymbol.svg"
                  />
                  <div className={styles.seediagnosistext}>See Diagnosis</div>
                </div>
                <img
                  className={styles.crophealingarrowIcon}
                  alt=""
                  src="/crophealingarrow.svg"
                />
              </div>
              <div className={styles.fertilizercalculator}>
                <div className={styles.fertilizercalculatorbox} />
                <div className={styles.fertilizercalculatorheading}>
                  Fertilizer Calculator
                </div>
                <button className={styles.fertilizercalculatorcheck}>
                  <button className={styles.checkbox} />
                  <b className={styles.checktext}>Check</b>
                </button>
                <div className={styles.cropselector}>
                  <img
                    className={styles.selectcropdownarrowIcon}
                    alt=""
                    src="/selectcropdownarrow.svg"
                  />
                  <input
                    className={styles.selectcroptext}
                    type="text"
                    placeholder="Select Crop"
                    required
                  />
                </div>
              </div>
            </div>
  )
}

export default FertilizerCalculator