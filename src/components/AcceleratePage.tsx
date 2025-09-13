import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import BackButton from './BackButton';
import ThemeToggle from './ThemeToggle';

const AcceleratePage: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 100,
  });

  const contentFadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 300,
  });

  const buttonFadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 500,
  });

  return (
    <>
      <Helmet>
        <title>A Living Commitment - Support Tennyson Hull</title>
        <meta name="description" content="Support Tennyson Hull's creative journey and help accelerate the development of tools, communities, and initiatives that empower others and create positive change." />
        <meta name="keywords" content="support, creative journey, community building, digital tools, empowerment, positive change, crowdfunding" />
        <link rel="canonical" href="https://tennyson.live/accelerate" />
        
        <meta property="og:title" content="A Living Commitment - Support Tennyson Hull" />
        <meta property="og:description" content="Support Tennyson Hull's creative journey and help accelerate the development of tools, communities, and initiatives that empower others." />
        <meta property="og:url" content="https://tennyson.live/accelerate" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="A Living Commitment - Support Tennyson Hull" />
        <meta name="twitter:description" content="Support Tennyson Hull's creative journey and help accelerate the development of tools, communities, and initiatives that empower others." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen relative overflow-hidden">
        <BackButton />
        <ThemeToggle />
        {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-interactive-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-interactive-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-interactive-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Back Button */}
        <BackButton />
        
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Header */}
        <animated.header style={fadeIn} className="py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
              A Living Commitment
            </h1>
          </div>
        </animated.header>

        {/* Main Content */}
        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <animated.div 
              style={contentFadeIn}
              className="glass-effect rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="space-y-6 text-lg md:text-xl font-elegant leading-relaxed text-content-primary">
                <p>
                  I'm in the process of weaving together a constellation of ideas, tools, and initiatives—each one a seed in a larger ecosystem of support, empowerment, and community-rooted change.
                </p>
                
                <p>
                  This vision isn't a business in the usual sense. It's something deeper: a fertile ground from which many things can grow—ventures, collaborations, creative expressions, and new forms of community. My role is to tend the soil, to nurture what emerges into something real, useful, and accessible to anyone who resonates with its values.
                </p>
                
                <p>
                  The path unfolds gradually. I'm sketching a roadmap—part action plan, part living philosophy—that guides my steps while leaving space for others to join, shape, and grow with it. This isn't just about my journey; it's about creating space where aligned visions can take root together.
                </p>
                
                <p>
                  For now, much of my time still goes toward sustaining the basics through contract work. Every bit of support I receive helps create more space for focus, deeper listening, and laying the groundwork this long-term vision needs.
                </p>
                
                <p>
                  If something here speaks to you—if you feel the same pull to help bring more intentional, heart-centered systems into the world—then your presence is already part of that support. And if you're moved to contribute further, your encouragement and generosity will help nourish what's growing here and accelerate what comes next.
                </p>
              </div>
            </animated.div>

            {/* Call to Action Button */}
            <animated.div style={buttonFadeIn} className="text-center mt-12">
              <a
                href="https://buy.stripe.com/3cI5kD8Oq9Mm7V01hP5wI02"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-elegant font-medium hover:from-pink-600 hover:to-orange-600 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Heart size={20} className="group-hover/btn:scale-110 transition-transform" />
                <span className="text-lg">Walk With Me</span>
              </a>
              
              <p className="text-sm text-content-muted font-elegant mt-4">
                Your support helps accelerate this vision into reality
              </p>
            </animated.div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default AcceleratePage;
