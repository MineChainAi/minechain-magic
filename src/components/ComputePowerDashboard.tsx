
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, LineChart, Line, BarChart, Bar } from 'recharts';
import { Cpu, Zap, Server, ArrowRight, RefreshCw, Database, TrendingUp, Coins } from 'lucide-react';

// Simulate live data - in a real app, this would come from an API
const generateRandomData = () => {
  const now = new Date();
  const hours = now.getHours();
  const baseLoad = 75 + Math.random() * 20;
  
  return {
    time: `${hours}:00`,
    gpuLoad: Math.min(98, baseLoad),
    taskCount: Math.floor(80 + Math.random() * 40),
    efficiency: 85 + Math.random() * 10,
    inference: 120000 + Math.floor(Math.random() * 30000),
    earnings: 5000 + Math.floor(Math.random() * 3000) 
  };
};

// Generate historical data for charts
const generateHistoricalData = () => {
  const data = [];
  const now = new Date();
  
  for (let i = 0; i < 24; i++) {
    const hour = (now.getHours() - 23 + i + 24) % 24;
    const baseLoad = 70 + Math.sin(i * 0.5) * 15 + Math.random() * 10;
    
    data.push({
      time: `${hour}:00`,
      gpuLoad: Math.min(98, baseLoad),
      taskCount: Math.floor(70 + Math.sin(i * 0.5) * 30 + Math.random() * 20),
      efficiency: 82 + Math.sin(i * 0.5) * 8 + Math.random() * 5,
      inference: 100000 + Math.floor(Math.sin(i * 0.5) * 40000 + Math.random() * 20000),
      earnings: 4000 + Math.floor(Math.sin(i * 0.5) * 2000 + Math.random() * 1000)
    });
  }
  
  return data;
};

const ComputePowerDashboard = () => {
  const [liveData, setLiveData] = useState(generateRandomData());
  const [chartData, setChartData] = useState(generateHistoricalData());
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generateRandomData();
      setLiveData(newData);
      
      setChartData(prevData => {
        const newChartData = [...prevData.slice(1), newData];
        return newChartData;
      });
      
      // Simulate brief "updating" state
      setIsUpdating(true);
      setTimeout(() => setIsUpdating(false), 800);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Format large numbers with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-cosmic-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-neon-cyan/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90">
            Real-Time AI Compute Power
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            MineChain's AI mining network is fueled by enterprise-grade <span className="text-neon-cyan font-medium">96 x NVIDIA RTX 4090 GPUs</span>, 
            processing AI workloads at massive speeds. Track live performance below.
          </p>
        </div>
        
        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Live Metrics */}
          <Card className="lg:col-span-8 glass border-cosmic-purple/20">
            <CardHeader className="pb-0">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl text-white">
                  Live AI Compute Stats
                </CardTitle>
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${isUpdating ? 'bg-neon-cyan animate-pulse' : 'bg-electric-orange'}`}></span>
                  <span className="text-xs text-white/60 flex items-center">
                    {isUpdating ? 'Updating' : 'Live'} 
                    <RefreshCw size={12} className={`ml-1 ${isUpdating ? 'animate-spin' : ''}`} />
                  </span>
                </div>
              </div>
              <CardDescription className="text-white/60">
                Monitoring 96 NVIDIA RTX 4090 GPUs in real-time
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {/* GPU Load Chart */}
              <div className="mb-8 h-64">
                <ChartContainer
                  className="h-full"
                  config={{
                    gpuLoad: { theme: { dark: '#29B6F6', light: '#29B6F6' } },
                    taskCount: { theme: { dark: '#4B0082', light: '#4B0082' } },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="gpuLoadGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#29B6F6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#29B6F6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="taskCountGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4B0082" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#4B0082" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="time" 
                        stroke="#4B4B4B" 
                        tick={{ fill: '#9CA3AF', fontSize: 10 }} 
                        axisLine={{ stroke: '#333' }}
                      />
                      <YAxis 
                        stroke="#4B4B4B" 
                        tick={{ fill: '#9CA3AF', fontSize: 10 }} 
                        axisLine={{ stroke: '#333' }}
                        domain={[0, 100]}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent 
                            labelFormatter={(value) => `Time: ${value}`}
                          />
                        }
                      />
                      <Area 
                        type="monotone" 
                        dataKey="gpuLoad" 
                        name="GPU Load (%)" 
                        stroke="#29B6F6" 
                        fillOpacity={1}
                        fill="url(#gpuLoadGradient)" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="taskCount" 
                        name="AI Tasks" 
                        stroke="#4B0082" 
                        fillOpacity={1}
                        fill="url(#taskCountGradient)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg glass border border-cosmic-purple/20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-white/70">Total Compute Power</h3>
                    <Cpu size={18} className="text-neon-cyan" />
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">{(89.6 + Math.random() * 10).toFixed(1)}</span>
                    <span className="ml-1 text-xl text-neon-cyan">PFLOPS</span>
                  </div>
                  <Progress className="h-1.5 mt-2" value={liveData.gpuLoad} />
                </div>
                
                <div className="p-4 rounded-lg glass border border-cosmic-purple/20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-white/70">AI Workloads Running</h3>
                    <Zap size={18} className="text-electric-orange" />
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">{liveData.taskCount}</span>
                    <span className="ml-1 text-sm text-white/60">AI jobs in progress</span>
                  </div>
                  <Progress className="h-1.5 mt-2" value={liveData.taskCount / 1.5} />
                </div>
                
                <div className="p-4 rounded-lg glass border border-cosmic-purple/20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-white/70">Energy Efficiency</h3>
                    <Server size={18} className="text-cosmic-purple" />
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">{liveData.efficiency.toFixed(1)}</span>
                    <span className="ml-1 text-sm text-white/60">% Optimized</span>
                  </div>
                  <Progress className="h-1.5 mt-2" value={liveData.efficiency} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* USDC Rewards Tracker */}
          <Card className="lg:col-span-4 glass border-cosmic-purple/20">
            <CardHeader>
              <CardTitle className="text-xl text-white">
                AI Mining Earnings
              </CardTitle>
              <CardDescription className="text-white/60">
                USDC rewards from AI compute power
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-cosmic-purple/10 border border-cosmic-purple/20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-white/70">Total USDC (Today)</h3>
                    <Coins size={18} className="text-electric-orange" />
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">$</span>
                    <span className="text-2xl font-bold text-white">{formatNumber(liveData.earnings)}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <TrendingUp size={14} className="text-neon-cyan mr-1" />
                    <span className="text-xs text-neon-cyan">+{(Math.random() * 5).toFixed(1)}% from yesterday</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-cosmic-purple/10 border border-cosmic-purple/20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-white/70">Total USDC (All-Time)</h3>
                    <Database size={18} className="text-neon-cyan" />
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">$</span>
                    <span className="text-2xl font-bold text-white">5,245,879</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-cosmic-purple/10 border border-cosmic-purple/20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-white/70">Average Per Block</h3>
                    <Cpu size={18} className="text-cosmic-purple" />
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">$32.48</span>
                    <span className="ml-1 text-sm text-white/60">per day</span>
                  </div>
                </div>
                
                <Button className="w-full py-6 text-lg btn-electric">
                  Own a Block & Start Earning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* AI Compute Details */}
          <Card className="lg:col-span-4 glass border-cosmic-purple/20">
            <CardHeader>
              <CardTitle className="text-xl text-white">
                Active GPUs
              </CardTitle>
              <CardDescription className="text-white/60">
                Enterprise hardware status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute -top-12 -left-12 -right-12 -bottom-12 pointer-events-none">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-56 h-56 rounded-full border border-cosmic-purple/30 flex items-center justify-center">
                      <div className="w-44 h-44 rounded-full border border-neon-cyan/20 flex items-center justify-center animate-spin-slow">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cosmic-purple/20 to-neon-cyan/20 flex items-center justify-center glow-purple">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-white">96</div>
                            <div className="text-xs text-white/60">RTX 4090s</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center h-72">
                  <div className="text-center z-10">
                    <div className="grid grid-cols-2 gap-6 mt-4">
                      <div className="text-center">
                        <div className="text-neon-cyan text-sm font-mono">VRAM Usage</div>
                        <div className="text-white text-lg font-medium">93.7%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-cosmic-purple text-sm font-mono">Temperature</div>
                        <div className="text-white text-lg font-medium">62°C</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* AI Inferences */}
          <Card className="lg:col-span-8 glass border-cosmic-purple/20">
            <CardHeader className="pb-0">
              <CardTitle className="text-xl text-white">
                AI Inferences Completed
              </CardTitle>
              <CardDescription className="text-white/60">
                Total AI power processed
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-64">
                <ChartContainer
                  className="h-full w-full"
                  config={{
                    inference: { theme: { dark: '#FF6700', light: '#FF6700' } },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <XAxis 
                        dataKey="time" 
                        stroke="#4B4B4B" 
                        tick={{ fill: '#9CA3AF', fontSize: 10 }} 
                        axisLine={{ stroke: '#333' }}
                      />
                      <YAxis 
                        stroke="#4B4B4B" 
                        tick={{ fill: '#9CA3AF', fontSize: 10 }} 
                        axisLine={{ stroke: '#333' }}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent 
                            labelFormatter={(value) => `Time: ${value}`} 
                          />
                        }
                      />
                      <Bar 
                        dataKey="inference" 
                        name="AI Inferences" 
                        fill="#FF6700"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-white">{formatNumber(347952488)}</span>
                  <span className="ml-2 text-sm text-white/60">Total AI Inferences</span>
                </div>
                <div className="text-sm text-white/60">
                  <span className="text-neon-cyan">+{formatNumber(liveData.inference)}</span> in the last hour
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default ComputePowerDashboard;
