import React from "react";
import styles from "./main-logo.module.scss";

const NEXRVideo: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* SVG Definition (Only for Masking) */}
            <svg width="0" height="0">
                <defs>
                    <clipPath id="textClip" clipPathUnits="userSpaceOnUse">
                        <path d="M48.7216 0.81818V59H38.0966L12.7841 22.3807H12.358V59H0.0568181V0.81818H10.8523L35.9659 37.4091H36.4773V0.81818H48.7216ZM58.8849 59V0.81818H98.0895V10.9602H71.1861V24.8239H96.0724V34.9659H71.1861V48.858H98.2031V59H58.8849ZM119.403 0.81818L131.136 20.6477H131.591L143.381 0.81818H157.273L139.517 29.9091L157.67 59H143.523L131.591 39.142H131.136L119.205 59H105.114L123.324 29.9091L105.455 0.81818H119.403ZM165.057 59V0.81818H188.011C192.405 0.81818 196.155 1.60417 199.261 3.17614C202.386 4.72917 204.763 6.93561 206.392 9.79545C208.04 12.6364 208.864 15.9792 208.864 19.8239C208.864 23.6875 208.03 27.0114 206.364 29.7955C204.697 32.5606 202.282 34.6818 199.119 36.1591C195.975 37.6364 192.169 38.375 187.699 38.375H172.33V28.4886H185.71C188.059 28.4886 190.009 28.1667 191.562 27.5227C193.116 26.8788 194.271 25.9129 195.028 24.625C195.805 23.3371 196.193 21.7367 196.193 19.8239C196.193 17.892 195.805 16.2633 195.028 14.9375C194.271 13.6117 193.106 12.608 191.534 11.9261C189.981 11.2254 188.021 10.875 185.653 10.875H177.358V59H165.057ZM196.477 32.5227L210.938 59H197.358L183.21 32.5227H196.477Z" />
                    </clipPath>
                </defs>
            </svg>

            <div className={styles.landingContent}>
                <div className={styles.videoContainer}>
                    <div className={styles.videoWrapper}>
                        {/* Video with Clip Path */}
                        <video
                            autoPlay
                            loop
                            muted
                            className={styles.backgroundVideo}
                            style={{ clipPath: "url(#textClip)", WebkitClipPath: "url(#textClip)" }}>
                            <source src="/vr-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className={styles.textContent}>
                    <div className={styles.newText}>WILL BE COMING SOON</div>
                </div>
            </div>
        </div>
    );
};

export default NEXRVideo;
