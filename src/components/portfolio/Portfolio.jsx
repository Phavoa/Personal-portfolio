import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import TegaGym from '../../assets/TegaGym.png';
import QMOil from '../../assets/QMOil.png';
import PharmX from '../../assets/Pharmx.png';
import TegaTube from '../../assets/TegaTube.png';
const items = [
  {
    id: 1,
    title: "React Exercise Site",
    link: "https://effervescent-faun-bc780d.netlify.app/",
    img: TegaGym,
    desc: "FitTrack is your ultimate fitness resource, providing a comprehensive library of exercises at your fingertips. With an intuitive search feature, users can easily find detailed exercise instructions and high-quality videos. The platform’s sleek, user-friendly design ensures a seamless and enjoyable experience",
  },
  {
    id: 2,
    title: "Q & M Oil and Gas Solutions",
    link: "https://qmoilandgas.com/",
    img: QMOil,
    desc: "This professional website was developed for Q & M Oil and Gas, showcasing the company’s expertise in the energy sector. The site blends modern design with user-centric functionality, offering an engaging and informative experience for visitors exploring the company's services",
  },
  {
    id: 3,
    title: "PharmarX Marketplace",
    link: "https://pharmarxng.com/",
    img: PharmX,
    desc: "PharmarX is a robust e-commerce platform tailored for pharmaceutical products. This full-stack project features a secure and efficient virtual shopping experience, enabling users to browse and purchase medical supplies with confidence. The site is designed to prioritize user security and streamlined functionality.",
  },
  {
    id: 4,
    title: "React YouTube Clone",
    link: "https://deluxe-panda-13911d.netlify.app/",
    img: TegaTube,
    desc: "TegaTube is a sophisticated and visually appealing YouTube clone, showcasing advanced React development skills. The platform offers a smooth, responsive interface that replicates YouTube’s core functionalities, providing users with a familiar yet distinct experience",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" >
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
