'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Section - Mission Transmission Terminal
 * Features: 3D Earth globe (scaffold), glassmorphic form, email integration ready
 */
export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // TODO: Integrate with backend API or email service
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <section id="contact" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'perspective(1000px) rotateX(60deg)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-4xl sm:text-6xl text-plasma-cyan mb-4 text-glow">
            MISSION TRANSMISSION
          </h2>
          <p className="font-space-grotesk text-lg text-titanium">
            Establish communication with Command Saini
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-strong p-8 rounded-2xl">
              <h3 className="font-michroma text-2xl text-plasma-cyan mb-6">CONTACT COORDINATES</h3>
              
              <div className="space-y-6">
                <motion.a
                  href="mailto:peisharsaini@yahoo.com"
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 text-off-white hover:text-plasma-cyan transition-colors group"
                >
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-plasma-cyan/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-michroma text-titanium">EMAIL</div>
                    <div className="font-space-grotesk">peisharsaini@yahoo.com</div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 text-off-white"
                >
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-michroma text-titanium">LOCATION</div>
                    <div className="font-space-grotesk">Mumbai, Maharashtra, India</div>
                  </div>
                </motion.div>

                <motion.a
                  href="https://linkedin.com/in/ishar-singh-saini"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 text-off-white hover:text-plasma-cyan transition-colors group"
                >
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-plasma-cyan/20">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-michroma text-titanium">LINKEDIN</div>
                    <div className="font-space-grotesk">/in/ishar-singh-saini</div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* 3D Earth globe scaffold (replace with react-globe.gl) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-strong p-8 rounded-2xl"
            >
              <div className="aspect-square bg-gradient-to-br from-mach-blue/20 to-plasma-cyan/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for 3D globe */}
                <motion.div
                  className="w-48 h-48 rounded-full border-2 border-plasma-cyan relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-plasma-cyan" />
                  </div>
                  {/* Latitude lines */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 border-t border-plasma-cyan/30"
                      style={{ top: `${(i + 1) * 16.66}%` }}
                    />
                  ))}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space/50 to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-strong p-8 rounded-2xl"
          >
            <h3 className="font-michroma text-2xl text-plasma-cyan mb-6">SEND TRANSMISSION</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-michroma text-titanium mb-2">
                  OPERATOR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-deep-space border border-plasma-cyan/30 rounded-lg text-off-white font-space-grotesk focus:outline-none focus:border-plasma-cyan transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-xs font-michroma text-titanium mb-2">
                  COMMUNICATION CHANNEL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-deep-space border border-plasma-cyan/30 rounded-lg text-off-white font-space-grotesk focus:outline-none focus:border-plasma-cyan transition-colors"
                  placeholder="your.email@domain.com"
                />
              </div>

              <div>
                <label className="block text-xs font-michroma text-titanium mb-2">
                  MESSAGE CONTENT
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-deep-space border border-plasma-cyan/30 rounded-lg text-off-white font-space-grotesk focus:outline-none focus:border-plasma-cyan transition-colors resize-none"
                  placeholder="Enter transmission message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-plasma-cyan to-mach-blue text-deep-space font-michroma font-bold rounded-lg flex items-center justify-center space-x-2 hover:shadow-glow-cyan transition-all disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-deep-space border-t-transparent rounded-full"
                    />
                    <span>TRANSMITTING...</span>
                  </>
                ) : status === 'success' ? (
                  <span>✓ TRANSMISSION SUCCESSFUL</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>SEND TRANSMISSION</span>
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-plasma-cyan font-michroma text-sm"
                >
                  Message received. Await response from Command.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center text-titanium/50 font-michroma text-xs"
        >
          <p className="mb-2">© 2025 ISHAR SINGH SAINI | THE MACH BEYOND</p>
          <p>Built with Next.js, Three.js, Framer Motion & Aerospace Engineering Excellence</p>
        </motion.footer>
      </div>
    </section>
  );
}
