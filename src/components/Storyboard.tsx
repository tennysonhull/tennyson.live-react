import React from 'react';
import { animated, useTrail } from '@react-spring/web';
import { ExternalLink, Image, Link2, Heart, ArrowRight } from 'lucide-react';

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
  const blocks: StoryBlock[] = [
    {
      id: '1',
      type: 'links',
      title: 'Featured Projects',
      content: 'Explore some of my recent work and collaborations.',
      links: [
        {
          title: 'Portfolio Website',
          url: 'https://github.com/tennysonhull',
          description: 'A showcase of my development skills'
        },
        {
          title: 'Open Source Contributions',
          url: 'https://github.com/tennysonhull',
          description: 'Contributing to the developer community'
        },
        {
          title: 'Creative Experiments',
          url: 'https://github.com/tennysonhull',
          description: 'Exploring new technologies and design patterns'
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
          description: 'Post-pandemic spiritual & wellness community creating safe healing spaces'
        },
        {
          title: 'SkyFire Arts',
          url: 'https://www.skyfirearts.com/',
          description: 'Transformative entertainment experiences with Tesla coils, fire dancing & LED shows'
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
            <h3 className="text-xl font-display font-semibold gradient-text mb-3">
              {block.title}
            </h3>
            <p className="text-neutral-600 font-elegant leading-relaxed">
              {block.content}
            </p>
          </animated.div>
        );

      case 'image':
        return (
          <animated.div key={block.id} style={animation} className="glass-effect rounded-2xl p-6">
            <h3 className="text-xl font-display font-semibold gradient-text mb-4">
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
                  <Image size={48} className="text-neutral-400 mx-auto mb-2" />
                  <p className="text-neutral-500 font-elegant">
                    Image placeholder
                  </p>
                </div>
              )}
            </div>
            <p className="text-neutral-500 font-elegant mt-4">
              {block.content}
            </p>
          </animated.div>
        );

      case 'links':
        return (
          <animated.div key={block.id} style={animation} className="glass-effect rounded-2xl p-6">
            <h3 className="text-xl font-display font-semibold gradient-text mb-4">
              {block.title}
            </h3>
            <p className="text-neutral-500 font-elegant mb-4">
              {block.content}
            </p>
            <div className="space-y-3">
              {block.links?.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group/link"
                >
                  <Link2 size={16} className="text-primary-500 group-hover/link:text-primary-600 transition-colors" />
                  <div className="flex-1">
                    <h4 className="font-elegant font-medium text-neutral-800 group-hover/link:text-primary-600 transition-colors">
                      {link.title}
                    </h4>
                    {link.description && (
                      <p className="text-sm text-neutral-500">
                        {link.description}
                      </p>
                    )}
                  </div>
                  <ExternalLink size={14} className="text-neutral-400 group-hover/link:text-primary-500 transition-colors" />
                </a>
              ))}
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            My Story
          </h2>
          <p className="text-lg text-neutral-600 font-elegant max-w-2xl mx-auto">
            A collection of thoughts, projects, and experiences that shape my journey as a creative developer.
          </p>
        </div>

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
              <h3 className="text-xl font-display font-semibold gradient-text">
                Support My Work
              </h3>
              <p className="text-neutral-600 font-elegant text-sm leading-relaxed">
                If you feel called to support my creative journey and help me continue building amazing experiences, I would be deeply grateful.
              </p>
            </div>
            
            <a
              href="https://tennyson.live/accelerate"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-elegant font-medium hover:from-pink-600 hover:to-orange-600 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Accelerate My Journey</span>
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-xs text-neutral-500 font-elegant">
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