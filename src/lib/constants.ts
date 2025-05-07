import {
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandVercel,
  IconBrandX,
} from "@tabler/icons-react";

export const HEADER_NAV_LINKS = [
  { id: "1", href: "/projects", label: "Projects" },
  { id: "2", href: "/stack", label: "Stack" },
];

export const FOOTER_NAV_LINKS = [
  // { id: "1", href: "/changelog", label: "Changelog" },
  { id: "2", href: "/projects", label: "Projects" },
  { id: "3", href: "/stack", label: "Stack" },
  // { id: "4", href: "/colophon", label: "Colophon" },
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
    href: "https://www.linkedin.com/in/ismailkaraalioglu",
    icon: IconBrandLinkedin,
    label: "4.352 followers",
  },
  {
    id: "2",
    href: "https://x.com/ismailldev",
    icon: IconBrandX,
    label: "1.250 followers",
  },
  {
    id: "3",
    href: "https://github.com/ismailkaraalioglu",
    icon: IconBrandGithub,
    label: "175 followers",
  },
];

export const EXPERIENCES = [
  {
    id: "1",
    title: "Frontend & Mobile Developer",
    company: "Godot Tech",
    description:
      "I’m currently contributing to the development of cross-platform digital products — from web dashboards to mobile and iOS applications — with a focus on performance, usability, and consistency. I work to enhance user experience and engagement by aligning product features with user needs, ensuring seamless functionality across devices through thoughtful design and engineering.",
    from: "Sep 2024",
    to: null,
  },
  {
    id: "2",
    title: "Frontend & Mobile Developer",
    company: "Travel Dynamo",
    description:
      "Worked on the web and mobile applications of at that platform that enables creating, managing, and presenting custom travel plans and itineraries. I worked on basic user-facing features, performance optimizations, user security, booking and payment integrations.",
    from: "Sep 2024",
    to: "Apr 2025",
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "Key Digital Platform",
    description:
      "I played a key role in building and optimizing complex web applications — from e-commerce platforms to sustainability-focused systems. By combining technical precision with user-centered thinking, I led projects to early delivery, enhanced system stability, and improved user satisfaction. Working closely with designers and product teams, I helped turn Figma files into functional, responsive interfaces — always with a focus on clarity, speed, and scalability.",
    from: "Oct 2022",
    to: "Sep 2024",
  },
  {
    id: "4",
    title: "Frontend Developer",
    company: "masa.tech",
    description:
      "I worked on building clean and responsive web interfaces, actively collaborating with designers and developers to deliver functional, user-friendly products. I supported the entire development process with consistent communication and attention to detail.",
    from: "Sep 2021",
    to: "Oct 2022",
  },
  {
    id: "5",
    title: "Frontend Developer",
    company: "Freelancer",
    description:
      "I delivered fast, interactive, and visually polished web experiences. From fluid animations to 3D model integration, I focused on creating engaging interfaces that not only looked great but also improved performance and user satisfaction.",
    from: "Dec 2019",
    to: "Sep 2021",
  },
];
