import profile from "../assets/profile.jpg";
import { Link } from "react-router";
function Home() {
  return (
    <>
      {/* main div */}
      <div className="bg-black w-full h-screen text-white">
        {/* 1 */}
        <div className="flex flex-row-reverse w-full pt-6">
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
        <div>
          {/* A */}
          <div className="ml-10">
            <h1>👉 Let’s Build Something Great Together – Stay Connected</h1>
            <div className="flex">
              <div className="mx-2">
                <Link to="/t">Github</Link>
              </div>
              <div className="mx-2"> <Link to="/t">Linkdl</Link></div>
              <div className="mx-2"> <Link to="/t">Whatsapp</Link></div>
              <div className="mx-2"> <Link to="/t">x</Link></div>
            </div>
          </div>
          {/* B */}
          <div></div>
        </div>
      </div> 
    </>
  );
}

export default Home;
