import Image from "next/image";
import logo from "./gobusiness.svg";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="flex w-full gap-x-5 items-center justify-between pb-5 px-24">
      <div className="flex gap-x-7 items-center">
        <a href="/">
          <Image src={logo} alt="Homepage" width={165} />
        </a>

        <div className="flex gap-x-5 font-medium">
          <a href="/" className="flex items-center gap-x-1">
            Start a Business
            <span>
              <ChevronDown size={20} />
            </span>
          </a>
          <a href="/" className="flex items-center gap-x-1">
            Run and Grow a Business
            <span>
              <ChevronDown size={20} />
            </span>
          </a>
          <a href="/">e-Services</a>
          <a href="/" className="flex items-center gap-x-1">
            Resources
            <span>
              <ChevronDown size={20} />
            </span>
          </a>
          <a href="/" className="flex items-center gap-x-1">
            About Us
            <span>
              <ChevronDown size={20} />
            </span>
          </a>
        </div>
      </div>
      <div className="flex gap-x-3 items-center">
        <Button>Log In</Button>
        <Search />
      </div>
    </nav>
  );
}
