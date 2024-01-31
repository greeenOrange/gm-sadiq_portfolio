import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavBar = ({ scrollY }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
};

  return (
    <nav className={`fixed top-0 w-full z-50 ${scrollY || mobileMenu ? 'bg-white shadow-md py-2' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex py-4 ${mobileMenu === true ? 'relative h-42 w-32 flex-col justify-start items-start': 'justify-center items-center'}`}>
          <button onClick={handleMobileMenu} className="mobile_menus">
            {mobileMenu !== true ? <CiMenuBurger size="30"/> :
            <span className="absolute h-14 w-14 left-0 -top-2"><AiOutlineClose size="30"/></span>}
          </button>
          <div className="flex space-x-4 nav_menus">
            <a href="#" className={`font-normal ${scrollY ? "text-black-100 hover:text-green-100" : "text-white hover:text-gray-600"}`}>Home</a>
            <a href="#" className={`font-normal ${scrollY ? "text-black-100 hover:text-green-100" : "text-white hover:text-gray-600"}`}>Services</a>
            <a href="#" className={`font-normal ${scrollY ? "text-black-100 hover:text-green-100" : "text-white hover:text-gray-600"}`}>About</a>
            <a href="#" className={`font-normal ${scrollY ? "text-black-100 hover:text-green-100" : "text-white hover:text-gray-600"}`}>Contact</a>
          </div>
          {
            mobileMenu && <div className="flex flex-col space-x-4 bg-white mt-10">
            <a href="#" className={"text-black-100 ml-4 hover:text-green-100 font-normal" }>Home</a>
            <a href="#" className={"text-black-100 hover:text-green-100 font-normal" }>Services</a>
            <a href="#" className={"text-black-100 hover:text-green-100 font-normal" }>About</a>
            <a href="#" className={"text-black-100 hover:text-green-100 font-normal"}>Contact</a>
          </div>
          }
        </div>
      </div>
    </nav>

  )
}

export default NavBar