import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { FOOTER_NAV_LINKS, FOOTER_SITE_CREDITS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="border-border/50 border-t">
      <div className="py-4">
        <div className="pb-8">
          <div className="">
            <div className="text-muted-foreground border-border/50 flex flex-wrap gap-x-6 gap-y-1 border-b px-8 pb-4 text-sm font-medium">
              {FOOTER_NAV_LINKS.map((link) => (
                <Link key={link.id} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="text-muted-foreground px-8 py-4 text-sm">
              <div className="flex flex-wrap items-center gap-4">
                {FOOTER_SITE_CREDITS.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="nofollow"
                    className="flex items-center gap-1 dark:hover:text-white"
                  >
                    {item.label} <item.icon className="size-5" />
                  </Link>
                ))}
                <div className="grow" />
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
