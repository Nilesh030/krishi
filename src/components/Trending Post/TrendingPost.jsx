import React from 'react'
import styles from "../.././pages/ResponsiveHomePageFrame.module.css";
const TrendingPost = () => {
  return (
    <div className={styles.trendingpostframe}>
    <div className={styles.trendingpostsdesktop}>
      <div className={styles.trendingpostssectionbox} />
      <div className={styles.trendingpostsheadingframe}>
        <button className={styles.trendingpostsheading}>
          Trending Posts
        </button>
      </div>
      <div className={styles.trendingpostscontentframe}>
        <button className={styles.post1}>
          <button className={styles.postscard1} />
          <img
            className={styles.posts1imgIcon}
            alt=""
            src="/posts1img@2x.png"
          />
          <div className={styles.postlike1}>
            <img className={styles.likeicon} alt="" src="/likeicon.svg" />
            <b className={styles.posts1like3count}>12</b>
          </div>
          <div className={styles.postdislike1}>
            <b className={styles.post1dislikecount}>12</b>
            <img
              className={styles.dislikeicon}
              alt=""
              src="/dislikeicon.svg"
            />
          </div>
          <b
            className={styles.posts1content}
          >{`Baker Tilly is an international, fully-service accounting and advisory firm that offers expertise in audit, tax, and management consulting. `}</b>
        </button>
        <button className={styles.post1}>
          <button className={styles.postscard1} />
          <img
            className={styles.posts1imgIcon}
            alt=""
            src="/posts1img@2x.png"
          />
          <div className={styles.postlike1}>
            <img className={styles.likeicon} alt="" src="/likeicon.svg" />
            <b className={styles.posts1like3count}>12</b>
          </div>
          <div className={styles.postdislike1}>
            <b className={styles.post1dislikecount}>12</b>
            <img
              className={styles.dislikeicon}
              alt=""
              src="/dislikeicon.svg"
            />
          </div>
          <b
            className={styles.posts2content}
          >{`Baker Tilly is an international, fully-service accounting and advisory firm that offers expertise in audit, tax, and management consulting. `}</b>
        </button>
      </div>
    </div>
    <div className={styles.trendingpostslaptop}>
      <div className={styles.trendingpostssectionbox1} />
      <button className={styles.trendingpostsheading1}>
        Trending Posts
      </button>
      <button className={styles.post3}>
        <div className={styles.postscard3} />
        <img
          className={styles.posts1imgIcon}
          alt=""
          src="/posts1img@2x.png"
        />
        <div className={styles.postlike3}>
          <img className={styles.likeicon} alt="" src="/likeicon.svg" />
          <b className={styles.posts1like3count}>12</b>
        </div>
        <div className={styles.postdislike3}>
          <b className={styles.post1dislikecount}>12</b>
          <img
            className={styles.dislikeicon}
            alt=""
            src="/dislikeicon.svg"
          />
        </div>
        <b
          className={styles.posts3content}
        >{`Baker Tilly is an international, fully-service accounting and advisory firm that offers expertise in audit, tax, and management consulting. `}</b>
      </button>
      <button className={styles.post21}>
        <button className={styles.postscard1} />
        <img
          className={styles.posts1imgIcon}
          alt=""
          src="/posts1img@2x.png"
        />
        <div className={styles.postlike1}>
          <img className={styles.likeicon} alt="" src="/likeicon.svg" />
          <b className={styles.posts1like3count}>12</b>
        </div>
        <div className={styles.postdislike1}>
          <b className={styles.post1dislikecount}>12</b>
          <img
            className={styles.dislikeicon}
            alt=""
            src="/dislikeicon.svg"
          />
        </div>
        <b
          className={styles.posts2content}
        >{`Baker Tilly is an international, fully-service accounting and advisory firm that offers expertise in audit, tax, and management consulting. `}</b>
      </button>
      <button className={styles.post11}>
        <div className={styles.postscard11} />
        <img
          className={styles.posts1imgIcon}
          alt=""
          src="/posts1img@2x.png"
        />
        <div className={styles.postlike1}>
          <img className={styles.likeicon} alt="" src="/likeicon.svg" />
          <b className={styles.posts1like3count}>12</b>
        </div>
        <div className={styles.postdislike1}>
          <b className={styles.post1dislikecount}>12</b>
          <img
            className={styles.dislikeicon}
            alt=""
            src="/dislikeicon.svg"
          />
        </div>
        <b
          className={styles.posts1content}
        >{`Baker Tilly is an international, fully-service accounting and advisory firm that offers expertise in audit, tax, and management consulting. `}</b>
      </button>
    </div>
    <div className={styles.trendingpoststablet}>
      <div className={styles.trendingpostssectionbox2} />
      <button className={styles.trendingpostsheading2}>
        Trending Posts
      </button>
      <button className={styles.post12}>
        <button className={styles.postscard1} />
        <img
          className={styles.posts1imgIcon}
          alt=""
          src="/posts1img@2x.png"
        />
        <div className={styles.postlike1}>
          <img className={styles.likeicon} alt="" src="/likeicon.svg" />
          <b className={styles.posts1like3count}>12</b>
        </div>
        <div className={styles.postdislike1}>
          <b className={styles.post1dislikecount}>12</b>
          <img
            className={styles.dislikeicon}
            alt=""
            src="/dislikeicon.svg"
          />
        </div>
        <b
          className={styles.posts1content}
        >{`Baker Tilly is an international, fully-service accounting and advisory firm that offers expertise in audit, tax, and management consulting. `}</b>
      </button>
    </div>
  </div>
  )
}

export default TrendingPost