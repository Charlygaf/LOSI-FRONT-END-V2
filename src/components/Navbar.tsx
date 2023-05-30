import Link from "next/link";
import { Component, FC, useState } from "react";

const NavLink: FC<any> = ({ to, children }) => {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
};

const Navbar: FC<any> = () => {
  return (
    <div
      id="navbar"
      className="flex filter justify-center space-x-40 px-40  h-40 items-center"
    >
      <Link href="/Shop" className="font-serif">
        shop
      </Link>

      <Link href="/" className="text-black text-6xl font-extrabold  ">
        LOSI
      </Link>

      <Link href="/Videos" className="font-serif">
        video
      </Link>
    </div>
  );
};

export default Navbar;
