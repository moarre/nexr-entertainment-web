import React from "react";
import { motion } from "framer-motion";
import styles from "./main-logo.module.scss";
import { Facebook, Instagram, Linkedin, LinkedinIcon } from "lucide-react";

const NEXRVideo: React.FC = () => {
    return (
        <div className={styles.container}>
            <svg width="0" height="0">
                <defs>
                    
                    <mask id="imageMask">
                        {/* for logo only use nexrsvgimage.svg */}
                        <image href="/nexrsvgimage2.svg" width="300" height="300" />
                    </mask>
                </defs>
            </svg>

            <div className={styles.landingContent}>
                <motion.div
                    className={styles.videoContainer}
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}>
                    <div className={styles.videoWrapper}>
                        <video
                            autoPlay
                            loop
                            muted
                            className={styles.backgroundVideo}
                            style={{
                                clipPath: "url(#textClip)",
                                WebkitClipPath: "url(#textClip)",
                                mask: "url(#imageMask)"
                            }}>
                            {/* <source src="/bright_ai_video.mp4" type="video/mp4" /> */}
                            {/* <source src="/vr-video.mp4" type="video/mp4" /> */}
                            <source src="/red-blue-circles.mp4" type="video/mp4" />
                            {/* <source src="/vr-video-2.mp4" type="video/mp4" /> */}
                            {/* <source src="/vecteezy_glittering-bokeh-lights-overlays_1792815.mp4" type="video/mp4" /> */}
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.textContent}
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "circOut", delay: 0.5 }}>
                    <div className={styles.newText}>COMING SOON</div>
                </motion.div>

                <div className={styles.socialMediaContainer}>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "circOut", delay: 0.7 }}>
                        <Facebook strokeWidth={0.5} />
                    </motion.div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "circOut", delay: 0.8 }}>
                        <Instagram strokeWidth={0.5} />
                    </motion.div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "circOut", delay: 0.9 }}>
                        <Linkedin strokeWidth={0.5} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NEXRVideo;
