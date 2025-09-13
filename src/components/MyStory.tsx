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
          <div className="text-lg sm:text-xl leading-loose space-y-6 text-content-primary">
            <p className="font-body">
              For a long time, I struggled to find my voice. Not because I didn’t care or couldn’t connect, but because the way I think doesn’t always fit into neat, linear explanations. I tend to see the world in patterns and systems — almost holographic in nature — which can make it hard to translate my thoughts in ways others instantly follow. That gap sometimes left me quiet, holding back ideas I deeply cared about. But in the silence, I learned patience. And when I finally broke through, I discovered a deep gratitude for expression itself — whether through words, technology, or the spaces I help bring to life.
            </p>
            
            <p className="font-body">
              Today, my work isn’t about proving myself. It’s about offering what I’ve been given in service of others. I want to create tools, communities, and experiences that help people feel more connected: to themselves, to each other, and to new possibilities. If there’s one lesson my journey has taught me, it’s that when we share what we carry, we create ripples that can change not just our own lives, but the lives of those around us.
            </p>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default MyStory;
