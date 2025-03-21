
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { invokeEdgeFunction } from "@/utils/supabase-edge-functions";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HelloResponse {
  message: string;
  timestamp: string;
  environment: string;
}

export function EdgeFunctionTest() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState<HelloResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleTestFunction = async () => {
    setLoading(true);
    try {
      const data = await invokeEdgeFunction<HelloResponse>("hello", { name: name || "World" });
      setResponse(data);
      toast({
        title: "Success!",
        description: "Edge function called successfully",
        variant: "default",
      });
    } catch (error) {
      console.error("Error testing edge function:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to call edge function",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Edge Function Test</CardTitle>
        <CardDescription>
          Test your Supabase Edge Functions by entering a name and clicking the button
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <Input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
          <Button onClick={handleTestFunction} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Testing...
              </>
            ) : (
              "Test Function"
            )}
          </Button>
        </div>

        {response && (
          <div className="bg-slate-900 text-white p-4 rounded-md">
            <p className="font-mono text-sm">{response.message}</p>
            <p className="font-mono text-sm text-slate-400 mt-2">
              Time: {response.timestamp}
            </p>
            <p className="font-mono text-sm text-slate-400">
              Environment: {response.environment}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Edge Functions provide serverless backend functionality for your application.
      </CardFooter>
    </Card>
  );
}
