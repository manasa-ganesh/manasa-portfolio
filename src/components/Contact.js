import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

function Contact() {
    return (
        <section id="contact" className="py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                        Get in Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 transition-colors duration-300"
                    >
                        <p className="text-gray-600 dark:text-gray-300 text-lg text-center mb-8 transition-colors duration-300">
                            I'm always open to new opportunities and collaborations. Feel free to reach out!
                        </p>

                        <div className="flex flex-col space-y-6">
                            <a
                                href="mailto:manasaganesh1435@gmail.com"
                                className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                            >
                                <EnvelopeIcon className="h-6 w-6" />
                                <span>manasaganesh1435@gmail.com</span>
                            </a>

                            <a
                                href="https://github.com/manasa-ganesh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                            >
                                <CodeBracketIcon className="h-6 w-6" />
                                <span>GitHub Profile</span>
                            </a>

                            <a
                                href="http://www.linkedin.com/in/bandaru-nagamanasa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                            >
                                <GlobeAltIcon className="h-6 w-6" />
                                <span>LinkedIn Profile</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;