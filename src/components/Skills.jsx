import { motion } from 'framer-motion';
import { Code, Server, Database, Computer, Lightbulb } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: personalInfo.skills.programming,
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Frontend',
      icon: Computer,
      skills: personalInfo.skills.frontend,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: personalInfo.skills.backend,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Database',
      icon: Database,
      skills: personalInfo.skills.database,
      color: 'from-purple-400 to-purple-600'
    },
    
    {
      title: 'Tools',
      icon: Lightbulb,
      skills: personalInfo.skills.tools,
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-emerald-400">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium dark:bg-emerald-100 hover:bg-emerald-200 hover:text-emerald-700 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;