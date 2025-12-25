import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

type SocialMedia = {
  name: string;
  url: string;
  icon: React.ReactNode; // now it's a React icon component
};

const socialLinks: SocialMedia[] = [
  {
    name: "LinkedIn",
    url: "https://in.linkedin.com/company/advitiya-iit-ropar",
    icon: <Linkedin className="w-6 h-6 text-blue-600" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/advitiya_iitrpr/?hl=en",
    icon: <Instagram className="w-6 h-6 text-pink-500" />,
  },
  {
    name: "Whatsapp",
    url: "https://whatsapp.com/channel/0029Vb6gyHAFsn0iBx9caR0E",
    icon: <FaWhatsapp className="w-6 h-6 text-green-500" />,
  },
];

const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col gap-4 p-2 bg-background border-l z-50">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-background rounded-full shadow hover:bg-gray-200 transition-all duration-300"
          title={link.name} // shows tooltip on hover
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
