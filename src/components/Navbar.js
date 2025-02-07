import { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { darkMode, toggleTheme } = useTheme();

    const menuItems = [
        { title: 'Home', to: 'welcome' },
        { title: 'About', to: 'about' },
        { title: 'Skills', to: 'skills' },
        { title: 'Projects', to: 'projects' },
        { title: 'Contact', to: 'contact' },
    ];

    return (
        <nav className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 py-4 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Naga Manasa Bandaru
                        </h1>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.title}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-md transition-colors"
                                aria-label="Toggle theme"
                            >
                                {darkMode ? (
                                    <SunIcon className="h-5 w-5" />
                                ) : (
                                    <MoonIcon className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                        >
                            {isOpen ? (
                                <XMarkIcon className="block h-6 w-6" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.title}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                aria-label="Toggle theme"
                            >
                                <div className="flex items-center">
                                    {darkMode ? (
                                        <>
                                            <SunIcon className="h-5 w-5 mr-2" />
                                            Light Mode
                                        </>
                                    ) : (
                                        <>
                                            <MoonIcon className="h-5 w-5 mr-2" />
                                            Dark Mode
                                        </>
                                    )}
                                </div>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;