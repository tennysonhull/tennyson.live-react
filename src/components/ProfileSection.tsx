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

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/tennysonhull',
      color: 'hover:text-primary-600 dark:hover:text-primary-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/tennysonhull',
      color: 'hover:text-secondary-600 dark:hover:text-secondary-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hello@tennyson.live',
      color: 'hover:text-accent-600 dark:hover:text-accent-400'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <animated.div style={imageAnimation} className="mb-8">
          <div className="relative inline-block">
            {/* Profile Picture */}
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 dark:from-primary-600 dark:via-secondary-600 dark:to-accent-600 regal:from-regal-400 regal:via-regal-500 regal:to-regal-600 dreamy:from-dreamy-400 dreamy:via-dreamyBlue-400 dreamy:to-dreamyPurple-400 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/images/tennyson.flow.jpg" 
                  alt="Tennyson Hull" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating decorative elements around profile */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400/30 dark:bg-accent-500/30 regal:bg-regal-400/30 dreamy:bg-dreamy-400/30 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400/30 dark:bg-primary-500/30 regal:bg-regal-500/30 dreamy:bg-dreamyBlue-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-secondary-400/30 dark:bg-secondary-500/30 regal:bg-regal-600/30 dreamy:bg-dreamyPurple-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </animated.div>

        <animated.div style={textAnimation} className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
            Tennyson Hull
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 font-elegant font-light max-w-2xl mx-auto leading-relaxed">
            Creative Developer & Digital Architect
          </p>
          
          <p className="text-lg text-neutral-500 dark:text-neutral-400 font-elegant max-w-3xl mx-auto leading-relaxed">
            Crafting elegant digital experiences with a passion for innovation and attention to detail. 
            Building the future, one pixel at a time.
          </p>

          {/* Social Links */}
          <animated.div style={textAnimation} className="flex justify-center space-x-6 mt-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-full glass-effect transition-all duration-300 ${link.color} hover:scale-105`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <IconComponent size={20} />
                  <span className="font-elegant font-medium">{link.name}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              );
            })}
          </animated.div>
        </animated.div>
      </div>
    </section>
  );
};

export default ProfileSection;
