"use client";

import { Navbar } from "flowbite-react";

export function Nav() {
  return (
    <Navbar className="bg-black/50 text-white w-screen overflow-x-hidden +sm:overflow-x-hidden fixed z-50 ">
      <Navbar.Brand>
        <h1 id="navHeading" className="font-Rowdies font-bold text-3xl">
          Shariq
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-yellow-400 focus:text-white">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-yellow-400">
          About
        </Navbar.Link>
        <Navbar.Link href="#" className="text-yellow-400">
          Services
        </Navbar.Link>
        <Navbar.Link href="#" className="text-yellow-400">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#" className="text-yellow-400">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Nav;
