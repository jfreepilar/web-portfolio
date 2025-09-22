import { IoLogoGithub } from "react-icons/io5";
import { projectDetails } from "./projectDetails";

export default function Project() {
  return (
    <div className="px-28 pt-40 pb-10 mt-5 mb-20 text-gray-500" id="project">
      <h2 className="text-3xl text-center mb-10 max-md:text-[26px]">Project</h2>

      <div className="flex flex-wrap justify-evenly gap-10 max-md:justify-center">
        {projectDetails.map((item, index) => (
          <div
            className="border-2 w-[470px] mx-auto mt-8  border-gray-300 flex flex-col gap-4"
            key={index}
          >
            <img
              className={`w-fit h-[250px] border-b-[5px] ${item.borderColor}`}
              src={item.image}
              alt={item.alt}
            />
            <div className="px-12 h-min-fit">
              <p className="text-center text-2xl max-md:text-[18px]">
                {item.name}
              </p>
              <p className="text-[15px] leading-relaxed mt-1 font-sourceSans text-center max-md:text-[13px]">
                {item.description}
              </p>

              <div className="flex justify-evenly">
                <a href={item.codeOnGithub} target="_blank">
                  <div
                    className="flex justify-between items-center my-6 mx-auto w-[120px] border-2 border-gray-300 group cursor-pointer
                                          max-md:w-[100px]"
                  >
                    <IoLogoGithub
                      className="text-4xl p-2 bg-gray-200 group-hover:bg-gray-300  transition-colors duration-300 ease-in
                                                      max-md:text-[32px]"
                    />
                    <p className="text-[16px] mr-4 max-md:text-[12px]">
                      Github
                    </p>
                  </div>
                </a>

                <a href={item.domain} target="_blank">
                  <div
                    className="flex justify-between items-center my-6 mx-auto w-[120px] border-2 border-gray-300 group cursor-pointer
                                          max-md:w-[100px]"
                  >
                    <IoLogoGithub
                      className="text-4xl p-2 bg-gray-200 group-hover:bg-gray-300  transition-colors duration-300 ease-in
                                                      max-md:text-[32px]"
                    />
                    <p className="text-[16px] mr-4 max-md:text-[12px]">
                      Website
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
