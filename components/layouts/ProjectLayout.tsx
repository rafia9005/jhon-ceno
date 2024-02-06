import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectLayout() {
  return (
    <>
      <div className="mt-[100px]">
        <div className="text-end mx-[370px]">
          <motion.h1
            whileInView={{ x: 0 }}
            animate={{ x: -100 }}
            className="lg:text-6xl lg:mx-0 mx-5 text-5xl font-bold"
          >
            Projects.
          </motion.h1>
        </div>
        <div className="flex justify-center items-center w-[80%] mx-[10%] mt-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border p-4">
              <img
                src="j1.png"
                alt="Placeholder Image"
                className="w-full h-48 rounded-md object-cover"
              />
              <h1 className="mt-3 text-center font-bold text-xl">
                Face Recognition
              </h1>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <img
                src="j2.png"
                alt="Placeholder Image"
                className="w-full h-48 rounded-md object-cover"
              />
              <h1 className="mt-3 text-center font-bold text-xl">
                Full-Stack Web test
              </h1>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <img
                src="j1.png"
                alt="Placeholder Image"
                className="w-full h-48 rounded-md object-cover"
              />
              <h1 className="mt-3 text-center font-bold text-xl">
                Face Recognition
              </h1>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <img
                src="j2.png"
                alt="Placeholder Image"
                className="w-full h-48 rounded-md object-cover"
              />
              <h1 className="mt-3 text-center font-bold text-xl">
                Full-Stack Web test
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
