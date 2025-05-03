import React from "react";
import Link from "next/link";
import {
  IconBrandGithubFilled,
  IconBrandNextjs,
  IconBrandVercel,
} from "@tabler/icons-react";

const navItems = [
  { href: "/changelog", label: "Changelog" },
  { href: "/projects", label: "Projects" },
  { href: "/stack", label: "Stack" },
];

const Footer = () => {
  return (
    <footer className="border-border/50 border-t">
      <div className="py-4">
        <div className="pb-8">
          <div className="">
            <div className="text-muted-foreground border-border/50 flex flex-wrap gap-x-6 gap-y-1 border-b px-8 pb-4 text-sm font-medium">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link key="/colophon" href="/colophon">
                Colophon
              </Link>
            </div>
            <div className="text-muted-foreground px-8 py-4 text-sm">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="https://nextjs.org"
                  target="_blank"
                  rel="nofollow"
                  className="flex items-center gap-1 dark:hover:text-white"
                >
                  Built with <IconBrandNextjs className="size-5" />
                </Link>
                <Link
                  href="https://www.vercel.com"
                  target="_blank"
                  rel="nofollow"
                  className="flex items-center gap-1 dark:hover:text-white"
                >
                  Deployed on <IconBrandVercel className="size-4" />
                </Link>
                <Link
                  href="https://github.com/ismailkaraalioglu/ismaildev"
                  target="_blank"
                  rel="nofollow"
                  className="flex items-center gap-1 dark:hover:text-white"
                >
                  Source on <IconBrandGithubFilled className="size-4" />
                </Link>
                <div className="grow" />
                {/* <ThemeToggle hideIndicator /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
