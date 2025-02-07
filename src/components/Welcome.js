import { motion } from 'framer-motion';

function Welcome() {
    return (
        <section id="welcome" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300" />
            
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                        Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Manasa</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                        Full Stack Developer | UI/UX Designer | Problem Solver
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <a
                            href="#contact"
                            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </motion.div>

                {/* Animated background shapes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                width: Math.random() * 300 + 100,
                                height: Math.random() * 300 + 100,
                                borderRadius: '40%',
                                background: `rgba(${Math.random() * 50 + 20}, ${Math.random() * 50 + 20}, ${Math.random() * 100 + 155}, 0.1)`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                x: [0, 100, 0],
                                y: [0, 100, 0],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: Math.random() * 20 + 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Welcome;