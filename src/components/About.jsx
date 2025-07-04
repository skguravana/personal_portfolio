import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import Education from './Education';
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-emerald-600 dark:bg-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <Education/>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 "
          >
            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
              {personalInfo.about.description}
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Key Highlights</h3>
              <ul className="space-y-3">
                {personalInfo.about.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-900 dark:text-gray-100">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Let's Connect
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;