import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';



const Education = () => {
  return (
    <section id="education-about" className="py-20  dark:bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left side - Education */}
          <div className="space-y-8">
            {personalInfo.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-emerald-50 dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="py-2 px-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className="p-3 bg-emerald-100 rounded-full">
                        <GraduationCap className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                        <p className="text-emerald-600 font-medium">{edu.school}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 text-lg dark:text-gray-200">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award size={16} />
                        <span>{edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
