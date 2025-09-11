import React, { useState } from 'react';
import { animated, useTrail } from '@react-spring/web';
import { ExternalLink, Image, Link2, List, Plus, X } from 'lucide-react';

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
  const [blocks, setBlocks] = useState<StoryBlock[]>([
    {
      id: '1',
      type: 'text',
      title: 'Welcome to My Digital Space',
      content: 'This is where creativity meets technology. I believe in building experiences that not only function beautifully but also tell a story.',
    },
    {
      id: '2',
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
        }
      ]
    }
  ]);

  const [isAddingBlock, setIsAddingBlock] = useState(false);

  const trail = useTrail(blocks.length, {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 1000,
  });

  const addBlock = (type: StoryBlock['type']) => {
    const newBlock: StoryBlock = {
      id: Date.now().toString(),
      type,
      title: '',
      content: '',
      links: type === 'links' ? [] : undefined,
    };
    setBlocks([...blocks, newBlock]);
    setIsAddingBlock(false);
  };

  const removeBlock = (id: string) => {
    setBlocks(blocks.filter(block => block.id !== id));
  };

  // const updateBlock = (id: string, updates: Partial<StoryBlock>) => {
  //   setBlocks(blocks.map(block => 
  //     block.id === id ? { ...block, ...updates } : block
  //   ));
  // };

  const renderBlock = (block: StoryBlock, index: number) => {
    const springProps = trail[index];

    switch (block.type) {
      case 'text':
        return (
          <animated.div key={block.id} style={springProps} className="group">
            <div className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-display font-semibold gradient-text">
                  {block.title || 'Untitled Block'}
                </h3>
                <button
                  onClick={() => removeBlock(block.id)}
                  className="opacity-0 group-hover:opacity-100 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/20 transition-all"
                >
                  <X size={16} className="text-red-500" />
                </button>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 font-elegant leading-relaxed">
                {block.content || 'Click to edit this text block...'}
              </p>
            </div>
          </animated.div>
        );

      case 'image':
        return (
          <animated.div key={block.id} style={springProps} className="group">
            <div className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-display font-semibold gradient-text">
                  {block.title || 'Image Block'}
                </h3>
                <button
                  onClick={() => removeBlock(block.id)}
                  className="opacity-0 group-hover:opacity-100 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/20 transition-all"
                >
                  <X size={16} className="text-red-500" />
                </button>
              </div>
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-800 dark:to-secondary-800 rounded-xl flex items-center justify-center">
                {block.imageUrl ? (
                  <img src={block.imageUrl} alt={block.title} className="w-full h-full object-cover rounded-xl" />
                ) : (
                  <div className="text-center">
                    <Image size={48} className="mx-auto text-neutral-400 mb-2" />
                    <p className="text-neutral-500 dark:text-neutral-400 font-elegant">
                      Add an image URL to display here
                    </p>
                  </div>
                )}
              </div>
            </div>
          </animated.div>
        );

      case 'links':
        return (
          <animated.div key={block.id} style={springProps} className="group">
            <div className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-display font-semibold gradient-text">
                  {block.title || 'Links Block'}
                </h3>
                <button
                  onClick={() => removeBlock(block.id)}
                  className="opacity-0 group-hover:opacity-100 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/20 transition-all"
                >
                  <X size={16} className="text-red-500" />
                </button>
              </div>
              <div className="space-y-3">
                {block.links?.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-200 group/link"
                  >
                    <Link2 size={16} className="text-primary-500 group-hover/link:text-primary-600 dark:group-hover/link:text-primary-400 transition-colors" />
                    <div className="flex-1">
                      <h4 className="font-elegant font-medium text-neutral-800 dark:text-neutral-200 group-hover/link:text-primary-600 dark:group-hover/link:text-primary-400 transition-colors">
                        {link.title}
                      </h4>
                      {link.description && (
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {link.description}
                        </p>
                      )}
                    </div>
                    <ExternalLink size={14} className="text-neutral-400 group-hover/link:text-primary-500 transition-colors" />
                  </a>
                ))}
                {(!block.links || block.links.length === 0) && (
                  <div className="text-center py-8">
                    <List size={48} className="mx-auto text-neutral-400 mb-2" />
                    <p className="text-neutral-500 dark:text-neutral-400 font-elegant">
                      Add links to external resources, projects, or profiles
                    </p>
                  </div>
                )}
              </div>
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
          <p className="text-lg text-neutral-600 dark:text-neutral-300 font-elegant max-w-2xl mx-auto">
            A collection of thoughts, projects, and experiences that define my journey
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block, index) => renderBlock(block, index))}
          
          {/* Add Block Button */}
          <div className="relative">
            {isAddingBlock ? (
              <div className="glass-effect rounded-2xl p-6 space-y-3">
                <h3 className="text-lg font-display font-semibold gradient-text mb-4">
                  Add New Block
                </h3>
                <button
                  onClick={() => addBlock('text')}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-200"
                >
                  <span className="text-2xl">📝</span>
                  <span className="font-elegant">Text Block</span>
                </button>
                <button
                  onClick={() => addBlock('image')}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-200"
                >
                  <span className="text-2xl">🖼️</span>
                  <span className="font-elegant">Image Block</span>
                </button>
                <button
                  onClick={() => addBlock('links')}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-200"
                >
                  <span className="text-2xl">🔗</span>
                  <span className="font-elegant">Links Block</span>
                </button>
                <button
                  onClick={() => setIsAddingBlock(false)}
                  className="w-full flex items-center justify-center space-x-2 p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition-all duration-200"
                >
                  <X size={16} className="text-red-500" />
                  <span className="font-elegant text-red-500">Cancel</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAddingBlock(true)}
                className="w-full h-48 glass-effect rounded-2xl flex flex-col items-center justify-center space-y-3 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-700 transition-colors">
                  <Plus size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <span className="font-elegant font-medium text-neutral-600 dark:text-neutral-300">
                  Add New Block
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storyboard;
