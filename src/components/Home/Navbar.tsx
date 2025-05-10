"use client";

import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineLogin } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [, setShowLoginButton] = useState(false);
  const [user, setUser] = useState<{ email: string; photoURL: string } | null>(
    null
  );

  useEffect(() => {
    // Simulating user fetch
    const timer = setTimeout(() => {
      setShowLoginButton(true);
      setUser({
        email: "hh@gmail.com",
        photoURL:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const logOut = async () => {
    try {
      const response = await fetch("/api/logout", { method: "POST" });
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      response.ok
        ? console.log("User logged out successfully")
        : console.error("Logout failed");
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo & Hamburger */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden btn btn-ghost btn-circle bg-teal-50 hover:bg-teal-100"
            onClick={() => setHamburger(!hamburger)}
          >
            {hamburger ? (
              <AiOutlineClose size={24} className="text-teal-700" />
            ) : (
              <AiOutlineMenu size={24} className="text-teal-700" />
            )}
          </button>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">
              Inspira{" "}
              <span className="text-teal-500 lowercase">consultancy</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-base font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Events", path: "/events" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="relative py-2 px-1 text-gray-700 hover:text-teal-600 transition-colors after:absolute after:w-0 after:h-0.5 after:bg-teal-500 after:bottom-0 after:left-0 hover:after:w-full after:transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User or Login Button */}
        <div>
          {user?.email ? (
            <div className="relative group">
              <div className="btn btn-ghost btn-circle avatar ring-2 ring-teal-300 ring-offset-2">
                <div className="w-10 rounded-full overflow-hidden">
                  {user?.photoURL && (
                    <Image
                      src={user?.photoURL}
                      alt="User Avatar"
                      width={40}
                      height={40}
                    />
                  )}
                </div>
              </div>
              {/* Dropdown */}
              <ul className="absolute right-0 mt-2 w-52 p-2 shadow-lg border border-teal-100 bg-white rounded-lg z-[50] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-teal-600 hover:bg-teal-50 block px-4 py-2 rounded-md"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="w-full text-left text-gray-700 hover:text-teal-600 hover:bg-teal-50 block px-4 py-2 rounded-md"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              href="/login"
              className="btn bg-gradient-to-r from-teal-500 to-emerald-500 border-none text-white hover:from-teal-600 hover:to-emerald-600 hidden lg:flex gap-2 shadow-md hover:shadow-lg"
            >
              <AiOutlineLogin className="text-xl" /> Join Us
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {hamburger && (
        <div className="lg:hidden bg-white shadow-lg rounded-b-lg overflow-hidden">
          <ul className="p-4 space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Events", path: "/events" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="flex py-2 px-4 text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-md transition-colors"
                  onClick={() => setHamburger(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="flex py-2 px-4 text-black rounded-md"
                onClick={() => setHamburger(false)}
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
