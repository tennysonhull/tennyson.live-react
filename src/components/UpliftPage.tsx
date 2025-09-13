import React, { useState } from 'react';
import { animated, useSpring, useTrail } from '@react-spring/web';
import { Heart, Calendar, Users, Star, ExternalLink, Filter } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import BackButton from './BackButton';
import ThemeToggle from './ThemeToggle';

interface UpliftItem {
  id: string;
  title: string;
  description: string;
  category: 'campaign' | 'event' | 'community';
  url?: string;
  imageUrl?: string;
  goal?: string;
  raised?: string;
  date?: string;
  location?: string;
  featured?: boolean;
}

const UpliftPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'campaign' | 'event' | 'community'>('all');

  const demoItems: UpliftItem[] = [
    {
      id: '1',
      title: 'Art in the Park - August 2025',
      description: 'Join Lions Den Community Art for our monthly Art in the Park event featuring local artists, vendors, DJs, and flow performers at Bixby Park in Long Beach.',
      category: 'event',
      url: 'https://www.lionsdencommunityart.org/',
      date: 'Aug 23, 2025',
      location: 'Bixby Park, Long Beach',
      featured: true
    },
    {
      id: '2',
      title: 'Flow Life Global Community Fund',
      description: 'Support our post-pandemic spiritual & wellness community in creating safe healing spaces and expanding our reach to serve more people.',
      category: 'campaign',
      url: 'https://flowlifeglobal.org/',
      goal: '$10,000',
      raised: '$3,250',
      featured: true
    },
    {
      id: '3',
      title: 'Help Andrea Get Back on the Road to Heal',
      description: 'Support Andrea, a gifted massage therapist and energy healer, to get her car repaired so she can continue helping people release deep blockages and move with less pain.',
      category: 'campaign',
      url: 'https://www.gofundme.com/f/help-andrea-get-back-on-the-road-to-heal',
      goal: '$3,000',
      raised: '$850'
    },
    {
      id: '4',
      title: 'Meredith Freeman - Featured Artist',
      description: 'Discover the incredible work of Meredith Freeman, our featured artist for August 2025. Her visionary art explores the intersection of nature and consciousness.',
      category: 'community',
      featured: true
    },
    {
      id: '5',
      title: 'Community Garden Initiative',
      description: 'Join us in creating sustainable community gardens across Long Beach to promote food security and environmental awareness.',
      category: 'event',
      date: 'Sep 15, 2025',
      location: 'Multiple Locations, Long Beach'
    },
    {
      id: '6',
      title: 'Youth Art Mentorship Program',
      description: 'Support our program that pairs experienced artists with young creatives to foster the next generation of community artists.',
      category: 'campaign',
      goal: '$7,500',
      raised: '$2,100'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? demoItems 
    : demoItems.filter(item => item.category === activeFilter);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 100,
  });

  const trail = useTrail(filteredItems.length, {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'campaign': return <Heart size={20} className="text-pink-500" />;
      case 'event': return <Calendar size={20} className="text-blue-500" />;
      case 'community': return <Users size={20} className="text-green-500" />;
      default: return <Star size={20} className="text-yellow-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'campaign': return 'from-pink-500/20 to-rose-500/20 border-pink-500/30';
      case 'event': return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
      case 'community': return 'from-green-500/20 to-emerald-500/20 border-green-500/30';
      default: return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
    }
  };

  return (
    <>
      <Helmet>
        <title>Community Uplift - Tennyson Hull</title>
        <meta name="description" content="Discover opportunities to support causes, join events, and connect with amazing people in our community. Together, we can create positive change." />
        <meta name="keywords" content="community, events, crowdfunding, support, causes, social impact, community empowerment" />
        <link rel="canonical" href="https://tennyson.live/uplift" />
        
        <meta property="og:title" content="Community Uplift - Tennyson Hull" />
        <meta property="og:description" content="Discover opportunities to support causes, join events, and connect with amazing people in our community." />
        <meta property="og:url" content="https://tennyson.live/uplift" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Community Uplift - Tennyson Hull" />
        <meta name="twitter:description" content="Discover opportunities to support causes, join events, and connect with amazing people in our community." />
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
              Get Involved
            </h1>
            <p className="text-lg md:text-xl font-elegant text-content-secondary leading-relaxed max-w-2xl mx-auto mb-4">
              Discover opportunities to support causes, join events, and connect with amazing people in our community. 
              Together, we can create positive change.
            </p>
            <div 
              className="rounded-lg p-4 max-w-2xl mx-auto"
              style={{
                backgroundColor: 'var(--notification-bg, #fef3c7)',
                border: '1px solid var(--notification-border, #f59e0b)',
              }}
            >
              <p 
                className="text-sm font-elegant"
                style={{
                  color: 'var(--notification-text, #92400e)',
                }}
              >
                <strong>Demo Mode:</strong> This page is currently for demonstration purposes. The content below showcases the types of community engagement opportunities we'll feature.
              </p>
            </div>
          </div>
        </animated.header>

        {/* Filter Tabs */}
        <animated.div style={fadeIn} className="px-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { key: 'all', label: 'All', icon: <Filter size={16} /> },
                { key: 'campaign', label: 'Campaigns', icon: <Heart size={16} /> },
                { key: 'event', label: 'Events', icon: <Calendar size={16} /> },
                { key: 'community', label: 'Community', icon: <Users size={16} /> }
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-elegant transition-all duration-200 ${
                    activeFilter === filter.key
                      ? 'bg-interactive-primary text-white shadow-lg'
                      : 'bg-white/10 text-content-secondary hover:bg-white/20 hover:text-content-primary'
                  }`}
                >
                  {filter.icon}
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </div>
        </animated.div>

        {/* Content Grid */}
        <section className="px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <animated.div
                  key={item.id}
                  style={{
                    ...trail[index],
                    background: `linear-gradient(135deg, ${getCategoryColor(item.category).split(' ')[0]} 0%, ${getCategoryColor(item.category).split(' ')[2]} 100%)`,
                    border: `1px solid ${getCategoryColor(item.category).split(' ')[4]}`
                  }}
                  className={`glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group ${
                    item.featured ? 'ring-2 ring-primary-500/50' : ''
                  }`}
                >
                  {item.featured && (
                    <div className="flex items-center space-x-1 mb-3">
                      <Star size={16} className="text-yellow-500" />
                      <span className="text-sm font-elegant text-yellow-600">Featured</span>
                    </div>
                  )}

                  <div className="flex items-start space-x-3 mb-4">
                    {getCategoryIcon(item.category)}
                    <div className="flex-1">
                      <h3 
                        className="text-lg font-display font-semibold group-hover:text-interactive-primary transition-colors mb-2"
                        style={{
                          color: 'var(--card-header-text, #1f2937)',
                          textShadow: 'var(--card-header-glow, 0 0 8px rgba(31, 41, 55, 0.3))',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-content-secondary font-elegant leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Campaign Progress */}
                  {item.category === 'campaign' && item.goal && item.raised && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm font-elegant mb-2">
                        <span className="text-content-secondary">Progress</span>
                        <span className="text-content-primary font-medium">{item.raised} / {item.goal}</span>
                      </div>
                      <div className="w-full bg-surface-accent rounded-full h-2">
                        <div 
                          className="bg-support-button-gradient h-2 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${(parseFloat(item.raised.replace('$', '').replace(',', '')) / parseFloat(item.goal.replace('$', '').replace(',', ''))) * 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Event Details */}
                  {item.category === 'event' && (item.date || item.location) && (
                    <div className="mb-4 space-y-1">
                      {item.date && (
                        <div className="flex items-center space-x-2 text-sm text-content-secondary">
                          <Calendar size={14} />
                          <span className="font-elegant">{item.date}</span>
                        </div>
                      )}
                      {item.location && (
                        <div className="flex items-center space-x-2 text-sm text-content-secondary">
                          <Users size={14} />
                          <span className="font-elegant">{item.location}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Button */}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-interactive-primary text-white font-elegant font-medium hover:bg-interactive-primary hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <span>
                        {item.category === 'campaign' ? 'Support' : 
                         item.category === 'event' ? 'Join Event' : 'Learn More'}
                      </span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </animated.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <animated.div style={fadeIn} className="text-center py-16">
                <div className="glass-effect rounded-2xl p-8 max-w-md mx-auto">
                  <Filter size={48} className="text-content-muted mx-auto mb-4" />
                  <h3 className="text-xl font-display font-semibold text-content-primary mb-2">
                    No items found
                  </h3>
                  <p className="text-content-muted font-elegant">
                    Try selecting a different category or check back later for new opportunities.
                  </p>
                </div>
              </animated.div>
            )}
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default UpliftPage;
