import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import { images } from "../../constant";
import AppWrap from "../../Wrapper/AppWrap";
const scalevarient = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span> 👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">HELLO ,I AM</p>
              <h1 className="head-text">Harsh</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Devloper</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-image" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profilr_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scalevarient}
        whileInView={scalevarient.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
