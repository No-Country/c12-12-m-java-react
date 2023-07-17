import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineFacebook} from "react-icons/ai";
import { PiTwitterLogoLight, PiTiktokLogoLight, PiTelegramLogoLight } from "react-icons/pi";


function SocialNetworks() {
  return (
    <div>
      <h3 className="font-bold text-xl pb-4">Our Social Networks</h3>
      <div className="flex flex-wrap md:flex-row gap-3 cursor-pointer">
        <AiOutlineYoutube size={25} className="hover:scale-125 transition" />
        <AiOutlineInstagram size={25} className="hover:scale-125 transition" />
        <AiOutlineFacebook size={25} className="hover:scale-125 transition" />
        <PiTwitterLogoLight size={25} className="hover:scale-125 transition" />
        <PiTiktokLogoLight size={25} className="hover:scale-125 transition" />
        <PiTelegramLogoLight size={25} className="hover:scale-125 transition" />
      </div>
    </div>
  );
}

export default SocialNetworks;
