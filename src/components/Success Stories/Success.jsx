import React from 'react'
import styles from "../.././pages/ResponsiveHomePageFrame.module.css";
const Success = () => {
  return (
    <div className={styles.sucessstoryframe}>
    <div className={styles.successstorytabletgroup}>
      <div className={styles.successstoryframe}>
        <div className={styles.successstorytabletinteriorgrou}>
          <div className={styles.successstorybox} />
          <img
            className={styles.moverightarrowicon}
            alt=""
            src="/moverightarrowicon.svg"
          />
          <img
            className={styles.moveleftarrowicon}
            alt=""
            src="/moveleftarrowicon.svg"
          />
          <div className={styles.successstorygroup}>
            <div className={styles.successstoryheadingframe}>
              <button
                className={styles.successstoryheading}
              >{`Success Story `}</button>
            </div>
            <div className={styles.successstoryphotoandcontentfra}>
              <div className={styles.successstoryphotoframe}>
                <div className={styles.successstoryphotoelementsgroup}>
                  <div className={styles.successstoryphotodesignbox2} />
                  <div className={styles.successstoryphotodesignbox1} />
                  <img
                    className={styles.successstorypicIcon}
                    alt=""
                    src="/successstorypic@2x.png"
                  />
                </div>
              </div>
              <div className={styles.successstorycontentframe}>
                <b className={styles.successcontent}>
                  <ul className={styles.pmroCoderStartedChodingIn}>
                    <li className={styles.pmroCoder}>Pmro Coder.</li>
                    <li className={styles.pmroCoder}>
                      Started choding in April.
                    </li>
                    <li>Became Knight within 6 month.</li>
                  </ul>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.successstorydesktopframe}>
      <div className={styles.successstorydesktopelementsfra}>
        <div className={styles.successstorygroup1}>
          <div className={styles.successstorybox1} />
          <button
            className={styles.successstoryheading1}
          >{`Success Story `}</button>
          <div className={styles.photosuccessstory}>
            <div className={styles.successstoryphotodesignbox21} />
            <div className={styles.successstoryphotodesignbox11} />
            <img
              className={styles.successstorypicIcon1}
              alt=""
              src="/successstorypic1@2x.png"
            />
          </div>
          <img
            className={styles.moverightarrowicon1}
            alt=""
            src="/moverightarrowicon1.svg"
          />
          <b className={styles.successcontent1}>
            <ul className={styles.pmroCoderStartedCodingIn}>
              <li className={styles.pmroCoder}>Pmro Coder.</li>
              <li className={styles.pmroCoder}>
                Started choding in April.
              </li>
              <li>Became Knight within 6 month.</li>
            </ul>
          </b>
          <img
            className={styles.moveleftarrowicon1}
            alt=""
            src="/moveleftarrowicon1.svg"
          />
        </div>
      </div>
    </div>
    <div className={styles.successstorylaptop}>
      <div className={styles.successstorybox2} />
      <div className={styles.successstorysection} />
      <button
        className={styles.successstoryheading2}
      >{`Success Story `}</button>
      <div className={styles.photosuccessstory1}>
        <div className={styles.successstoryphotodesignbox22} />
        <div className={styles.successstoryphotodesignbox12} />
        <img
          className={styles.successstorypicIcon2}
          alt=""
          src="/successstorypic2@2x.png"
        />
      </div>
      <img
        className={styles.moverightarrowicon2}
        alt=""
        src="/moverightarrowicon2.svg"
      />
      <b className={styles.successcontent2}>
        <ul className={styles.pmroCoderStartedCodingIn}>
          <li className={styles.pmroCoder}>Pmro Coder.</li>
          <li className={styles.pmroCoder}>Started coding in April.</li>
          <li>Became Knight within 6 month.</li>
        </ul>
      </b>
      <img
        className={styles.moveleftarrowicon2}
        alt=""
        src="/moveleftarrowicon2.svg"
      />
    </div>
  </div>
  )
}

export default Success