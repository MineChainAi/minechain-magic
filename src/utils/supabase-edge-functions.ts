
import { supabase } from "@/integrations/supabase/client";

/**
 * Utility function to invoke Supabase Edge Functions
 * @param functionName - Name of the Edge Function to invoke
 * @param payload - Optional payload to send to the function
 * @returns Promise with the function response data
 */
export async function invokeEdgeFunction<T = any, P = any>(
  functionName: string, 
  payload?: P
): Promise<T> {
  try {
    const { data, error } = await supabase.functions.invoke<T>(
      functionName,
      {
        body: payload || {},
      }
    );

    if (error) {
      console.error(`Error invoking edge function ${functionName}:`, error);
      throw new Error(error.message || "Failed to invoke edge function");
    }

    return data;
  } catch (error) {
    console.error(`Error in edge function ${functionName}:`, error);
    throw error;
  }
}
