import { motion } from 'framer-motion';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import AtoZcart from '../assets/atozmart.png';
import LadiesHostel from "../assets/ladies hostel.png"
import ResumeBuilder from "../assets/resume.png"
import KarthikeyaFlex from "../assets/flex.png"
import LMS from "../assets/codeenz.png"
import {Tooltip} from "@mui/material"

function Projects() {
    const projects = [
        {
            title: 'A to Z E-Commerce',
            description: 'Developed a full-stack e-commerce platform with user authentication, product management, secure payments, and an intuitive shopping experience.',
            technologies: ['React.js', 'Firebase', 'Material-UI', 'Redux'],
            github: 'https://github.com/eswarpavan664/ATOZAPP',
            live: 'https://atozmart.netlify.app/',
            image: AtoZcart
        },
        {
            title: 'Ashray Ladies Hostel',
            description: 'Developed a hostel management system enabling online booking, resident tracking, payment processing, and admin control for seamless operations.',
            technologies: ['React.js', 'Firebase', 'Material-UI', 'Redux'],
            github: 'https://github.com/eswarpavan664/Ashrayladieswebsite',
            live: 'https://ashrayladieshostel.netlify.app/',
            image: LadiesHostel
        },
        {
            title: 'Resume Builder',
            description: 'Developed a dynamic web tool for generating professional resumes with customizable templates, real-time preview, and PDF export functionality.',
            technologies: ['React.js', 'Firebase', 'Material-UI', 'Redux'],
            github: 'https://github.com/eswarpavan664/Resume',
            live: 'https://quizzical-ride-42ae61.netlify.app/',
            image: ResumeBuilder
        },
        {
            title: 'Karthikeya Flex',
            description: 'Developed an online flex printing service with customizable templates, order management, price estimation, and secure online payment integration.',
            technologies: ['React.js', 'Firebase', 'Material-UI', 'Redux'],
            github: 'https://github.com/eswarpavan664/ProjectCards',
            live: 'https://benevolent-valkyrie-654765.netlify.app/',
            image: KarthikeyaFlex
        },
        {
            title: 'LMS (Learning Management System)',
            description: 'Developed a platform for course management, student enrollment, progress tracking, and interactive learning with quizzes and certifications.',
            technologies: ['React.js', 'Firebase', 'Material-UI', 'Redux'],
            github: 'https://github.com/eswarpavan664/CSCODENZLMS',
            live: 'https://cscodenzlms.netlify.app/',
            image: LMS
        }
    ];

    return (
        <section id="projects" className="py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                        Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative aspect-w-16 aspect-h-9">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6">
                                <Tooltip title={project.title}>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </Tooltip>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full transition-colors duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                                    >
                                        <CodeBracketIcon className="h-5 w-5" />
                                        <span>GitHub</span>
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                                    >
                                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;