import { useRef } from "react";
import "./parallax.scss";
import Sun from '../../assets/sun.png';
import Planet from '../../assets/planets.png';
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #F7EFE5, #b1a89e)"
            : "linear-gradient(180deg, #b1a89e, #F7EFE5)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I Do?" : "What I Have Done?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? {Planet} : {Sun}
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
