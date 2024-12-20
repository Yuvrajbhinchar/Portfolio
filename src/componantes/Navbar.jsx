import { Link } from "react-router";
function Navbar(){

    return(
        <>
            {/* Main Div */}
            <div className="bg-black w-full h-20">
                <div className="flex justify-around pt-7">
                <div className="text-white font-extrabold">Yuvi</div>
                <div className="flex justify-between">
                <div className="text-white font-extrabold mr-5">
                    <Link to="/" >Home</Link>
                </div>
                <div className="text-white font-extrabold mr-5">
                <Link to="/srvice" >Service</Link>
                </div>
                <div className="text-white font-extrabold mr-5">
                    <Link to="/resume">Resume</Link>
                </div>
                <div className="text-white font-extrabold mr-5">
                    <Link to="/work">Work</Link>
                </div>
                <div className="text-white font-extrabold mr-5">
                    <Link to="/contact">contact</Link>
                </div>
                <div className="text-white font-extrabold mr-5">
                    <Link to="/abouteme">About Me</Link>
                </div>
                <div className="text-white font-extrabold mr-5">
                    <Link to="/blog">Blog</Link>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;