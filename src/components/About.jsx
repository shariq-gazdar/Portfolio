import React from "react";
import Myself from "../assets/myself.jpg";
function About() {
  return (
    <div>
      <section
        id="aboutSection"
        className="lg:mx-56 font-Rowdies py-60 flex items-center sm:mx-0  "
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <div id="left" className="+sm:hidden">
          <img src={Myself} alt="" />
        </div>
        <div id="right " className="flex flex-col">
          <h1
            id="aboutHeading"
            className="text-4xl font-black underline decoration-amber-400"
          >
            About Me
          </h1>
          <p id="desc" className="text-md font-extralight py-6">
            A hustling and hardworking web developer
          </p>
          <div id="tableInfo">
            <table>
              <tr>
                <th className="font-bold pr-2 text-left">Name:</th>
                <td>Shariq Gazdar</td>
              </tr>
              <tr>
                <th className="font-bold pr-2 text-left w-44">
                  Date Of Birth:
                </th>
                <td>20-September-2007</td>
              </tr>
              <tr>
                <th className="font-bold pr-2 text-left">Address:</th>
                <td className="w-96">A/509 Qasimabad Liaqutabad Karachi</td>
              </tr>
              <tr>
                <th className="font-bold pr-2 text-left">Zip Code:</th>
                <td>71000</td>
              </tr>
              <tr>
                <th className="font-bold pr-2 text-left">Email:</th>
                <td>
                  <a href="mailto:gazdarshariq0@gmail.com">
                    gazdarshariq0@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <th className="font-bold pr-2 text-left">Phone:</th>
                <td>
                  <a href="tel:+9231 1120295">+9231 1120295</a>
                </td>
              </tr>
            </table>
          </div>
          <div id="bottomright" className="py-4">
            <div id="paras" className="text-xl font-bold">
              <p id="yellowNumber" className="text-amber-400 inline">
                10
              </p>
              <p id="yellowNumber" className="inline">
                Complete Projects
              </p>
            </div>
            <button
              id="downloadBtn"
              className="bg-amber-400 py-1 px-1 rounded-xl border border-amber-400 hover:border-white mt-1"
            >
              <a
                href="https://mega.nz/file/mmRxWKBY#08xlD7JcnwsUz1TFM3UDR3Q9DYT6m4Hjxp60J7pKuEg"
                target="_blank"
              >
                Download CV (Mega)
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
