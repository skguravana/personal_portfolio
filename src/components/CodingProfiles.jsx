import { motion } from 'framer-motion';
import { Code, Trophy, Star, Github, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const CodingProfiles = () => {
  const getIcon = (iconName) => {
    const icons = {
      code: Code,
      trophy: Trophy,
      star: Star,
      github: Github
    };
    return icons[iconName] || Code;
  };

  return (
    <section id="profiles" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Coding Profiles
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.codingProfiles.map((profile, index) => {
            const IconComponent = getIcon(profile.icon);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100"
              >
                <div className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                      <IconComponent className="text-white" size={24} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{profile.platform}</h3>
                  <p className="text-emerald-600 font-medium mb-2">@{profile.username}</p>
                  <p className="text-sm text-gray-900 dark:text-gray-300 mb-4">{profile.stats}</p>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors duration-200"
                  >
                    <span>View Profile</span>
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm passionate about competitive programming and continuously improving my problem-solving skills.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Code Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;