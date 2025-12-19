import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

type SocialMedia = {
  name: string;
  url: string;
  icon: React.ReactNode; // now it's a React icon component
};

const socialLinks: SocialMedia[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    icon: <Facebook className="w-6 h-6 text-blue-600" />,
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    icon: <Twitter className="w-6 h-6 text-blue-400" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    icon: <Instagram className="w-6 h-6 text-pink-500" />,
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
