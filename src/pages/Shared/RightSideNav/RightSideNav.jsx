import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold">Login With</h2>
        <div className="space-y-2">
          <div className="border border-blue-500 rounded-md flex items-center justify-center space-x-2 p-2">
            <FaGoogle></FaGoogle>
            <p>Login with Google</p>
          </div>
          <div className="border border-gray-500 rounded-md flex items-center justify-center space-x-2 p-2">
            <FaGithub></FaGithub>
            <p>Login with Github</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold">Find Us On</h2>
        <div className="border border-gray-500 rounded-t-md flex items-center space-x-2 p-2">
          <FaFacebook></FaFacebook>
          <p>Facebook</p>
        </div>
        <div className="border-x border-gray-500 flex items-center space-x-2 p-2">
          <FaTwitter></FaTwitter>
          <p>Twitter</p>
        </div>
        <div className="border border-gray-500 rounded-b-md flex items-center space-x-2 p-2">
          <FaInstagram></FaInstagram>
          <p>Instagram</p>
        </div>
      </div>

      <div className="bg-gray-200">
        <h2 className="text-xl font-bold">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
