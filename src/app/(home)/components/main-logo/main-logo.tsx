import React from "react";
import { motion } from "framer-motion";
import styles from "./main-logo.module.scss";
import Image from "next/image";
import image1 from "../../../../../public/1.svg";
import image2 from "../../../../../public/2.svg";
import image3 from "../../../../../public/3.svg";
import image4 from "../../../../../public/4.svg";
import { Facebook, Instagram, Linkedin } from "lucide-react";

// Define different variants for each direction
const imageOneVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 }
};

const imageTwoVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 }
};

const imageThreeVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 }
};

const imageFourVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
};

const NEXRVideo: React.FC = () => {
    return (
        <div className={styles.container}>
            <div style={{ position: "absolute", width: "100%", height: "100%" }}>
                <video autoPlay loop muted className={styles.backgroundVideo}>
                    <source src="/vr-video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={styles.landingContent}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={imageOneVariants}
                    transition={{ duration: 0.7, delay: 0 }}
                    className={styles.imageOneWrapper}>
                    <Image className={styles.imageOne} src={image1} alt="image1" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={imageTwoVariants}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className={styles.imageTwoWrapper}>
                    <Image className={styles.imageTwo} src={image2} alt="image2" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={imageThreeVariants}
                    transition={{ duration: 0.2, delay: 0.9 }}
                    className={styles.imageThreeWrapper}>
                    <Image className={styles.imageThree} src={image3} alt="image3" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={imageThreeVariants}
                    transition={{ duration: 0.2, delay: 0.9 }}
                    className={styles.imageThreeAltWrapper}>
                    <Image className={styles.imageThreeAlt} src={image3} alt="image3alt" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={imageFourVariants}
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className={styles.imageFourWrapper}>
                    <Image className={styles.imageFour} src={image4} alt="image4" />
                </motion.div>
            </div>

            <div className={styles.socialMediaContainer}>
                <div className={styles.socialMediaInnerDiv}>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "circOut", delay: 1.2 }}>
                        <Facebook strokeWidth={0.75} />
                    </motion.div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "circOut", delay: 1.4 }}>
                        <Instagram strokeWidth={0.75} />
                    </motion.div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "circOut", delay: 1.6 }}>
                        <Linkedin strokeWidth={0.75} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NEXRVideo;
