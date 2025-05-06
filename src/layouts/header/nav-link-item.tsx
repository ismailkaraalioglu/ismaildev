"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  link: { id: string; href: string; label: string };
}

const NavLinkItem: FC<Props> = ({ link }) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <Button
      key={link.id}
      asChild
      size="sm"
      variant="ghost"
      className={cn(
        "text-foreground/50",
        isActive(link.href) && "text-foreground"
      )}
    >
      <Link href={link.href} className="text-sm">
        {link.label}
      </Link>
    </Button>
  );
};

export default NavLinkItem;
