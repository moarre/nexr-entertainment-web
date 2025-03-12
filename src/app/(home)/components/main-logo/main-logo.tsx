import React from 'react';
import { motion } from 'framer-motion';
import styles from './main-logo.module.scss';
// import Image from 'next/image';
// import image3 from '../../../../../public/3.svg';

const imageOneVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const imageTwoVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const imageThreeVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const imageFourVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const NEXRVideo: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Define SVG masks for each video element */}
      <svg width="0" height="0">
        <defs>
          <mask id="mask1">
            <image
              href="/1.svg"
              width="165"
              height="230"
              preserveAspectRatio="xMidYMid slice"
            />
          </mask>
          <mask id="mask2">
            <image
              href="/2.svg"
              width="276"
              height="236"
              preserveAspectRatio="xMidYMid slice"
            />
          </mask>
          <mask id="mask3">
            <image
              href="/3alt.svg"
              width="100"
              height="40"
              preserveAspectRatio="xMidYMid slice"
            />
          </mask>
          <mask id="mask5">
            <image
              href="/4.svg"
              width="345"
              height="125"
              preserveAspectRatio="xMidYMid slice"
            />
          </mask>
        </defs>
      </svg>

      <div className={styles.landingContent}>
        {/* Masked video for imageOne */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageOneVariants}
          transition={{ duration: 0.7, delay: 0 }}
          className={styles.imageOneWrapper}
        >
          <video
            autoPlay
            loop
            muted
            className={styles.imageOne} // same class as before
            style={{ mask: 'url(#mask1)', WebkitMask: 'url(#mask1)' }}
          >
            <source src="/vr-video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Masked video for imageTwo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageTwoVariants}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={styles.imageTwoWrapper}
        >
          <video
            autoPlay
            loop
            muted
            className={styles.imageTwo}
            style={{ mask: 'url(#mask2)', WebkitMask: 'url(#mask2)' }}
          >
            <source src="/vr-video-2.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Masked video for imageThree */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageThreeVariants}
          transition={{ duration: 0.7, delay: 0.6 }}
          className={styles.imageThreeWrapper}
        >
          <video
            autoPlay
            loop
            muted
            className={styles.imageThree}
            style={{ mask: 'url(#mask3)', WebkitMask: 'url(#mask3)' }}
          >
            <source src="/vr-video-2.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Masked video for imageFour */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageFourVariants}
          transition={{ duration: 0.7, delay: 1.2 }}
          className={styles.imageFourWrapper}
        >
          <video
            autoPlay
            loop
            muted
            className={styles.imageFour}
            style={{ mask: 'url(#mask5)', WebkitMask: 'url(#mask5)' }}
          >
            <source src="/vr-video-2.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </div>
  );
};

export default NEXRVideo;
