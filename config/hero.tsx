import { FaStar } from "react-icons/fa";

interface Hero {
  badge: {
    title: string;
    color: string;
    href: string;
  };
  description: string;
  ctaButton: {
    label: string;
    href: string;
    variant: "default" | "outline";
  }[];
  flexCards: {
    label: string;
    icon?: React.ElementType;
    description: string;
  }[];
}

export const heroConfig: Hero = {
  badge: {
    title: "Master Modern Web Development",
    color: "#22d3ee",
    href: "/projects",
  },
  description:
    "Build real-world applications, master modern tools, and elevate your front-end development skills with hands-on experience.",
  ctaButton: [
    {
      label: "Get Started",
      href: "/dashboard",
      variant: "default",
    },
    {
      label: "View Projects",
      href: "/projects",
      variant: "outline",
    },
  ],
  flexCards: [
    {
      label: "100+",
      description: "Hands on Project",
    },
    {
      label: "50K+",
      description: "Developers Inspired",
    },
    {
      label: "4.9",
      description: "Average Stars",
      icon: FaStar,
    },
  ],
};
