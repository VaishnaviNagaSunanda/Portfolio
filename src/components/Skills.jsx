import React, { useRef } from 'react';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import TiltCard from './TiltCard';

const skillsData = [
    { category: "Languages", items: ["Python", "SQL", "Java (Basics)"] },
    { category: "Tools & Cloud", items: ["Excel", "Power BI", "AWS (EC2, S3, IAM)", "Tableau"] },
    { category: "Web Dev", items: ["HTML", "CSS", "JavaScript"] },
    { category: "Soft Skills", items: ["Problem Solving", "Communication", "Team Work", "Attention to Detail"] }
];

// Utility function for wrapping logic
const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ParallaxText = ({ children, baseVelocity = 100 }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <motion.div className="flex w-fit" style={{ x }}>
            {children}
            {children}
        </motion.div>
    );
};

const Skills = ({ theme }) => {
    const spotlightColor = theme === 'light'
        ? "rgba(255, 182, 193, 0.4)"
        : "rgba(34, 197, 94, 0.4)";

    const images = [
        { src: "css3.svg", label: "CSS3", removeBg: false },
        { src: "html-5.svg", label: "HTML5", removeBg: false },
        { src: "js.svg", label: "JavaScript", removeBg: false },
        { src: "tableau.png", label: "Tableau", removeBg: false },
        { src: "powerbi.png", label: "PowerBI", removeBg: false },
        { src: "tailwind-css.svg", label: "Tailwind CSS", removeBg: false },
        { src: "java.svg", label: "Java", removeBg: false },
        { src: "sql.png", label: "SQL", removeBg: false },
        { src: "python.svg", label: "Python", removeBg: false },
    ];

    // Duplicate 2x — ParallaxText renders children twice internally, giving 4 sets total for seamless looping
    const duplicatedImages = [...images, ...images];

    return (
        <section id="skills" className="py-20 bg-[#f5f2eb] dark:bg-[#0f0f0f] transition-colors duration-300">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-16 text-center text-charcoal dark:text-white"
                >
                    My Skills
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((group, index) => (
                        <TiltCard key={group.category} className="h-full">
                            <SpotlightCard
                                spotlightColor={spotlightColor}
                                className="h-full p-6 rounded-2xl bg-cream dark:bg-card-dark border border-beige/30 dark:border-white/5 transition-all group"
                            >
                                <h3 className="text-xl font-semibold mb-6 text-brown dark:text-neon-green border-b border-beige dark:border-gray-800 pb-2 inline-block">
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {group.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-beige/20 dark:bg-white/5 text-charcoal dark:text-gray-300 text-sm px-3 py-1 rounded-md font-medium group-hover:text-brown dark:group-hover:text-neon-green transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </TiltCard>
                    ))}
                </div>
            </div>

            <div className="mt-10 w-full max-w-[1400px] h-[100px] overflow-hidden relative bg-transparent py-2 mx-auto">
                <div className="absolute top-0 left-0 w-20 h-full z-10 bg-gradient-to-r from-[#f5f2eb] dark:from-[#0f0f0f] to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-20 h-full z-10 bg-gradient-to-l from-[#f5f2eb] dark:from-[#0f0f0f] to-transparent pointer-events-none" />

                <ParallaxText baseVelocity={1}>
                    {duplicatedImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="bg-cream/80 dark:bg-white/5 border border-brown/10 dark:border-white/5 backdrop-blur-sm group flex flex-col items-center justify-center w-[150px] h-[80px] mx-[10px] rounded-xl flex-shrink-0 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-brown dark:hover:border-neon-green cursor-pointer">
                            {img.removeBg ? (
                                <div className="w-[50px] h-[45px] flex items-center justify-center rounded-lg overflow-hidden dark:bg-white dark:p-0.5">
                                    <img
                                        src={img.src}
                                        alt={img.label}
                                        className="w-full h-full object-contain transition-all duration-300 mix-blend-multiply dark:mix-blend-normal"
                                    />
                                </div>
                            ) : (
                                <img
                                    src={img.src}
                                    alt={img.label}
                                    className="w-[50px] h-[45px] object-contain rounded-xl transition-all duration-300"
                                />
                            )}
                            <p className="mt-2 text-sm font-medium text-charcoal dark:text-gray-300 transition-colors duration-300 group-hover:text-brown dark:group-hover:text-neon-green">
                                {img.label}
                            </p>
                        </div>
                    ))}
                </ParallaxText>
            </div>
        </section>
    );
};

export default Skills;
