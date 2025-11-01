"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay: 1,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    }}
                    className="bg pointer-events-none fixed top-0 h-screen w-screen bg-[#1c1c22]"
                />
                {children}
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;

// --background: #1c1c22;
