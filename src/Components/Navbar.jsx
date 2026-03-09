
import { PanelTopOpen, SquareMenu } from 'lucide-react';
import React, { useState } from 'react';

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const links = navigationData.map((link) => (
            <li key={link.id} className="text-xl font-semibold"> {link.name}</li>
          ))
const Navbar = () => {
    const [open , setOpen] = useState(false)
    return (
      <div className="flex justify-between items-center p-4 border px-6">
        <span className="flex items-center " onClick={() => setOpen(!open)}>
          <span className="md:hidden">
          {open ? <PanelTopOpen /> : <SquareMenu />}
          </span>

          <h2 className="text-xl font-semibold">Navbar</h2>
          <ul className={`${open ? "top-10" : 'top-[-200px]'} z-10 duration-500 md:hidden absolute bg-white  text-black top-10`}>{links}</ul>
        </span>
        <ul className="lg:flex gap-4 hidden">{links}</ul>
        <button className="text-xl btn font-semibold">Sign In</button>
      </div>
    );
};

export default Navbar;