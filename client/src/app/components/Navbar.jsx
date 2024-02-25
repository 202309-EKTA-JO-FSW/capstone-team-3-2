
import React , {useState} from "react";
import Link from "next/link";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    } 

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };
    
      const handleSearchSubmit = (e) => {
        e.preventDefault();

        window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
        console.log("lubna", searchQuery);
      };


    return (
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                
              <Link href="/">
              <span className="text-white cursor-pointer">Home</span>
            </Link>

                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                  <div className="dropdownMenu">
                  <button
                    onClick={toggleNavbar}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                    Menu
                  </button>


                  {isOpen && (
                    <div className="absolute z-10 bg-gray-800 mt-2 py-2 w-32 rounded-md shadow-lg">
                      <Link href="/menu/appetizers">
                        <span className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                          Appetizers
                        </span>
                      </Link>
                      <Link href="/menu/main-courses">
                        <span className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                          Main Courses
                        </span>
                      </Link>
                      <Link href="/menu/desserts">
                        <span className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                          Desserts
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
                <Link href="/about">
                  <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                    About
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                    Contact
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="bg-gray-700 text-white border-2 border-gray-700 rounded-full px-3 py-1 pr-8 focus:outline-none focus:border-gray-400"
                placeholder="Search"/>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

    export default Navbar;
   
