import { useSpring, animated } from '@react-spring/web';

const MyStory = () => {
  const fadeInUp = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
  });

  return (
    <animated.section 
      id="my-story" 
      className="w-full py-16 px-4 sm:px-6 lg:px-8"
      style={fadeInUp}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold gradient-text mb-4" style={{ lineHeight: '1.5' }}>
            My Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-lg sm:text-xl leading-relaxed space-y-6 text-neutral-700">
            <p className="font-elegant">
              For much of my life I struggled to find my voice, not because I lacked connection, but because the way I see and think often resists simple, linear explanation. I tend to model the systems around me in ways that are highly effective but abstract, almost holographic in nature. This makes linear dialogue difficult at times, leading to frustration, either in my inability to explain something as clearly as I intend, or in the other person’s difficulty following what feels to me cohesive but comes across fragmented. That silence taught me patience, yet it left many of my ideas unspoken. Now, having stepped through that barrier, I carry a deep gratitude for expression itself, whether through words, technology, or the spaces I help build.
            </p>
            
            <p className="font-elegant">
              My focus is no longer on proving myself, but on offering what I've been given in service of others. I aim to create tools, communities, and moments that help people feel more connected: to themselves, to each other, and to possibility. If my journey has taught me anything, it is that sharing what we carry can transform not just our own lives, but the lives of those around us.
            </p>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default MyStory;
