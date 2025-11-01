import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 text-white xl:py-12">
            <div className="container mx-auto flex items-center justify-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Rajat Kumar<span className="text-[#00ff99]">.</span>
                    </h1>
                </Link>

                {/* desktop nav & hire me button */}
                <div className="hidden items-center gap-8 xl:flex">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* desktop nav & hire me button */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
