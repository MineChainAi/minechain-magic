
import { motion } from 'framer-motion';
import { BuyBlockButton } from '@/components/BuyBlockButton';

interface BlockCallToActionProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  showPrice?: boolean;
  className?: string;
}

export function BlockCallToAction({
  heading = "🚀 Secure Your Block – Limited to 243 Blocks",
  description = "💎 Own AI Infrastructure. Earn USDC. Get Bonus BTC.",
  buttonText,
  showPrice = true,
  className = ""
}: BlockCallToActionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`text-center bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-blue-900/30 p-12 rounded-2xl border border-white/10 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{heading}</h2>
      <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
        {description}
      </p>
      <BuyBlockButton 
        showPrice={showPrice} 
        className="px-8 py-6 text-lg"
      />
      <p className="mt-4 text-sm text-white/50">Secure payment options available • Limited quantity</p>
    </motion.section>
  );
}
