import NavBar from "./NavBar";
import { LuShoppingCart } from "react-icons/lu";
import { HiMenu } from "react-icons/hi"; 

function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-sm">
      <div className="w-28 flex-shrink-0">
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

        <button className="md:hidden text-2xl">
          <HiMenu />
        </button>
      </div>
    </header>
  );
}

export default Header;
