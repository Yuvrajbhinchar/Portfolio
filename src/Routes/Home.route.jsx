import profile from "../assets/profile.jpg";
import { Link } from "react-router";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Home() {
  return (
    <>
      {/* main div */}
      <div className="bg-black w-full h-screen text-white">
        {/* 1 */}
        <div className="md:flex md:flex-row-reverse w-full pt-6">
          {/* img */}
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-96 h-96 rounded-full overflow-hidden">
              <img src={profile} alt="Profile" className="w-full h-full object-top" />
            </div>             
          </div>
          {/* Intro */}
          <div className="w-1/2">
            <h2 className="mt-10 ml-10 text-lg">Welcome To My World</h2>
            <h1 className="ml-10 text-4xl text-green-400 my-6">Hi, I'm Yuvraj Bhinchar</h1>
            <div className="ml-10">
              I'm a Full Stack Developer skilled in building scalable web applications. I have hands-on experience with modern frameworks and have worked on projects like interactive web apps and optimized backend systems. Always eager to learn and create impactful solutions.
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="w-full max-h-fit flex">
          {/* A */}
          <div className="ml-10 w-1/2">
            <h1>👉 Let’s Build Something Great Together – Stay Connected</h1>
            <div className="flex mt-5">
              <div className="mx-4">
                <Link to="https://github.com/Yuvrajbhinchar" target="_blank"><GitHubIcon/></Link>
              </div>
              <div className="mx-4"> <Link to="https://www.linkedin.com/in/yuvraj-bhinchar-33a743247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><LinkedInIcon/></Link></div>
              <div className="mx-4" target="_blank"> <Link to="https://x.com/yuvrajsjd?t=4dvEl4_EpKnbPdO7D46P4Q&s=09"><XIcon/></Link></div>
              <div className="mx-4" target="_blank"> <Link to="https://wa.me/9351093892?text=Hii,%20I%27m%20come%20here%20from%20your%20portfolio"><WhatsAppIcon/></Link></div>
            </div>
          </div>
          {/* B */}
          <div  className="">

    
          </div>
        </div>
      </div> 
    </>
  );
}

export default Home;
