import { motion } from 'framer-motion';
import { 
    CommandLineIcon, 
    CubeIcon, 
    CodeBracketIcon,
    ServerIcon,
    WindowIcon,
    CloudIcon,
    CircleStackIcon,
    PaintBrushIcon,
    BugAntIcon
} from '@heroicons/react/24/outline';

function Skills() {
    const skills = [
        { name: 'Frontend Development', icon: WindowIcon, description: 'React, Next.js, TypeScript' },
        { name: 'Backend Development', icon: ServerIcon, description: 'Node.js, Express, Python' },
        { name: 'Database Management', icon: CircleStackIcon, description: 'MongoDB, PostgreSQL' },
        { name: 'Cloud Services', icon: CloudIcon, description: 'AWS' },
        { name: 'UI/UX Design', icon: PaintBrushIcon, description: 'Figma' },
        { name: 'Version Control', icon: CodeBracketIcon, description: 'Git, GitHub' },
        { name: 'Command Line', icon: CommandLineIcon, description: 'Bash, PowerShell' },
        { name: 'Testing', icon: BugAntIcon, description: 'Unit, Manual, Agile, ETL' }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                        Skills & Technologies
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="p-3 bg-blue-50 dark:bg-gray-700 rounded-lg mb-4">
                                    <skill.icon className="h-8 w-8 text-blue-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                                    {skill.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                                    {skill.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;