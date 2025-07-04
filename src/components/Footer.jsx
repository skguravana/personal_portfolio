import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 bg-emerald-50 text-white py-5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Name and Title */}
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-emerald-400 mb-1">
              {personalInfo.name}
            </h3>
            <p className="text-gray-900 dark:text-gray-400 text-sm md:text-base">{personalInfo.title}</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-6">
            <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Linkedin size={24} />
              </motion.a>
          </div>

          {/* Divider */}
          <div className="mt-5 border-t border-gray-800 pt-3">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Developed By {personalInfo.name}. 
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
