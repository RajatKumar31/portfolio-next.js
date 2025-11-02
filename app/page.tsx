import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
                    {/* text */}
                    <div className="order-2 text-center xl:order-none xl:text-left">
                        <span className="text-xl">Software Developer</span>
                        <h1 className="h1 mb-6">
                            Hello I'm <br />
                            <span className="text-[#00ff99]">Rajat Kumar</span>
                        </h1>
                        <p className="mb-9 max-w-[500px] text-white/80">
                            I excel at crafting elegant digital experiences and
                            I am proficient in various programming languages and
                            technologies.
                        </p>
                        {/* btn and socials */}
                        <div className="flex flex-col items-center justify-center gap-8 xl:flex-row">
                            <Button
                                variant="outline"
                                size="lg"
                                className="flex items-center gap-2 uppercase"
                            >
                                <span>Download CV</span>
                                <FiDownload className="text-xl" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-[#00ff99] rounded-full flex justify-center items-center text-[#00ff99] text-base hover:bg-[#00ff99] hover:text-[#1c1c22] hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* photo */}
                    <div className="order-1 mb-8 xl:order-none xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
}
