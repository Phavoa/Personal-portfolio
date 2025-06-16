import { useRef, useState, useEffect } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [visibleDescriptions, setVisibleDescriptions] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and update isMobile state
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobileView(); // Check initially
    window.addEventListener("resize", checkMobileView);

    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  const toggleDescription = (index) => {
    setVisibleDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I specialize in delivering end-to-end web solutions
          <br /> that help your business thrive online.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/fullstack-icon.webp" alt="Full Stack Development" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Comprehensive</motion.b>{" "}
            Development
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Digital Presence.
          </h1>
          <button>EXPLORE MY WORK</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {[
          {
            title: "Full-Stack Web Development",
            description:
              "End-to-end solutions: from responsive frontends (React, Next.js) to scalable backends (Node.js, Express, PostgreSQL). I ensure reliability, performance, and security across the stack.",
          },
          {
            title: "Modern Frontend Design",
            description:
              "Mobile-first, accessible interfaces built with Tailwind CSS, Shadcn UI, and custom components. I optimize for fast load times and delightful user experiences.",
          },
          {
            title: "API Design & Integration",
            description:
              "Secure REST and GraphQL APIs, seamless third-party integrations (payment gateways, analytics, AI services). I connect systems for smooth data flow and feature-rich applications.",
          },
          {
            title: "Proactive Maintenance & Support",
            description:
              "Continuous monitoring, performance tuning, and feature updates. I partner with you to keep your platform secure and up-to-date as your user base grows.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`box ${visibleDescriptions[index] ? "expanded" : ""}`}
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>{item.title}</h2>
            {isMobile && visibleDescriptions[index] && (
              <p className="description">{item.description}</p>
            )}
            {isMobile && (
              <button onClick={() => toggleDescription(index)}>
                {visibleDescriptions[index] ? "Hide" : "Show More"}
              </button>
            )}
            {!isMobile && <p className="description">{item.description}</p>}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
