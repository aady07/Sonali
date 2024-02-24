import React from "react";
import { Carousel } from "flowbite-react";
import banner from "../assets/banner.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div>
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Facilitating Economic Empowerment
                <span className="text-blue-800 leading-snug"> for Women-Owned Enterprises</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Join our 6-month program to equip rural SHG women with Leadership and Managerial Skills, contributing effectively to promoting community enterprises and cooperatives.
              </p>
              <button className="px-7 py-2 bg-blue-800 text-white rounded hover:bg-neutralDGrey">
                Register
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner2} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Empowering Marginalized Youth
                <span className="text-blue-800 leading-snug">with 4-Month Skill Training</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Our program focuses on making managerial and leadership training accessible to under-serviced communities like marginalized youth.
              </p>
              <button className="px-7 py-2 bg-blue-800 text-white rounded hover:bg-neutralDGrey">
                Register
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner3} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Building Sustainable Livelihoods
                <span className="text-blue-800 leading-snug">for Rural Communities</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Join our 45-day program to educate youth to provide technical guidance to farmers in their own locations, managing community-based enterprises.
              </p>
              <button className="px-7 py-2 bg-blue-800 text-white rounded hover:bg-neutralDGrey">
                Register
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
    <div className={`bg-cream text-black py-16 ${fadeIn}`}>
        <div className="container mx-auto text-center">
        <motion.div
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.1 }}
    >
        <h2 className="text-5xl font-extrabold mb-4">
            We are a systems change <br /> and advisory organization.
          </h2>
          <p className="text-2xl  mb-4 ml-20 mr-40 leading-loose">
  We are a <span className="text-red-500">systems</span>, change and advisory organization. In our two-fold approach to change, we build the capacity of <span className="text-red-500">government </span>,system leaders and we influence system processes. In partnership with the local and state education bodies, we co-create programs that shift teaching-learning practices and improve student learning and well-being. This work coupled with our research and advisory support to influence policies, we hope to create effective public education systems in India.
</p>
          </motion.div>
        </div>
      </div>
    </div>

  );
};

export default Home;