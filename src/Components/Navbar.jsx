import { Facebook } from 'lucide-react';
import React from 'react';

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
const Navbar = () => {
    return (
      <div>
        <ul className="flex gap-4">
          {navigationData.map((link) => (
            <li className="text-xl font-semibold">
              {" "}
              <Facebook size={84} absoluteStrokeWidth />
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Navbar;