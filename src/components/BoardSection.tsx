
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BlockBoard } from '@/components/BlockBoard';

export function BoardSection() {
  return (
    <section id="block-board" className="mb-16">
      <div className="text-center mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-4"
        >
          Stable Block Board – 243 Blocks
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white/70 max-w-3xl mx-auto"
        >
          Each block represents ownership in our AI compute infrastructure. Select an available block to mint it.
        </motion.p>
      </div>
      
      <BlockBoard className="mb-8" />
      
      <div className="text-center">
        <Button 
          className="bg-electric-orange hover:bg-electric-orange/90 text-white px-8 py-6 text-lg mt-4"
          onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More About Blocks
        </Button>
      </div>
    </section>
  );
}
