import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ArrowUpRight, ArrowDown } from 'lucide-react';
import smartParkingImg from '../assets/smart_parking.png';
import codeconnectImg from '../assets/codeconnect.png';
import photoboothImg from '../assets/photobooth.png';

const projects = [
    {
        title: "QR-Based Car Parking System",
        description: "A smart parking solution using QR codes to manage vehicle entry and exit efficiently. Features real-time database tracking for parking slots.",
        tags: ["Python", "HTML", "CSS", "SQL"],
        link: "#",
        liveLink: null,
        date: "October 2025",
        image: smartParkingImg
    },
    {
        title: "CodeConnect",
        description: "A full-stack MERN coding platform helping users master algorithms and connect with companies. Features real-time code execution and interview prep.",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        link: "https://github.com/Balaji-Sri-Ram/CodeConnect",
        liveLink: "https://code-connect-sand-eta.vercel.app",
        date: "December 2025",
        image: codeconnectImg
    },
    {
        title: "PhotoBooth Chatbot",
        description: "An engaging AI chatbot for photo booths that interacts with users in real-time. Built with a Python backend and responsive frontend.",
        tags: ["Python", "Flask", "Dialogflow"],
        link: "https://github.com/Balaji-Sri-Ram/PhotoBooth-Chatbot",
        liveLink: "https://photo-booth-chatbot.vercel.app",
        date: "November 2024",
        image: photoboothImg
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <div className="relative w-[85vw] md:w-[700px] lg:w-[750px] h-[50vh] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-brown/10 dark:border-white/10 shadow-xl backdrop-blur-sm group hover:border-black dark:hover:border-neon-green transition-all duration-500">
            {/* Background Image */}
            <div className="absolute inset-0 h-[45%] md:h-[60%] overflow-hidden">
                <div className="absolute inset-0 bg-brown/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 right-0 h-[55%] md:h-[45%] bg-white dark:bg-[#121212] border-t border-brown/10 dark:border-white/10 p-5 md:p-8 flex flex-col justify-between z-20 group-hover:h-[60%] md:group-hover:h-[50%] transition-all duration-300">
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-brown dark:text-neon-green font-mono text-sm tracking-wide font-semibold">
                            {project.date}
                        </span>
                        <div className="flex gap-4">
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link relative text-charcoal/70 dark:text-white/70 hover:text-black dark:hover:text-neon-green transition-colors"
                                >
                                    <ArrowUpRight size={20} />
                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-cream bg-charcoal dark:bg-black rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                        Live Link
                                    </span>
                                </a>
                            )}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link relative text-charcoal/70 dark:text-white/70 hover:text-black dark:hover:text-neon-green transition-colors"
                            >
                                <Github size={20} />
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-cream bg-charcoal dark:bg-black rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                    GitHub
                                </span>
                            </a>
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white mb-3 leading-tight group-hover:text-black dark:group-hover:text-neon-green transition-colors">
                        {project.title}
                    </h2>

                    <p className="text-brown/80 dark:text-gray-400 text-sm md:text-base line-clamp-2 md:line-clamp-3 leading-relaxed mb-4">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-black dark:bg-neon-green/5 text-white dark:text-neon-green rounded-full border-none dark:border dark:border-neon-green/20 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Detect screen width to adjust scroll range
    const [scrollRange, setScrollRange] = useState(["1%", "-52%"]);

    useEffect(() => {
        const updateRange = () => {
            if (window.innerWidth < 768) {
                setScrollRange(["1%", "-55%"]);
            } else {
                setScrollRange(["1%", "-52%"]);
            }
        };

        updateRange();
        window.addEventListener('resize', updateRange);
        return () => window.removeEventListener('resize', updateRange);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], scrollRange);

    return (
        <section ref={targetRef} id="projects" className="relative h-[300vh] bg-white dark:bg-black transition-colors duration-300">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* Large Background Title */}
                <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-0">
                    <h2 className="text-[12vw] font-bold text-brown/[0.05] dark:text-white/[0.03] select-none leading-none tracking-tighter transition-colors duration-300">
                        SELECTED <br /> WORKS
                    </h2>
                </div>

                {/* Horizontal Scroll Track */}
                <motion.div
                    style={{ x }}
                    className="flex gap-8 md:gap-12 pl-[5vw] pr-[50vw] items-center z-10"
                >
                    {/* Intro Card */}
                    <div className="w-[85vw] md:w-[400px] lg:w-[450px] flex-shrink-0 flex flex-col justify-center text-charcoal dark:text-white p-6 md:p-12 transition-colors duration-300">
                        <div className="w-12 h-1 bg-brown dark:bg-neon-green mb-6 transition-colors duration-300"></div>
                        <h3 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Recent <br />
                            <span className="text-brown/60 dark:text-gray-500 transition-colors duration-300">Projects</span>
                        </h3>
                        <p className="text-brown/80 dark:text-gray-400 text-lg mb-8 transition-colors duration-300">
                            Solving complex problems with elegant code.
                        </p>
                        <div className="flex items-center gap-2 text-sm font-mono text-brown dark:text-neon-green animate-bounce-x transition-colors duration-300">
                            <span>SCROLL TO EXPLORE</span>
                            <ArrowDown className="w-4 h-4" />
                        </div>
                    </div>

                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
