import { skills } from "@/data/skills";

export default function Skill() {
  return (
    <>
      <h2 className="text-center font-diph font-bold text-4xl text-[#037667]">
        Skills
      </h2>
      <section className="flex justify-center my-16">
        <div className=" w-[95%] sm:w-[90%] md:w-[90%] lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:6 md:4 rounded-xl shadow-custom">
          {Object.keys(skills).map((skill, index) => {
            return (
              <div
                key={index}
                className="font-mont flex flex-col gap-4 m-4 text-center rounded-xl duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                <h3 className="text-xl font-semibold tracking-wide">{skill}</h3>
                <p className="text-md text-justify md:text-center px-1">
                  {skills[skill]}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
