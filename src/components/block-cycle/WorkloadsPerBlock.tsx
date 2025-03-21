
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Layers, BarChart, Sparkles, Image, FileCode } from 'lucide-react';

export function WorkloadsPerBlock() {
  // Define the different types of workloads with their icons and details
  const workloads = [
    {
      title: "Large Language Models",
      icon: <Layers className="h-8 w-8 text-electric-orange" />,
      models: ["LLaMA 3", "Mixtral", "Mistral"],
      description: "Inference and fine-tuning for chatbots, agents, and code generation."
    },
    {
      title: "Image Generation",
      icon: <Image className="h-8 w-8 text-neon-cyan" />,
      models: ["Stable Diffusion XL", "ControlNet", "RunwayML Gen-2"],
      description: "Creating visuals for ads, art, products, and video-to-video AI."
    },
    {
      title: "Embedding & Indexing",
      icon: <BarChart className="h-8 w-8 text-cosmic-purple" />,
      models: ["OpenAI Embeddings", "Cohere", "BGE Models"],
      description: "Powering semantic search, RAG, and AI search engines."
    },
    {
      title: "Custom Fine-Tuning",
      icon: <FileCode className="h-8 w-8 text-green-500" />,
      models: ["Domain-Specific LLMs", "Fishcake AI", "Education Bots"],
      description: "Industry-specific knowledge, support transcripts, project logs."
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-white/10"></div>
      
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center bg-[#151822]/80 p-2 px-4 rounded-full border border-white/10 mb-4">
            <Cpu className="w-4 h-4 mr-2 text-neon-cyan" />
            <span className="text-sm text-white/80">Real Jobs. Real Value.</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-electric-orange">~</span> What Workloads Run Per Block
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Every hour, your block runs actual AI workloads from our global job queue. 
            These aren't demo tasks—they're production AI systems in action.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workloads.map((workload, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1A1F2C] border-white/10 overflow-hidden h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-white flex items-center gap-2">
                        {workload.icon}
                        {workload.title}
                      </CardTitle>
                      <CardDescription className="text-white/60 mt-1">
                        {workload.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {workload.models.map((model, modelIndex) => (
                      <div 
                        key={modelIndex} 
                        className="bg-[#151822] border border-white/5 rounded-md px-3 py-1 text-sm flex items-center"
                      >
                        <Sparkles className="h-3 w-3 mr-1 text-electric-orange" />
                        <span>{model}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-xs text-white/50 flex items-center">
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-electric-orange/50 to-neon-cyan/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-electric-orange to-neon-cyan animate-shimmer"></div>
                    </div>
                    <span className="px-2">CPU / GPU / Memory</span>
                    <div className="flex-1 h-[2px] bg-gradient-to-l from-electric-orange/50 to-neon-cyan/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-l from-electric-orange to-neon-cyan animate-shimmer"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
