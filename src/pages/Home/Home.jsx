import Header from "../Shared/Header/Header";
import LefSideNavbar from "../Shared/LeftSideNavbar/LefSideNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="border">
                    <LefSideNavbar></LefSideNavbar>
                </div>

                <div className="md:col-span-2 border">
                    <h2>News coming soon......</h2>
                </div>

                <div className="border">
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;