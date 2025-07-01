"use client";

import { useState } from "react";
import { type SDKMessage } from "@anthropic-ai/claude-code";
import MessageDisplay from "@/components/MessageDisplay";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [messages, setMessages] = useState<SDKMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    setMessages([]);
    
    try {
      console.log("Sending prompt to API:", prompt);
      
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await response.json();
      console.log("API response:", data);
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to generate code");
      }
      
      if (data.messages) {
        setMessages(data.messages);
      }
      
      // Clear prompt after successful generation
      setPrompt("");
      
    } catch (err: any) {
      console.error("Error generating code:", err);
      setError(err.message || "An error occurred");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      {/* Lovable-style gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orange gradient circle */}
        <div className="absolute -top-[40%] -left-[20%] w-[800px] h-[800px] bg-orange-500 rounded-full opacity-30 blur-[128px]" />
        
        {/* Pink gradient circle */}
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-pink-500 rounded-full opacity-25 blur-[128px]" />
        
        {/* Blue gradient circle */}
        <div className="absolute bottom-[10%] left-[30%] w-[700px] h-[700px] bg-blue-500 rounded-full opacity-20 blur-[128px]" />
        
        {/* Additional ambient light */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Build faster with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500">
              AI-powered development
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Turn your ideas into production-ready code in minutes. 
            Powered by Claude's advanced AI capabilities.
          </p>

          {/* Input Section */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative group">
              <div className="relative flex items-end bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-2xl p-1">
                <textarea
                  placeholder="Describe what you want to build..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleGenerate();
                    }
                  }}
                  className="flex-1 px-5 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg resize-none min-h-[120px] max-h-[300px]"
                  rows={3}
                />
                
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="mb-3 mr-3 p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 group"
                >
                  {isGenerating ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Example prompts */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setPrompt("Create a todo list app with React")}
                className="px-4 py-2 text-sm text-gray-400 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700/50 transition-colors border border-gray-700"
              >
                Todo list app
              </button>
              <button
                onClick={() => setPrompt("Build a landing page with hero section")}
                className="px-4 py-2 text-sm text-gray-400 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700/50 transition-colors border border-gray-700"
              >
                Landing page
              </button>
              <button
                onClick={() => setPrompt("Create a REST API with authentication")}
                className="px-4 py-2 text-sm text-gray-400 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700/50 transition-colors border border-gray-700"
              >
                REST API
              </button>
              <a
                href="/connect4"
                className="px-4 py-2 text-sm text-gray-400 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700/50 transition-colors border border-gray-700"
              >
                🎮 Play Connect 4
              </a>
            </div>
          </div>
          
          {/* Error display */}
          {error && (
            <div className="mt-4 p-4 bg-red-900/20 border border-red-700 rounded-xl">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}
        </div>
        
        {/* Messages Display */}
        <MessageDisplay messages={messages} />
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}