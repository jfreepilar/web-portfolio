import { skillDetails } from "./skillDetails";

export default function Skills() {
  return (
    <div
      className="mt-5 px-1 pt-40 border-gray-200 flex flex-col items-center text-gray-500"
      id="skills"
    >
      <h2 className="text-3xl text-center mb-5 max-md:text-[26px]">Skills</h2>

      <div className="flex flex-wrap justify-between mb-16 w-full max-lg:flex-col max-lg:items-center max-md:gap-5">
        {skillDetails.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[400px] my-3"
          >
            {item.image ? (
              <img src={item.image} className="w-32 h-32" />
            ) : (
              <p className={`text-9xl ${item.color}`}>{item.icon}</p>
            )}
            <h3 className="text-2xl mt-3 max-md:text-xl">{item.name}</h3>
            <div className="w-[270px]">
              <p className="text-[16px] text-center font-sourceSans">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
