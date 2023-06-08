import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center mt-5 md:justify-between md:p-6 dark:bg-gray-800 sticky  bottom-0">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        ©{new Date().getFullYear()}
        <Link href="https://flowbite.com/" className="hover:underline">
          {" "}
          LOSI Skateboards™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link href="/" className="mr-4 hover:underline md:mr-6 ">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="mr-4 hover:underline md:mr-6">
            Videos
          </Link>
        </li>
        <li>
          <Link href="/Shop" className="mr-4 hover:underline md:mr-6">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/Cart" className="mr-4 hover:underline md:mr-6">
            Mi Carrito
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
