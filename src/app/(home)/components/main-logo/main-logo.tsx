import React from "react";
// import { motion } from "framer-motion";
import styles from "./main-logo.module.scss";
import Image from "next/image";
import image1 from '../../../../../public/1.svg';
import image2 from '../../../../../public/2.svg';
import image3 from '../../../../../public/3.svg';
import image4 from '../../../../../public/4.svg';

const NEXRVideo: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.landingContent}>
                <Image className={styles.imageTwo} src={image2} alt="image2" />
                <Image className={styles.imageOne} src={image1} alt="image1" />
                <Image className={styles.imageThree} src={image3} alt="image3" />
                <Image className={styles.imageThreeAlt} src={image3} alt="image3alt" />
                <Image className={styles.imageFour} src={image4} alt="image4" />
            </div>
        </div>
    );
};

export default NEXRVideo;
