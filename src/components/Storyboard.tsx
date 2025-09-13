import React from 'react';
import { animated, useTrail } from '@react-spring/web';
import { ExternalLink, Image, Link2, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageTransition } from '../contexts/PageTransitionContext';

interface StoryBlock {
  id: string;
  type: 'text' | 'image' | 'links';
  title: string;
  content: string;
  links?: Array<{
    title: string;
    url: string;
    description?: string;
  }>;
  imageUrl?: string;
}

const Storyboard: React.FC = () => {
  const { setDirection } = usePageTransition();
  const blocks: StoryBlock[] = [
    {
      id: '1',
      type: 'links',
      title: 'Featured Projects',
      content: 'Explore some of my recent work and collaborations.',
      links: [
        {
          title: 'Protogen - Launching Soon',
          url: 'https://github.com/Imergent-Technology/Protogen',
          description: 'A prototype tool for personal and community building on Laravel hosting.'
        },
        {
          title: 'Slip Into The Stream',
          url: 'https://flow.tennyson.live',
          description: 'My long-form platform for thoughts, ideas, and gradual transformation.'
        },
        {
          title: 'Cymatica Art Collective',
          url: 'https://cymatica.art/',
          description: 'Artists banding together to empower each other and uplift the community.'
        },
        {
          title: 'More to come soon...',
          url: '',
          description: ''
        }
      ]
    },
    {
      id: '2',
      type: 'links',
      title: 'Community Empowerment',
      content: 'Connecting with inspiring communities and organizations that are making a positive impact in the world.',
      links: [
        {
          title: 'Flow Life Global',
          url: 'https://flowlifeglobal.org/',
          description: 'Post-pandemic spiritual & wellness community creating safe healing spaces.'
        },
        {
          title: 'SkyFire Arts',
          url: 'https://www.skyfirearts.com/',
          description: 'Transformative entertainment with Tesla coils, fire dancing & LED shows.'
        },
        {
          title: 'Lions Den Community Art',
          url: 'https://www.lionsdencommunityart.org/',
          description: 'Vibrant art collective hosting Art in the Park events in Long Beach.'
        },
        {
          title: 'Get involved...',
          url: '/uplift',
          description: ''
        }
      ]
    }
  ];

  const trail = useTrail(blocks.length, {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
  });

  const renderBlock = (block: StoryBlock, index: number) => {
    const animation = trail[index];

    switch (block.type) {
      case 'text':
        return (
          <animated.div key={block.id} style={animation} className="glass-effect rounded-2xl p-6">
            <h3 className="text-xl font-display font-semibold text-panel-header-gradient mb-3">
              {block.title}
            </h3>
            <p className="text-content-secondary font-elegant leading-relaxed">
              {block.content}
            </p>
          </animated.div>
        );

      case 'image':
        return (
          <animated.div key={block.id} style={animation} className="glass-effect rounded-2xl p-6">
            <h3 className="text-xl font-display font-semibold text-panel-header-gradient mb-4">
              {block.title}
            </h3>
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
              {block.imageUrl ? (
                <img 
                  src={block.imageUrl} 
                  alt={block.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="text-center">
                  <Image size={48} className="text-content-muted mx-auto mb-2" />
                  <p className="text-content-muted font-elegant">
                    Image placeholder
                  </p>
                </div>
              )}
            </div>
            <p className="text-content-muted font-elegant mt-4">
              {block.content}
            </p>
          </animated.div>
        );

      case 'links':
        return (
          <animated.div key={block.id} style={animation} className="glass-effect rounded-2xl p-6">
            <h3 className="text-xl font-display font-semibold text-panel-header-gradient mb-4">
              {block.title}
            </h3>
            <p className="text-content-muted font-elegant mb-4">
              {block.content}
            </p>
            <div className="space-y-3">
              {block.links?.map((link, linkIndex) => {
                // Handle links without URLs (like "More to come soon...")
                if (!link.url) {
                  return (
                    <div
                      key={linkIndex}
                      className="flex items-center space-x-3 p-3 rounded-lg opacity-75"
                    >
                      <Link2 size={16} className="text-content-muted" />
                      <div className="flex-1">
                        <h4 className="font-elegant font-medium text-content-muted">
                          {link.title}
                        </h4>
                        {link.description && (
                          <p className="text-sm text-content-muted">
                            {link.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                }

                // Handle internal links (like /uplift)
                const isInternal = link.url.startsWith('/');
                
                if (isInternal) {
                  return (
                    <Link
                      key={linkIndex}
                      to={link.url}
                      onClick={() => setDirection('left')}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group/link"
                    >
                      <Link2 size={16} className="text-interactive-primary group-hover/link:text-interactive-primary transition-colors" />
                      <div className="flex-1">
                        <h4 className="font-elegant font-medium text-content-primary group-hover/link:text-interactive-primary transition-colors">
                          {link.title}
                        </h4>
                        {link.description && (
                          <p className="text-sm text-content-muted">
                            {link.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                }
                
                return (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group/link"
                  >
                    <Link2 size={16} className="text-interactive-primary group-hover/link:text-interactive-primary transition-colors" />
                    <div className="flex-1">
                      <h4 className="font-elegant font-medium text-content-primary group-hover/link:text-interactive-primary transition-colors">
                        {link.title}
                      </h4>
                      {link.description && (
                        <p className="text-sm text-content-muted">
                          {link.description}
                        </p>
                      )}
                    </div>
                    <ExternalLink size={14} className="text-content-muted group-hover/link:text-interactive-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </animated.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Featured Projects - Left Panel */}
          {renderBlock(blocks[0], 0)}
          
          {/* Support Panel - Middle */}
          <animated.div 
            className="glass-effect rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 hover:scale-[1.02] transition-all duration-300 group"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 182, 193, 0.1) 0%, rgba(255, 218, 185, 0.1) 50%, rgba(255, 239, 213, 0.1) 100%)',
              border: '1px solid rgba(255, 182, 193, 0.2)'
            }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 via-rose-400 to-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Heart size={24} className="text-white" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-display font-semibold text-panel-header-gradient">
                Support My Work
              </h3>
              <p className="text-content-secondary font-elegant text-sm leading-relaxed">
                If you feel called to support my creative journey and help me continue building amazing experiences, I would be deeply grateful.
              </p>
            </div>
            
            <Link
              to="/accelerate"
              onClick={() => setDirection('left')}
              className="group/btn flex items-center space-x-2 px-6 py-3 rounded-full bg-support-button-gradient text-white font-elegant font-medium hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Accelerate My Journey</span>
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            
            <p className="text-xs text-content-muted font-elegant">
              Every contribution makes a difference
            </p>
          </animated.div>
          
          {/* Community Empowerment - Right Panel */}
          {renderBlock(blocks[1], 1)}
        </div>
      </div>
    </section>
  );
};

export default Storyboard;