import {
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandNextjs,
  IconBrandVercel,
  IconBrandX,
} from "@tabler/icons-react";

export const HEADER_NAV_LINKS = [
  { id: "1", href: "/projects", label: "Projects" },
  { id: "2", href: "/changelog", label: "Changelog" },
];

export const FOOTER_NAV_LINKS = [
  { id: "1", href: "/changelog", label: "Changelog" },
  { id: "2", href: "/projects", label: "Projects" },
  { id: "3", href: "/stack", label: "Stack" },
  { id: "4", href: "/colophon", label: "Colophon" },
];

export const FOOTER_SITE_CREDITS = [
  {
    id: "1",
    label: "Built with",
    href: "https://nextjs.org",
    icon: IconBrandNextjs,
  },
  {
    id: "2",
    label: "Deployed on",
    href: "https://www.vercel.com",
    icon: IconBrandVercel,
  },
  {
    id: "3",
    label: "Source on",
    href: "https://github.com/ismailkaraalioglu/ismaildev",
    icon: IconBrandGithubFilled,
  },
];

export const THEME_OPTIONS = [
  { id: "1", label: "Light", value: "light" },
  { id: "2", label: "Dark", value: "dark" },
  { id: "3", label: "System", value: "system" },
];

export const SOCIALS = [
  {
    id: "1",
    href: "https://x.com/ismailldev",
    icon: IconBrandX,
    label: "1.250 followers",
  },
  {
    id: "2",
    href: "https://github.com/ismailkaraalioglu",
    icon: IconBrandGithub,
    label: "175 followers",
  },
];
