import Link from "next/link";
import React from "react";
import { IoMdHome, IoIosCreate } from "react-icons/io";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";

const Navbar = () => {
  const links = [
    {
      text: "events",
      url: "/events",
    },
    {
      text: "landmark",
      url: "/events/landmarks",
    },
    {
      text: "create",
      url: "/events/create",
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
    <IoMdHome size={"1.75rem"} />,
    <HiLocationMarker size={"1.75rem"} />,
    <IoIosCreate size={"1.75rem"} />,
    <BiSolidMessageSquareDetail size={"1.75rem"} />,
    <IoPersonSharp size={"1.75rem"} />,
  ];
  return (
    <div>
      <div className="flex justify-evenly border">
        {links.map((link, idx) => (
          <Link
            key={link.text}
            href={link.url}
            className="p-4 border w-full flex justify-center"
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
