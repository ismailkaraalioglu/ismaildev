"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Avatar from "./avatar";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className="border-border/50 border-b">
      <div className="flex flex-row items-center justify-between px-8 py-4">
        <div className="flex items-center gap-6">
          <Avatar />
          <div className="flex gap-1">
            <Button
              asChild
              size="sm"
              variant="ghost"
              className={cn(
                "text-foreground/50",
                isActive("/projects") && "text-foreground"
              )}
            >
              <Link href="/projects" className="!text-sm">
                Projects
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="ghost"
              className={cn(
                "text-foreground/50",
                isActive("/changelog") && "text-foreground"
              )}
            >
              <Link href="/changelog" className="!text-sm">
                Changelog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
