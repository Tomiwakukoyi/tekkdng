import { Avatar } from "@mui/material";
import PropTypes from "prop-types"; // Import PropTypes for prop validation

const ContactUsComp = ({ name, spanContent, icon, iconStyle }) => {
  return (
    <div className=" flex flex-col gap-3 pb-2 items-center">
      <div className=" rounded-full h-16 w-16 bg-[#17a2b8] flex mx-auto items-center justify-center" >
      {icon && <Avatar style={iconStyle}>{icon}</Avatar>}
      </div>
      <div className=" flex items-center justify-center gap-1 w-[70%] text-wrap">
        <h1 className="flex text-center flex-col items-center gap-1">
          {name}:
          <span className=" text-[#17a2b8] text-sm ">
            <a href="">{spanContent}</a>
          </span>
        </h1>
      </div>
    </div>
  );
};

ContactUsComp.propTypes = {
  name: PropTypes.string.isRequired,
  spanContent: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.node), // Validate that icons is an array of React nodes
};

export default ContactUsComp;
