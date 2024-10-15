import React from "react";

function Skills() {
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
        className="xl:flex justify-around py-9 flex-wrap m-auto overflow-scroll gap-4 +sm:flex-col"
      >
        <div id="barHTML" className="w-96">
          <div className="skillsHeading flex justify-between">
            <h2 className="text-lg">Html</h2>
            <h2 className="text-lg">95%</h2>
          </div>
          <div className="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-amber-500 h-2.5 rounded-full"></div>
          </div>
        </div>

        <div id="barCSS" className="w-96">
          <div className="skillsHeading flex justify-between">
            <h2 className="text-lg">CSS</h2>
            <h2 className="text-lg">90%</h2>
          </div>
          <div className="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-amber-500 h-2.5 rounded-full"></div>
          </div>
        </div>

        <div id="barJS" className="w-96">
          <div className="skillsHeading flex justify-between">
            <h2 className="text-lg">JavaScript</h2>
            <h2 className="text-lg">90%</h2>
          </div>
          <div className="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-amber-500 h-2.5 rounded-full"></div>
          </div>
        </div>

        <div id="barBT" className="w-96">
          <div className="skillsHeading flex justify-between">
            <h2 className="text-lg">Bootstrap/Tailwind</h2>
            <h2 className="text-lg">85%</h2>
          </div>
          <div className="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-amber-500 h-2.5 rounded-full"></div>
          </div>
        </div>

        <div id="barBT" className="w-96">
          <div className="skillsHeading flex justify-between">
            <h2 className="text-lg">React Js</h2>
            <h2 className="text-lg">45%</h2>
          </div>
          <div className="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-amber-500 h-2.5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
