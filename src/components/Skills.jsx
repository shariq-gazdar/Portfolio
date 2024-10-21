import React from "react";

function Skills() {
  const style95 = {
    width: 95 + "%",
  };
  const style90 = {
    width: 90 + "%",
  };
  const style85 = {
    width: 85 + "%",
  };
  const style50 = {
    width: 50 + "%",
  };

  return (
    <section id="skills" data-aos="fade-left" data-aos-duration="1500">
      <h1
        id="skillsHeading"
        className="text-5xl font-black underline decoration-amber-400 text-center"
      >
        My Skills
      </h1>
      <div
        id="skillSection"
        className="xl:flex flex-col justify-around items-center  flex-wrap m-auto overflow-scroll gap-4 py-10  "
      >
        <div id="barHTML" className="w-96">
          <div className="skillsHeading flex justify-between">
            <h2 className="text-lg">Html</h2>
            <h2 className="text-lg">95%</h2>
          </div>
          <div className="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-amber-500 h-2.5 rounded-full"
              style={style95}
            ></div>
          </div>
        </div>

        <div id="barCSS" className="w-96">
          <div className="skillsHeading flex justify-between">
            <h2 className="text-lg">CSS</h2>
            <h2 className="text-lg">90%</h2>
          </div>
          <div className="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-amber-500 h-2.5 rounded-full"
              style={style90}
            ></div>
          </div>
        </div>

        <div id="barJS" className="w-96">
          <div className="skillsHeading flex justify-between">
            <h2 className="text-lg">JavaScript</h2>
            <h2 className="text-lg">90%</h2>
          </div>
          <div className="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-amber-500 h-2.5 rounded-full"
              style={style90}
            ></div>
          </div>
        </div>

        <div id="barBT" className="w-96">
          <div className="skillsHeading flex justify-between">
            <h2 className="text-lg">Bootstrap/Tailwind</h2>
            <h2 className="text-lg">85%</h2>
          </div>
          <div className="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-amber-500 h-2.5 rounded-full"
              style={style85}
            ></div>
          </div>
        </div>

        <div id="barBT" className="w-96">
          <div className="skillsHeading flex justify-between">
            <h2 className="text-lg">React Js</h2>
            <h2 className="text-lg">45%</h2>
          </div>
          <div className="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-amber-500 h-2.5 rounded-full"
              style={style50}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
