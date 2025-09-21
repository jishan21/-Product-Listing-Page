import { useState } from "react";
import NavBar from "./NavBar";
import { LuShoppingCart } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="flex justify-between items-center h-[45px] p-4 shadow-sm shadow-zinc-100 relative">
      
      <div className="flex-shrink-0 w-36">
        <img src="/Images/Group-491.png" alt="Logo" />
      </div>

      
      <div className="hidden md:flex">
        <NavBar />
      </div>

      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <LuShoppingCart size={24} />
          <div className="hidden md:flex items-center gap-2">
            <h3 className="text-sm font-medium">Items</h3>
            <h3 className="text-sm text-zinc-500">$0.00</h3>
          </div>
        </div>

        
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

     
      {isOpen && (
        <div className="absolute top-full left-0 flex justify-center w-full bg-white shadow-md md:hidden z-50">
          <NavBar />
        </div>
      )}
    </header>
  );
}

export default Header;
