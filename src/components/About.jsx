import React from "react";
import aboutImg from "../assets/about.png";
import aboutImg2 from "../assets/mobile-login.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";


const About = () => {
  return (
    <div>
        {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          >
            <img src={aboutImg} alt="" className="w-full"/>
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Empowering Lives: Our CSR Initiatives
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              We are committed to making a positive impact on communities through our CSR initiatives, with a focus on empowering women and livelihood programs.
            </p>
            <button className="px-7 py-2 bg-blue-800 text-white rounded hover:bg-neutralDGrey">
                Learn More
              </button>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 md:w-2/3">
            Empowering Women and Livelihood Programs
            </h2>
            <p>We are dedicated to making a positive impact on communities through our CSR initiatives.</p>
            </div>

            {/* stats */}
            <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
                <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <img src="/src/assets/icons/group.png" alt="" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">1,500,000</h4>
                        <p>Women Empowered</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img src="/src/assets/icons/clubs.png" alt="" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">5,000</h4>
                        <p>Livelihood Centers Established</p>
                    </div>
                </div>
                </div>
                <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <img src="/src/assets/icons/click.png" alt="" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">500,000</h4>
                        <p>Women Trained in Skills Development</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img src="/src/assets/icons/payments.png" alt="" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">2,000,000</h4>
                        <p>Livelihood Opportunities Created</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </motion.div>

    </div>
  );
};

export default About;