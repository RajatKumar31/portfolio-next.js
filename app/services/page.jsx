"use client";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "lorem ipsum dolor sit amet",
        href: "/services/web-development",
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: "lorem ipsum dolor sit amet",
        href: "/services/web-development",
    },
    {
        num: "03",
        title: "Web Development",
        description: "lorem ipsum dolor sit amet",
        href: "/services/web-development",
    },
    {
        num: "04",
        title: "Web Development",
        description: "lorem ipsum dolor sit amet",
        href: "/services/web-development",
    },
    {
        num: "05",
        title: "Web Development",
        description: "lorem ipsum dolor sit amet",
        href: "/services/web-development",
    },
];

const Services = () => {
    return (
        <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeIn",
                        },
                    }}
                    className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="group flex flex-1 flex-col justify-center gap-6"
                            >
                                {/* Top */}
                                <div className="flex w-full items-center justify-between">
                                    <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.href}
                                        className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white transition-all duration-500 group-hover:bg-[#00ff99] hover:-rotate-45"
                                    >
                                        <BsArrowRight className="text-3xl text-[#1c1c22]" />
                                    </Link>
                                </div>
                                {/* Title */}
                                <h2 className="text-[42px] leading-none font-bold text-white transition-all duration-500 group-hover:text-[#00ff99]">
                                    {service.title}
                                </h2>
                                {/* Description */}
                                <p>{service.description}</p>
                                {/* Border */}
                                <div className="w-full border-b border-white/20"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
