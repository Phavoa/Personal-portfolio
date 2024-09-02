import "./hero.scss";
import MouseCursor from "../../assets/mouse-cursor.png";
import TegaPics from "../../assets/Tega.png";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const imageVariants = {
  initial: {
    x: 500, // Start off-screen to the right
    opacity: 0,
  },
  animate: {
    x: 0, // Move to the original position
    opacity: 1,
    transition: {
      duration: 1.5, // Adjust duration as needed
      ease: "easeOut", // Smooth easing
    },
  },
};

const Hero = () => {
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>EFEMIAYA TEGA</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={() => handleClick("Services")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={() => handleClick("Contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={MouseCursor}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full Stack Developer
      </motion.div>
      <motion.div
        className="imageContainer"
        variants={imageVariants}
        initial="initial"
        animate="animate"
      >
        <img src={TegaPics} alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
