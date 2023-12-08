import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const RightSideNavbar = () => {
    return (
        <div className="p-4">
            <div className=" space-y-2">
                <h2 className="text-xl font-bold">Login With</h2>
                <button className="btn btn-outline btn-primary w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline btn-secondary w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>

            <div>
                <h2 className="text-xl font-bold mt-4">Find Us On</h2>
                <button className="flex items-center text-left w-full pl-4 border rounded-t-lg py-2">
                    <FaFacebook className="mr-2"></FaFacebook>
                    Facebook
                </button>
                <button className="flex items-center text-left w-full pl-4 border border-y-0 py-2">
                    <FaTwitter className="mr-2"></FaTwitter>
                    Twitter
                </button>
                <button className="flex items-center text-left w-full pl-4 border rounded-b-lg py-2">
                    <FaInstagram className="mr-2"></FaInstagram>
                    Instagram
                </button>
            </div>

            <div>
                <h2 className="text-xl font-bold mt-4">Que Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNavbar;
