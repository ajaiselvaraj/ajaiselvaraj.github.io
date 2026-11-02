import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Github, Linkedin, Twitter, Instagram, Send, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'All required fields must be completed.' });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please provide a valid email address.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      await emailjs.send(
        'service_jjmvcbq',
        'template_ffnyhok',
        {
          from_name: formData.name,
          to_name: 'Ajai Selvaraj',
          from_email: formData.email,
          subject: formData.subject || 'Engineering Inquiry from Portfolio',
          message: formData.message,
          reply_to: formData.email,
        },
        'Ix_VOzmLIMam7zMYk'
      );

      setStatus({ type: 'success', message: 'Transmission dispatched successfully. I will respond promptly.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      // Fallback message with direct mailto option
      setStatus({
        type: 'error',
        message: 'Direct transmission encountered a network block. Please reach me directly at ajaiselvaraj2105@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 relative bg-light dark:bg-dark border-t border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono tracking-widest uppercase text-[#777777] dark:text-[#A1A1A6]">
            Section 08 // Direct Communication
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
            Initiate an engineering dialogue.
          </h2>
          <p className="text-sm sm:text-base text-[#777777] dark:text-[#A1A1A6] max-w-2xl font-normal">
            Available for software engineering roles, technical advisory, high-performance systems development, and collaborative AI research.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-7 rounded-panel liquid-glass border border-black/10 dark:border-white/10 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#111111] dark:bg-[#FFFFFF]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]">
                    Current Availability Status
                  </span>
                </div>
                <div className="text-base font-semibold text-[#111111] dark:text-[#FFFFFF]">
                  Open for Engineering Roles (2026)
                </div>
                <p className="text-xs text-[#777777] dark:text-[#A1A1A6] leading-relaxed">
                  Full-Stack Development, AI Systems Engineering, and Edge/Spatial Computing.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-black/5 dark:border-white/5 text-xs text-[#777777] dark:text-[#A1A1A6]">
                <div className="flex items-center gap-3">
                  <Mail size={15} className="text-[#111111] dark:text-[#FFFFFF] shrink-0" />
                  <a
                    href="mailto:ajaiselvaraj2105@gmail.com"
                    className="hover:text-[#111111] dark:hover:text-[#FFFFFF] transition-colors font-mono"
                  >
                    ajaiselvaraj2105@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={15} className="text-[#111111] dark:text-[#FFFFFF] shrink-0" />
                  <span>Tamil Nadu, India • Available for On-Site & Remote</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={15} className="text-[#111111] dark:text-[#FFFFFF] shrink-0" />
                  <span>Typical Response Latency: Under 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]">
                Professional Profiles
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <a
                  href="https://github.com/ajaiselvaraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-control liquid-glass hover:bg-black/5 dark:hover:bg-white/10 text-[#111111] dark:text-[#FFFFFF] transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ajaiselvaraj-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-control liquid-glass hover:bg-black/5 dark:hover:bg-white/10 text-[#111111] dark:text-[#FFFFFF] transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://x.com/ajaiselvaraj_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-control liquid-glass hover:bg-black/5 dark:hover:bg-white/10 text-[#111111] dark:text-[#FFFFFF] transition-colors"
                >
                  <Twitter size={14} />
                  <span>X / Twitter</span>
                </a>

                <a
                  href="https://www.instagram.com/ajaiselvaraj_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-control liquid-glass hover:bg-black/5 dark:hover:bg-white/10 text-[#111111] dark:text-[#FFFFFF] transition-colors"
                >
                  <Instagram size={14} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Liquid Glass Form */}
          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-panel liquid-glass border border-black/10 dark:border-white/10 shadow-glass-light dark:shadow-glass-dark space-y-6"
            >
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-[#111111] dark:text-[#FFFFFF] tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#777777] dark:text-[#A1A1A6]">
                  Messages are forwarded securely to my inbox.
                </p>
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-control text-xs font-mono ${
                    status.type === 'success'
                      ? 'bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF] border border-black/10 dark:border-white/15'
                      : 'bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FFFFFF] border border-black/10 dark:border-white/15'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]"
                    >
                      Identity / Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-4 py-2.5 rounded-control bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-sm text-[#111111] dark:text-[#FFFFFF] placeholder:text-[#999999] focus:outline-none focus:border-[#111111] dark:focus:border-[#FFFFFF] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]"
                    >
                      Electronic Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. elena@laboratory.org"
                      className="w-full px-4 py-2.5 rounded-control bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-sm text-[#111111] dark:text-[#FFFFFF] placeholder:text-[#999999] focus:outline-none focus:border-[#111111] dark:focus:border-[#FFFFFF] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]"
                  >
                    Context / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Systems Engineering Position / Research Inquiries"
                    className="w-full px-4 py-2.5 rounded-control bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-sm text-[#111111] dark:text-[#FFFFFF] placeholder:text-[#999999] focus:outline-none focus:border-[#111111] dark:focus:border-[#FFFFFF] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#A1A1A6]"
                  >
                    Message Specification *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Outline the scope, technical parameters, or role details..."
                    className="w-full px-4 py-2.5 rounded-control bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-sm text-[#111111] dark:text-[#FFFFFF] placeholder:text-[#999999] focus:outline-none focus:border-[#111111] dark:focus:border-[#FFFFFF] transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-xs font-semibold bg-[#111111] text-white dark:bg-[#FFFFFF] dark:text-[#000000] hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
                >
                  <Send size={13} />
                  <span>{isSubmitting ? 'Transmitting Ingestion...' : 'Transmit Inquiry'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
