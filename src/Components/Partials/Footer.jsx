import SocialMedia from '../Screens/SocialMedia';
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto">
        <p className="flex items-center justify-center text-white footer_sm">Copyright © 2024 All rights reserved | This webapp is made with <span className="md:px-2 fill-[#fcb603]"><FaHeart size="20px"
    color="rgb(239 68 68)"/></span> by <a href="https://pixtics.com" target="blank" className="text-primary">Pixtics</a></p>
        <SocialMedia />
    </div>
  )
}

export default Footer