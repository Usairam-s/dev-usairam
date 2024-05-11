import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import Link from "next/link";

function Navbar() {
  const socials = [
    {
      link: "https://linkedin.com/in/usairam-saleem-1b20851b8",
      label: "Linkedin",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/Usairam-s",
      label: "Github",
      icon: SiGithub,
    },
    {
      link: "https://twitter.com/Usairam71",
      label: "Twitter",
      icon: SiX,
    },
  ];
  return (
    <nav className="py-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 -rotate-2 decoration-green-500">
        Usairam 👨🏻‍💻{" "}
      </h1>
      <div className="flex space-x-6 items-center">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.label}
              aria-label={social.label}
              href={social.link}
              target="_blank"
            >
              <Icon className="h-5 w-5 hover:scale-125 transition-all duration-200" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
