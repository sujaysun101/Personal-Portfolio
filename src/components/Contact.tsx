import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black bg-opacity-20">
      <div className="container mx-auto px-6">
        <div className="section-fade">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, 
                  collaborating on exciting projects, or simply connecting 
                  with fellow developers, researchers, and engineers. Feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                    <Mail className="text-blue-400" size={18} />
                  </div>
                  <span className="text-gray-300">sujaysun2025@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                    <Phone className="text-green-400" size={18} />
                  </div>
                  <span className="text-gray-300">+1 (516) 603-6847</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                    <MapPin className="text-red-400" size={18} />
                  </div>
                  <span className="text-gray-300">New York, NY</span>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-6">
                <a
                  href="https://github.com/sujaysun"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center glass-hover transition-all duration-300"
                >
                  <Github className="text-white" size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/sujaysun"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center glass-hover transition-all duration-300"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
              </div>
            </div>
            
            <div className="glass rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 cosmic-gradient text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;