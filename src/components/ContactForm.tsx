import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Formspree endpoint using environment variable
      const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
      if (!formId) {
        throw new Error('Formspree form ID not configured');
      }
      
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again.' 
      });
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <animated.div style={formAnimation} className="max-w-2xl mx-auto">
      <div className="glass-effect rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 flex items-center justify-center">
            <Mail size={24} className="text-white" />
          </div>
          <h2 className="text-3xl font-display font-bold gradient-text mb-2">
            Get In Touch
          </h2>
          <p className="text-neutral-600 font-elegant">
            Have a project in mind? Let's create something amazing together.
          </p>
          <p className="text-sm text-neutral-500 font-elegant mt-2">
            Click the Email button above to scroll here, or fill out the form below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-elegant font-medium text-neutral-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 font-elegant"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-elegant font-medium text-neutral-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 font-elegant"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-elegant font-medium text-neutral-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 font-elegant"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-elegant font-medium text-neutral-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 font-elegant resize-none"
              placeholder="Tell me about your project, ideas, or just say hello!"
            />
          </div>

          {/* Status Message */}
          {status.message && (
            <div className={`flex items-center space-x-2 p-4 rounded-lg ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : status.type === 'error'
                ? 'bg-red-50 text-red-800 border border-red-200'
                : 'bg-blue-50 text-blue-800 border border-blue-200'
            }`}>
              {status.type === 'success' && <CheckCircle size={20} />}
              {status.type === 'error' && <AlertCircle size={20} />}
              {status.type === 'loading' && <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />}
              <span className="font-elegant">{status.message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={!isFormValid || status.type === 'loading'}
            className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-elegant font-medium transition-all duration-200 ${
              isFormValid && status.type !== 'loading'
                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 hover:scale-105 shadow-lg hover:shadow-xl'
                : 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
            }`}
          >
            <Send size={20} />
            <span>
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </span>
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-500 font-elegant">
            Or reach out directly at{' '}
            <a 
              href="mailto:hello@tennyson.live" 
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              hello@tennyson.live
            </a>
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default ContactForm;
