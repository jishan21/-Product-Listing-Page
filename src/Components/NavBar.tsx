import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="flex items-center gap-4 font-semibold md:gap-5 lg:gap-7">
        <Link
          className="text-sky-500 transition-colors duration-300 hover:text-sky-600"
          to="/home"
        >
          HOME
        </Link>
        <Link
          className="text-gray-700 transition-colors duration-300 hover:text-sky-500"
          to="/bag"
        >
          BAG
        </Link>
        <Link
          className="text-gray-700 transition-colors duration-300 hover:text-sky-500"
          to="/sneakers"
        >
          SNEAKERS
        </Link>
        <Link
          className="text-gray-700 transition-colors duration-300 hover:text-sky-500"
          to="/belt"
        >
          BELT
        </Link>
        <Link
          className="text-gray-700 transition-colors duration-300 hover:text-sky-500"
          to="/contact"
        >
          CONTACT
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
