import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center pt-10">
  <div className="flex space-x-4">
    <a href="#" className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-green-100 transition duration-300">
    <FaFacebook size="25px"/>
    </a>

    <a href="#" className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-green-100 transition duration-300">
    <FaWhatsapp size="25px"/>
    </a>

    <a href="#" className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-green-100 transition duration-300">
    <SiGmail size="25px"/>
    </a>

    <a href="#" className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-green-100 transition duration-300">
    <FaInstagram size="25px"/>
    </a>
  </div>
</div>

  )
}

export default SocialMedia