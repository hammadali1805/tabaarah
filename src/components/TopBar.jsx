import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

export const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems = 0 } = useCart() || {};

  return (
    <div className="sticky top-0 z-50 w-full border-b border-zinc-800/10 bg-cream font-roboto">
      <div className="container flex h-16 items-center justify-between sm:px-16 px-6">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-green">Tabaarah.com</span>
          </a>
        </div>

        <nav
          className={`${
            isMenuOpen
              ? "absolute top-16 left-0 right-0 bg-cream p-4 border-b"
              : "hidden"
          } md:block`}
        >
          <ul
            className={`${
              isMenuOpen
                ? "flex flex-col space-y-2"
                : "flex items-center space-x-6"
            }`}
          >
            <li>
              <a href="/" className="text-sm font-medium hover:text-green">
                Home
              </a>
            </li>
            <li>
              <a
                href="/#products"
                className="text-sm font-medium hover:text-green"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/#products"
                className="text-sm font-medium hover:text-green"
              >
                Create Gift Box
              </a>
            </li>
            <li>
              <a href="/about" className="text-sm font-medium hover:text-green">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-sm font-medium hover:text-green"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-6">
          <Link
            to="/cart"
            className="relative rounded-md hover:bg-white hover:cursor-pointer p-2 transition duration-300 ease-in-out"
          >
            <BsCart2 size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="mr-2 sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};
