import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Contact = () => {


  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-emerald-600 dark:bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>
        </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            

            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              {/* Email */}
              <div className="w-full md:w-1/2">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 h-full bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-200"
              >
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                  <Mail className="text-emerald-600 dark:text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>
              </div>

              {/* Phone */}
              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 h-full bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-200"
                >
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                    <Phone className="text-emerald-600 dark:text-emerald-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>


            
          </motion.div>

      </div>
    </section>
  );
};

export default Contact;
