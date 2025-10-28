import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto">
        {/* Logo */}
        <Link></Link>
      </div>
    </header>
  );
};

export default Header;
