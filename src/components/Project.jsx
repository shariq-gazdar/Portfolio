import React, { useEffect, useState } from "react";

function Project() {
  const [project, setProject] = useState([]);

  const updateFunc = () => {
    let api = import.meta.env.VITE_API;
    fetch(api).then((res) => {
      res.json().then((data) => {
        setProject(data.values);
      });
    });
  };

  useEffect(() => {
    updateFunc();
  }, []);

  useEffect(() => {
    console.log(project);
  }, [project]); // Logs the updated project state when it changes

  return (
    <section id="Projects" data-aos="fade-right" data-aos-duration="1500">
      <h1
        id="projectHeading"
        className="text-5xl font-black underline decoration-amber-400 text-center py-10"
      >
        Projects
      </h1>

      <div
        id="cardsCollection"
        className="flex justify-around flex-wrap items-stretch gap-4"
      >
        {project.map((item, index) => (
          <div className="max-w-sm   rounded-lg shadow bg-gray-800 border-gray-500 border">
            <a href={item[3]} target="_blank">
              <img className="rounded-t-lg w-full" src={item[2]} alt="" />
            </a>
            <div className="p-5">
              <a href={item[3]} target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                  {item[0]}
                </h5>
              </a>
              <p className="mb-3 font-normal text-white-700 dark:text-gray-400 min-h-20">
                {item[1]}
              </p>
              <a
                href={item[3]}
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit Site
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center pt-4 text-4xl font-bold underline mb-10">
        More Projects Coming Soon...
      </p>
    </section>
  );
}

export default Project;
