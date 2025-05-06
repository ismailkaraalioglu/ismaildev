import Avatar from "./avatar";
import NavLinkItem from "./nav-link-item";
import { HEADER_NAV_LINKS } from "@/lib/constants";

const Header = () => {
  return (
    <header className="border-border/50 border-b">
      <div className="flex flex-row items-center justify-between px-8 py-4">
        <div className="flex flex-row items-center gap-6">
          <Avatar />
          <div className="flex gap-1">
            {HEADER_NAV_LINKS.map((link) => (
              <NavLinkItem key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
