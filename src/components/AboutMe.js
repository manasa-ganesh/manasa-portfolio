import { motion } from 'framer-motion';
import { 
    AcademicCapIcon, 
    CodeBracketIcon, 
    LightBulbIcon, 
    RocketLaunchIcon,
    CommandLineIcon,
    BookOpenIcon,
    CheckBadgeIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline';
import profileImage from '../assets/WhatsApp Image 2025-02-06 at 8.37.01 PM.jpeg';

function AboutMe() {
    const highlights = [
        { 
            icon: AcademicCapIcon, 
            title: "Education",
            description: "Masters in Computer Science, University of Texas at Arlington"
        },
        { 
            icon: GlobeAltIcon, 
            title: "Experience",
            description: "Interned as a Software Developer at Eunimart Omnichannel Pvt. Ltd."
        }
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                        About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative">
                            {/* Background decoration */}
                            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 blur-xl"></div>
                            
                            {/* Image container */}
                            <div className="relative w-full max-w-[250px] mx-auto aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-xl">
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="object-cover w-full h-full rounded-lg transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-8"
                    >
                         {/* Highlights Grid */}
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <item.icon className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                                Hello, I'm Manasa
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                                Hi, I’m Naga Manasa Bandaru, a Full-Stack Developer and Computer Science graduate student at the University of Texas at Arlington (UTA). I hold a B.Tech in Information Technology from Vignan’s Institute of Engineering for Women and have industry experience as a Software Developer at Eunimart Omnichannel Pvt. Ltd., an e-commerce solutions company.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                            With strong problem-solving skills, I specialize in building scalable, efficient software solutions across the stack. My expertise includes system design, performance optimization, and data-driven development, ensuring seamless and high-quality applications. I enjoy working on challenging projects that push the boundaries of technology and drive innovation.
                            </p>
                        </div>

                       

                        {/* Call to Action */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <a
                                href="#projects"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                            >
                                View CV
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;