import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Women Entrepreneurship Programme",
      description:
        "Empowering women entrepreneurs through comprehensive support and resources.",
      image: "/src/assets/icons/membership.png",
    },
    {
      id: 2,
      title: "Second Chance Programme (Legal Aid)",
      description:
        "Providing legal aid and support for individuals seeking a second chance.",
      image: "/src/assets/icons/association.png",
    },
    {
      id: 3,
      title: "Foundation Literacy and Numeracy (FLN)",
      description:
        "Enhancing literacy and numeracy skills to build a strong foundation.",
      image: "/src/assets/icons/group-club.png",
    },
    {
      id: 4,
      title: "Teacher Education",
      description:
        "Empowering educators with training and resources for effective teaching.",
      image: "/src/assets/icons/membership.png",
    },
    {
      id: 5,
      title: "Livelihoods",
      description:
        "Creating sustainable livelihood opportunities for underprivileged communities.",
      image: "/src/assets/icons/association.png",
    },
    {
      id: 6,
      title: "Youth Empowerment Programme",
      description:
        "Empowering youth through skill development and mentorship programs.",
      image: "/src/assets/icons/group-club.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="program">
      {/* Service cards */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
      >
        {programs.map((program) => (
          <div
            key={program.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div className="">
              <div className="bg-[#E8F5E9] w-14 h-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                <img src={program.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {program.title}
              </h4>
              <p className="text-sm text-neutralGrey">{program.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Programs;
