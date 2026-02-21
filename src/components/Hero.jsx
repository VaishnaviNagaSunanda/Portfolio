import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import Img from '../assets/my_pic1.png';

const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? deletingSpeed : typingSpeed, parseInt(Math.random() * 150))); // Added randomness for realism

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed]);

    return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
};

const Hero = ({ theme }) => {
    const imageContainerRef = useRef(null);
    const [glowStyle, setGlowStyle] = useState({ opacity: 0, background: '' });

    // Typing Effect Text
    const typedText = useTypewriter([
        "Full Stack Developer",
        "AI Enthusiast",
        "Creative Technologist",
    ]);

    // Global listener for orbital border glow
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!imageContainerRef.current) return;
            const rect = imageContainerRef.current.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;

            const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
            const imageRadius = rect.width / 2;

            // New request: 1000px from CENTER
            const MAX_DISTANCE = 1000;

            if (distanceFromCenter <= MAX_DISTANCE) {
                // Strength calculation: 1 at center, 0 at 1000px
                let strength = 1 - (distanceFromCenter / MAX_DISTANCE);
                strength = Math.max(0, Math.min(1, strength));

                // 🔄 ANGLE AROUND THE IMAGE (Orbital Logic)
                const angle = Math.atan2(dy, dx);

                // Glow moves around the image edge. 
                const glowRadius = imageRadius + 20;
                const glowX = (rect.width / 2) + Math.cos(angle) * glowRadius;
                const glowY = (rect.height / 2) + Math.sin(angle) * glowRadius;

                // Determine Color based on Theme
                const isLight = theme === 'light';
                const baseColor = isLight ? '255, 182, 193' : '34, 197, 94';

                setGlowStyle({
                    opacity: strength,
                    background: `radial-gradient(circle at ${glowX}px ${glowY}px, rgba(${baseColor}, ${0.8 * strength}), rgba(${baseColor}, 0.3), transparent 70%)`
                });
            } else {
                setGlowStyle({ opacity: 0, background: '' });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleMouseMove);
        };
    }, [theme]);

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 md:pt-20 overflow-hidden relative">
            {/* FORCE Grid 12 Columns for granular control */}
            <div className="container grid grid-cols-12 gap-2 md:gap-12 items-center relative z-10">

                {/* TEXT SECTION: 7 Columns on Mobile, 6 on Desktop */}
                <motion.div
                    className="pl-1 md:pl-16 col-span-7 md:col-span-6"
                    initial={{ opacity: 0, x: 100 }} // Slide in from RIGHT (as requested)
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <span className="text-brown dark:text-neon-green font-medium tracking-wide text-[10px] md:text-base uppercase tracking-widest">
                            Hello, I'm
                        </span>
                        <h1 className="text-xl sm:text-3xl md:text-6xl font-extrabold text-charcoal dark:text-white mt-1 md:mt-4 mb-1 md:mb-2 leading-tight">
                            Vaishnavi Naga Sunanda <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brown to-light-brown dark:from-neon-green dark:to-emerald-400 block md:inline">
                                Parasa
                            </span>
                        </h1>

                        {/* Animated Typing Text */}
                        <div className="text-xs sm:text-lg md:text-3xl font-bold text-gray-600 dark:text-gray-300 mb-3 md:mb-6 h-6 md:h-10 flex flex-wrap items-center">
                            <span className="text-brown dark:text-neon-green font-mono">
                                {typedText}
                            </span>
                        </div>

                        <p className="hidden md:block text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                            Crafting seamless digital experiences with code and creativity.
                            Specializing in <span className="text-brown dark:text-neon-green font-semibold">Web Development</span>, <span className="text-brown dark:text-neon-green font-semibold">AI Integration</span>, and <span className="text-brown dark:text-neon-green font-semibold">Data Analytics</span>.
                        </p>

                        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-1 md:mt-8">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-charcoal dark:bg-neon-green text-white dark:text-black px-3 py-1.5 md:px-8 md:py-3 rounded-full flex items-center justify-center gap-2 font-medium text-[10px] md:text-base hover:bg-brown dark:hover:bg-emerald-400 transition-colors shadow-lg w-fit"
                            >
                                <Mail size={12} className="md:w-[18px] md:h-[18px]" />
                                <span className="hidden md:inline">Contact Me</span>
                                <span className="md:hidden">Contact</span>
                            </motion.a>
                            <motion.a
                                href="/Portfolio/resume.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                download
                                className="border-2 border-charcoal dark:border-neon-green text-charcoal dark:text-neon-green px-3 py-1.5 md:px-8 md:py-3 rounded-full flex items-center justify-center gap-2 font-medium text-[10px] md:text-base hover:bg-charcoal hover:text-white dark:hover:bg-neon-green/10 transition-all w-fit"
                            >
                                <Download size={12} className="md:w-[18px] md:h-[18px]" />
                                Resume
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* IMAGE SECTION: 5 Columns on Mobile, 6 on Desktop */}
                <motion.div
                    className="flex justify-center relative p-1 md:p-[100px] col-span-5 md:col-span-6"
                    initial={{ opacity: 0, x: -100 }} // Slide in from LEFT (as requested)
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    {/* Floating Animation Container */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div
                            ref={imageContainerRef}
                            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 flex items-center justify-center"
                        >
                            {/* Orbital Border Glow */}
                            <div
                                className="absolute rounded-full pointer-events-none transition-opacity duration-150 ease-out -inset-5 md:-inset-10 blur-xl md:blur-2xl"
                                style={{
                                    background: glowStyle.background,
                                    opacity: glowStyle.opacity,
                                    zIndex: -1
                                }}
                            />

                            {/* Static Subtle Glow Background */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brown/10 to-transparent dark:from-neon-green/20 dark:to-transparent blur-lg md:blur-3xl -z-10 animate-pulse"></div>

                            {/* Spinning Gradient Border - Enhanced */}
                            <div className="absolute inset-[-4px] md:inset-[-6px] rounded-full bg-gradient-to-br from-pink-200 via-pink-400 to-pink-700 dark:from-neon-green dark:via-transparent dark:to-emerald-500 animate-spin-slow opacity-80 mix-blend-screen"></div>

                            {/* Profile Image */}
                            <img
                                src={Img}
                                alt="Vaishnavi Naga Sunanda Parasa"
                                className="w-full h-full object-cover rounded-full border-4 border-cream dark:border-dark-bg shadow-2xl relative z-10"
                                style={{ boxShadow: theme === 'dark' ? '0 0 40px rgba(34, 197, 94, 0.2)' : '0 0 30px rgba(180, 140, 90, 0.2)' }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                whileHover={{ scale: 1.2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                style={{ cursor: 'pointer' }}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                <ArrowDown className="animate-bounce text-brown dark:text-neon-green w-6 h-6" />
            </motion.div>
        </section>
    );
};

export default Hero;
