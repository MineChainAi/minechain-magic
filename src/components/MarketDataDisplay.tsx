
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { invokeEdgeFunction } from "@/utils/supabase-edge-functions";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowUpIcon, ArrowDownIcon, RefreshCwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface MarketData {
  symbol: string;
  name: string;
  currentPrice: number;
  priceChange24h: number;
  marketCap: number;
  volume24h: number;
  lastUpdated: string;
}

interface MarketDataResponse {
  data: MarketData[];
  timestamp: string;
  source: string;
}

export function MarketDataDisplay() {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { toast } = useToast();

  const fetchMarketData = async () => {
    try {
      const isRefresh = !loading;
      if (isRefresh) setRefreshing(true);
      
      const response = await invokeEdgeFunction<MarketDataResponse>("market-data");
      setMarketData(response.data);
      
      if (isRefresh) {
        toast({
          title: "Market data refreshed",
          description: `Latest data as of ${new Date().toLocaleTimeString()}`,
        });
      }
    } catch (error) {
      console.error("Failed to fetch market data:", error);
      toast({
        title: "Error fetching market data",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
    
    // Refresh data every 60 seconds
    const interval = setInterval(fetchMarketData, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: value > 1000 ? 0 : 2,
      notation: value > 1000000 ? 'compact' : 'standard'
    }).format(value);
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl">Crypto Market Data</CardTitle>
          <CardDescription>Real-time cryptocurrency market information</CardDescription>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={fetchMarketData} 
          disabled={refreshing}
          className="h-8 gap-1"
        >
          <RefreshCwIcon className={`h-3.5 w-3.5 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">24h Change</TableHead>
                  <TableHead className="text-right hidden sm:table-cell">Market Cap</TableHead>
                  <TableHead className="text-right hidden md:table-cell">Volume (24h)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {marketData.map((coin) => (
                  <TableRow key={coin.symbol}>
                    <TableCell className="font-medium">
                      <div className="flex flex-col">
                        <span>{coin.symbol}</span>
                        <span className="text-sm text-muted-foreground">{coin.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(coin.currentPrice)}
                    </TableCell>
                    <TableCell className={`text-right ${coin.priceChange24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      <div className="flex items-center justify-end gap-1">
                        {coin.priceChange24h >= 0 ? 
                          <ArrowUpIcon className="h-3.5 w-3.5" /> : 
                          <ArrowDownIcon className="h-3.5 w-3.5" />
                        }
                        {Math.abs(coin.priceChange24h).toFixed(2)}%
                      </div>
                    </TableCell>
                    <TableCell className="text-right hidden sm:table-cell">
                      {formatCurrency(coin.marketCap)}
                    </TableCell>
                    <TableCell className="text-right hidden md:table-cell">
                      {formatCurrency(coin.volume24h)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
        <div className="text-xs text-muted-foreground mt-4 text-center">
          Data updates automatically every minute. Last update: {
            marketData.length > 0 
              ? new Date(marketData[0].lastUpdated).toLocaleTimeString() 
              : 'Loading...'
          }
        </div>
      </CardContent>
    </Card>
  );
}
