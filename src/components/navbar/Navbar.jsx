import { motion } from "framer-motion";
import "./navbar.scss";
import Facebook from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Whatsapp from "../../assets/whatsapp.png";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Tega Dev
        </motion.span>
        <div className="social">
          <a href="https://github.com/Phavoa/" target="_blank">
            <img src={Facebook} alt="" width={70} />
          </a>
          <a href="" target="_blank">
            <img src={Instagram} alt="" width={70} />
          </a>
          <a href="https://www.linkedin.com/in/favour-efemiaya/" target="_blank">
            <img src={Linkedin} alt="" width={70} />
          </a>
          <a href="https://wa.me/message/AZ3BBRZ2WBPEA1 " target="_blank">
            <img src={Whatsapp} alt="" width={70} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
