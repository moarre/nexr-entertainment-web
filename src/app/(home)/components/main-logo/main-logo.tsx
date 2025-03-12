import React from 'react';
import { motion } from 'framer-motion';
import styles from './main-logo.module.scss';
import Image from 'next/image';
import image1 from '../../../../../public/1.svg';
import image2 from '../../../../../public/2.svg';
import image3 from '../../../../../public/3.svg';
import image4 from '../../../../../public/4.svg';

// Define different variants for each direction
const imageOneVariants = {
  hidden: { opacity: 0, x: 100 },  // from right
  visible: { opacity: 1, x: 0 },
};

const imageTwoVariants = {
  hidden: { opacity: 0, x: -100 },  // from left
  visible: { opacity: 1, x: 0 },
};

const imageThreeVariants = {
  hidden: { opacity: 0, y: -100 },  // from top
  visible: { opacity: 1, y: 0 },
};

const imageFourVariants = {
  hidden: { opacity: 0, y: 100 },  // from bottom
  visible: { opacity: 1, y: 0 },
};

const NEXRVideo: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.landingContent}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageOneVariants}
          transition={{ duration: 0.7, delay: 0 }}
          className={styles.imageOneWrapper}
        >
          <Image className={styles.imageOne} src={image1} alt="image1" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageTwoVariants}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={styles.imageTwoWrapper}
        >
          <Image className={styles.imageTwo} src={image2} alt="image2" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageThreeVariants}
          transition={{ duration: 0.7, delay: 0.6 }}
          className={styles.imageThreeWrapper}
        >
          <Image className={styles.imageThree} src={image3} alt="image3" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageThreeVariants}
          transition={{ duration: 0.7, delay: 0.9 }}
          className={styles.imageThreeAltWrapper}
        >
          <Image className={styles.imageThreeAlt} src={image3} alt="image3alt" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageFourVariants}
          transition={{ duration: 0.7, delay: 1.2 }}
          className={styles.imageFourWrapper}
        >
          <Image className={styles.imageFour} src={image4} alt="image4" />
        </motion.div>
      </div>
    </div>
  );
};

export default NEXRVideo;