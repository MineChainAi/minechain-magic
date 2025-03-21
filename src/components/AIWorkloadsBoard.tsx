
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageCircle, 
  Image, 
  Database, 
  FileCode, 
  Zap, 
  Server, 
  Cpu, 
  TrendingUp,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

// This interface defines the structure of an AI workload
interface AIWorkload {
  id: string;
  name: string;
  type: 'llm' | 'image' | 'embeddings' | 'finetuning';
  model: string;
  description: string;
  load: number;
  clients: number;
  blocksAssigned: number[];
  icon: React.ReactNode;
  color: string;
}

const AIWorkloadsBoard = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // Sample data - in a real app, this would come from an API
  const [workloads, setWorkloads] = useState<AIWorkload[]>([
    {
      id: 'llm-1',
      name: 'LLaMA 3 Inference',
      type: 'llm',
      model: 'LLaMA 3 (70B)',
      description: 'Chatbots, smart agents, code generation',
      load: 87,
      clients: 12,
      blocksAssigned: [27, 42, 104, 156, 198],
      icon: <Brain className="h-5 w-5" />,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'llm-2',
      name: 'Mistral API Service',
      type: 'llm',
      model: 'Mistral (8x7B)',
      description: 'Customer service AI, content generation',
      load: 92,
      clients: 8,
      blocksAssigned: [13, 57, 89, 121, 177, 204],
      icon: <MessageCircle className="h-5 w-5" />,
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      id: 'img-1',
      name: 'Stable Diffusion XL',
      type: 'image',
      model: 'SDXL 1.0 + ControlNet',
      description: 'Ad creatives, art generation, design',
      load: 78,
      clients: 21,
      blocksAssigned: [7, 31, 64, 96, 143, 201, 212],
      icon: <Image className="h-5 w-5" />,
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 'img-2',
      name: 'RunwayML Video Gen',
      type: 'image',
      model: 'Gen-2 Video',
      description: 'Video-to-video AI, motion synthesis',
      load: 95,
      clients: 4,
      blocksAssigned: [49, 82, 115, 167],
      icon: <FileCode className="h-5 w-5" />,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'emb-1',
      name: 'Vector Embeddings',
      type: 'embeddings',
      model: 'BGE + OpenAI',
      description: 'Semantic search, RAG systems',
      load: 65,
      clients: 17,
      blocksAssigned: [22, 53, 88, 127, 184, 221],
      icon: <Database className="h-5 w-5" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'train-1',
      name: 'Crypto FineTuning',
      type: 'finetuning',
      model: 'Custom Mixtral',
      description: 'Crypto tools, scam detection (Fishcake AI)',
      load: 89,
      clients: 2,
      blocksAssigned: [11, 74, 139, 187],
      icon: <Server className="h-5 w-5" />,
      color: 'from-yellow-500 to-amber-600'
    },
  ]);

  // Simulate updating data
  const refreshData = () => {
    setIsUpdating(true);
    
    setTimeout(() => {
      const updatedWorkloads = workloads.map(workload => ({
        ...workload,
        load: Math.min(99, workload.load + Math.floor(Math.random() * 7) - 3),
      }));
      
      setWorkloads(updatedWorkloads);
      setIsUpdating(false);
    }, 1000);
  };
  
  // Calculate stats
  const totalBlocksAssigned = Array.from(
    new Set(workloads.flatMap(w => w.blocksAssigned))
  ).length;
  
  const totalClients = workloads.reduce((sum, w) => sum + w.clients, 0);
  
  const avgLoad = Math.round(
    workloads.reduce((sum, w) => sum + w.load, 0) / workloads.length
  );
  
  // Filter workloads based on the active filter
  const filteredWorkloads = activeFilter 
    ? workloads.filter(w => w.type === activeFilter) 
    : workloads;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-2">
            <Cpu className="text-electric-orange h-6 w-6" />
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90">
              Live AI Workloads
            </h2>
            <Cpu className="text-electric-orange h-6 w-6" />
          </div>
          <p className="text-white/70 max-w-3xl mx-auto">
            Real-time view of actual AI tasks running on the MineChain compute infrastructure.
            Every block powers real AI workloads and earns USDC.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass border-cosmic-purple/20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <TrendingUp className="h-12 w-12 text-neon-cyan mb-4" />
                <h3 className="text-2xl font-bold text-white">{avgLoad}%</h3>
                <p className="text-white/60">Average GPU Load</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass border-cosmic-purple/20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Server className="h-12 w-12 text-electric-orange mb-4" />
                <h3 className="text-2xl font-bold text-white">{totalBlocksAssigned}</h3>
                <p className="text-white/60">Active Blocks</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass border-cosmic-purple/20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Zap className="h-12 w-12 text-cosmic-purple mb-4" />
                <h3 className="text-2xl font-bold text-white">{totalClients}</h3>
                <p className="text-white/60">Clients Served</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button 
            variant={activeFilter === null ? "default" : "outline"}
            onClick={() => setActiveFilter(null)}
            className={activeFilter === null ? "bg-neon-cyan text-black" : ""}
          >
            All Workloads
          </Button>
          <Button 
            variant={activeFilter === 'llm' ? "default" : "outline"}
            onClick={() => setActiveFilter('llm')}
            className={activeFilter === 'llm' ? "bg-blue-500 text-white" : ""}
          >
            <Brain className="mr-1 h-4 w-4" />
            LLMs
          </Button>
          <Button 
            variant={activeFilter === 'image' ? "default" : "outline"}
            onClick={() => setActiveFilter('image')}
            className={activeFilter === 'image' ? "bg-pink-500 text-white" : ""}
          >
            <Image className="mr-1 h-4 w-4" />
            Image & Video
          </Button>
          <Button 
            variant={activeFilter === 'embeddings' ? "default" : "outline"}
            onClick={() => setActiveFilter('embeddings')}
            className={activeFilter === 'embeddings' ? "bg-green-500 text-white" : ""}
          >
            <Database className="mr-1 h-4 w-4" />
            Embeddings
          </Button>
          <Button 
            variant={activeFilter === 'finetuning' ? "default" : "outline"}
            onClick={() => setActiveFilter('finetuning')}
            className={activeFilter === 'finetuning' ? "bg-yellow-500 text-white" : ""}
          >
            <Server className="mr-1 h-4 w-4" />
            Fine-Tuning
          </Button>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={refreshData}
                  className="ml-2"
                  disabled={isUpdating}
                >
                  <RefreshCw className={`h-4 w-4 ${isUpdating ? 'animate-spin' : ''}`} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Refresh workload data</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {/* Workload Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredWorkloads.map((workload) => (
            <Card key={workload.id} className="glass border-cosmic-purple/20 overflow-hidden">
              <div className={`h-2 w-full bg-gradient-to-r ${workload.color}`}></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${workload.color} bg-opacity-20`}>
                      {workload.icon}
                    </div>
                    <CardTitle className="text-white text-lg">{workload.name}</CardTitle>
                  </div>
                  <span className="text-sm px-2 py-1 bg-white/10 rounded-full text-white/80">
                    {workload.type === 'llm' && 'LLM'}
                    {workload.type === 'image' && 'Image/Video'}
                    {workload.type === 'embeddings' && 'Embeddings'}
                    {workload.type === 'finetuning' && 'Fine-Tuning'}
                  </span>
                </div>
                <CardDescription className="text-white/60">
                  {workload.model} • {workload.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-white/70">GPU Load</span>
                      <span className="text-sm text-white/70">{workload.load}%</span>
                    </div>
                    <Progress value={workload.load} className="h-2" />
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-white/70">
                      <Server className="h-4 w-4 mr-1.5" />
                      <span>{workload.blocksAssigned.length} blocks</span>
                    </div>
                    <div className="flex items-center text-white/70">
                      <Zap className="h-4 w-4 mr-1.5" />
                      <span>{workload.clients} clients</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2 pb-4">
                <div className="text-xs text-white/50">
                  Block IDs: {workload.blocksAssigned.slice(0, 3).join(', ')}
                  {workload.blocksAssigned.length > 3 && ` +${workload.blocksAssigned.length - 3} more`}
                </div>
                <div className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${workload.color} text-white`}>
                  {workload.load > 90 ? 'High Demand' : workload.load > 70 ? 'Active' : 'Normal'}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Mine real AI. Run real workloads. Get paid in USDC. 
            Blocks power enterprise-grade compute operations for real AI applications.
          </p>
          <Button className="btn-electric py-6 text-lg">
            Own a Block & Start Earning
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default AIWorkloadsBoard;
