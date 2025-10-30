"use client";
import { Avatar } from "@mui/material";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { motion } from "framer-motion";

const ContactUsComp = ({ name, spanContent, icon, iconStyle }) => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row sm:items-center gap-3 pb-2"
      initial={{ opacity: 0, x: -20 }} // Initial state for animation
      animate={{ opacity: 1, x: 0 }} // Animation to apply
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <div className=" flex flex-col gap-3 pb-2 items-center ">
        <div className=" rounded-full h-16 w-16 bg-[#17a2b8] flex items-center justify-center">
          {icon && <Avatar style={iconStyle}>{icon}</Avatar>}
        </div>
        <div className=" flex items-center justify-center gap-1 text-wrap">
          <h1 className="flex text-center flex-col items-center gap-1">
            {name}:
            <span className=" text-[#17a2b8] text-sm md:w-48">
              <a href="">{spanContent}</a>
            </span>
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

ContactUsComp.propTypes = {
  name: PropTypes.string.isRequired,
  spanContent: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.node), // Validate that icons is an array of React nodes
};

export default ContactUsComp;
