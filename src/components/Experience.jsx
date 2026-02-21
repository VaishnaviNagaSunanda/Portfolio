import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-[#f5f2eb] dark:bg-[#0f0f0f] transition-colors duration-300">
            <div className="container">
                <h2 className="text-4xl font-bold mb-16 text-center text-charcoal dark:text-white">Experience & Education</h2>

                <div className="max-w-3xl mx-auto space-y-12">
                    {/* Internship 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="border-l-4 border-brown dark:border-neon-green pl-6 py-2"
                    >
                        <span className="text-sm font-bold text-light-brown dark:text-neon-green uppercase tracking-wider">06/2025 – 08/2025</span>
                        <h3 className="text-2xl font-bold text-charcoal dark:text-white mt-2">Data Analytics Intern</h3>
                        <p className="text-lg font-medium text-brown dark:text-gray-300">SmartBridge (in collaboration with APSCHE)</p>
                        <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-400 list-disc list-inside">
                            <li>Worked on data analytics projects using Tableau to visualize and interpret real-time datasets.</li>
                            <li>Designed interactive dashboards to track insights and improve data-driven decision-making.</li>
                            <li>Gained hands-on experience in data cleaning, visualization, and storytelling techniques.</li>
                        </ul>
                    </motion.div>

                    {/* Internship 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="border-l-4 border-beige dark:border-white/20 pl-6 py-2"
                    >
                        <span className="text-sm font-bold text-light-brown dark:text-neon-green uppercase tracking-wider">02/2024 – 04/2024</span>
                        <h3 className="text-2xl font-bold text-charcoal dark:text-white mt-2">AWS Cloud Computing Intern</h3>
                        <p className="text-lg font-medium text-brown dark:text-gray-300">Adhoc Network Tech</p>
                        <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-400 list-disc list-inside">
                            <li>Deployed and configured AWS services such as EC2, S3, and IAM to design secure, scalable cloud architectures.</li>
                            <li>Optimized cloud performance and cost efficiency while collaborating with the team on real-time deployment projects.</li>
                        </ul>
                    </motion.div>

                    {/* Education 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="border-l-4 border-beige/50 dark:border-white/10 pl-6 py-2"
                    >
                        <span className="text-sm font-bold text-light-brown dark:text-neon-green uppercase tracking-wider">08/2024 – Present</span>
                        <h3 className="text-xl font-bold text-charcoal dark:text-white mt-2">MCA (Masters Of Computer Applications)</h3>
                        <p className="text-lg font-medium text-brown dark:text-gray-300">Swarnandhra College of Engineering and Technology</p>
                        <p className="mt-2 text-gray-700 dark:text-gray-400">Narsapuram</p>
                    </motion.div>

                    {/* Education 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="border-l-4 border-beige/30 dark:border-white/5 pl-6 py-2"
                    >
                        <span className="text-sm font-bold text-light-brown dark:text-neon-green uppercase tracking-wider">08/2021 – 05/2024</span>
                        <h3 className="text-xl font-bold text-charcoal dark:text-white mt-2">B.Sc (Bachelore Of Computer Science)</h3>
                        <p className="text-lg font-medium text-brown dark:text-gray-300">Aditya Degree College, Palakol</p>
                        <p className="mt-2 text-gray-700 dark:text-gray-400">Graduated in Data Science | CGPA: 8.9</p>
                    </motion.div>

                    {/* Certificates */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="border-l-4 border-beige/10 dark:border-white/5 pl-6 py-2"
                    >
                        <span className="text-sm font-bold text-light-brown dark:text-neon-green uppercase tracking-wider">Certifications</span>
                        <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-400 list-disc list-inside">
                            <li>Cisco Cyber Security</li>
                            <li>AWS Solution Architecture Job Simulation</li>
                            <li>Foundations of Programming with Python - Exceler</li>
                            <li>DSA with Java</li>
                            <li>NPTEL Machine Learning</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
