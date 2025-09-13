import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const ProfileSection: React.FC = () => {

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 400,
  });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 600,
  });

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/tennysonhull',
      color: 'hover:text-interactive-primary',
      isExternal: true
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/tennysonhull',
      color: 'hover:text-interactive-secondary',
      isExternal: true
    },
    {
      name: 'Email',
      icon: Mail,
      url: '#contact',
      color: 'hover:text-interactive-accent',
      isExternal: false,
      onClick: handleEmailClick
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto text-center w-full">
        <animated.div style={imageAnimation} className="mb-8">
          <div className="relative inline-block">
            {/* Profile Picture */}
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/images/tennyson.flow.jpg" 
                  alt="Tennyson Hull" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating decorative elements around profile */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-interactive-accent/80 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-interactive-primary/80 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-interactive-secondary/80 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </animated.div>

        <animated.div style={textAnimation} className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold gradient-text mb-4 px-2" style={{ lineHeight: '1.5' }}>
            Tennyson Hull
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-content-secondary font-elegant font-light max-w-2xl mx-auto leading-relaxed px-4">
            Creative Developer & Digital Architect
          </p>
          
          <p className="text-base sm:text-lg text-content-muted font-elegant max-w-3xl mx-auto leading-relaxed px-4">
            Crafting elegant digital experiences with a passion for innovation and attention to detail. 
            Building the future, one pixel at a time.
          </p>

          {/* Social Links */}
          <animated.div style={textAnimation} className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 mt-8 px-4">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              
              if (link.isExternal) {
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full glass-effect transition-all duration-300 ${link.color} hover:scale-105 w-full sm:w-auto justify-center sm:justify-start`}
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <IconComponent size={18} className="sm:w-5 sm:h-5" />
                    <span className="font-elegant font-medium text-sm sm:text-base">{link.name}</span>
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity sm:w-3.5 sm:h-3.5" />
                  </a>
                );
              } else {
                return (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className={`group flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full glass-effect transition-all duration-300 ${link.color} hover:scale-105 w-full sm:w-auto justify-center sm:justify-start`}
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <IconComponent size={18} className="sm:w-5 sm:h-5" />
                    <span className="font-elegant font-medium text-sm sm:text-base">{link.name}</span>
                    <Mail size={12} className="opacity-0 group-hover:opacity-100 transition-opacity sm:w-3.5 sm:h-3.5" />
                  </button>
                );
              }
            })}
          </animated.div>
        </animated.div>
      </div>
    </section>
  );
};

export default ProfileSection;
