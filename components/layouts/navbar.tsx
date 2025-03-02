import { Book, Sunset, Trees, Zap } from "lucide-react";

import { NavbarMain } from "@/components/blocks/shadcn-navbar"

const MenuData = {
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Jay Fabros",
  },
  menu: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Services",
      url: "/services",
      items: [
        {
          title: "Web Design & Development",
          description: "Creating beautiful, responsive websites that are easy to use and navigate.",
          icon: <Book className="size-5 shrink-0" />,
          url: "/services/websites",
        },
        {
          title: "Digital Marketing",
          description: "We help businesses grow their online presence and reach new customers through digital marketing strategies.",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/services/digital-marketing",
        },
        {
          title: "Content & Creative",
          description: "We create engaging and creative content that helps businesses connect with their audience.",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/services/content-creative",
        },
        {
          title: "Consulting",
          description:
            "Some problems don't require an agency. I'm here to help you solve them.",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/services/consulting",
        },
      ],
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ],
  mobileExtraLinks: [
    { name: "Press", url: "/press" },
    { name: "Contact", url: "/contact" },
    { name: "Imprint", url: "/imprint" },
    { name: "Sitemap", url: "/sitemap" },
  ],
  auth: {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Get Connected", url: "/signup" },
  },
};

function NavbarMainDemo() {
  return <NavbarMain {...MenuData} />;
}

export { NavbarMainDemo };
