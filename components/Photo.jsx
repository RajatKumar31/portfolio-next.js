"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="relative h-full w-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2,
                        duration: 0.4,
                        ease: "easeIn",
                    },
                }}
            >
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    }}
                    className="h-[298px] w-[298px] mix-blend-lighten xl:h-[498px] xl:w-[498px]"
                >
                    <Image
                        src="/assets/photo.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain"
                    />
                </motion.div>

                {/* Circle */}
            </motion.div>
        </div>
    );
};

export default Photo;
