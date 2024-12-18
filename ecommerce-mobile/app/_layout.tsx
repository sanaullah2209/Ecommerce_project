import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import "@/global.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout(){
    const queryClient = new QueryClient();
    
    return(
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider>
                <Stack>
                    <Stack.Screen name="index" options={{title:'shop'}}/>
                    <Stack.Screen name="product/[id]" options={{title:'Product'}}/>
                </Stack>
            </GluestackUIProvider>
        </QueryClientProvider>
    )
}