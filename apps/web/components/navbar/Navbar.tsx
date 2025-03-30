import Link from "next/link";
import React from "react";
import { IoIosCreate } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const Navbar = () => {
  const id = "Knock2";
  const links = [
    {
      text: "events",
      url: "/events",
    },
    {
      text: "create",
      url: "/events/create",
    },
    {
      text: "map",
      url: `/map`,
    },
    {
      text: "notifications",
      url: "/notifications",
    },
    {
      text: "profile",
      url: "/profile",
    },
  ];
  const icons = [
    <GoHome size={"1.75rem"} />,
    <IoIosCreate size={"1.75rem"} />,
    <IoLocationOutline size={"1.75rem"} />,
    <LuMessageSquareMore size={"1.75rem"} />,
    <VscAccount size={"1.75rem"} />,
  ];
  // Home, Friends, Maps, Account
  return (
    <div>
      <div className="flex justify-evenly">
        {links.map((link, idx) => (
          <Link
            key={link.text}
            href={link.url}
            className="p-4 w-full flex justify-center text-text-primary"
          >
            {/* {link.text} */}
            {icons[idx]}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
