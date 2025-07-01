import { type SDKMessage } from "@anthropic-ai/claude-code";

interface MessageDisplayProps {
  messages: SDKMessage[];
}

export default function MessageDisplay({ messages }: MessageDisplayProps) {
  if (messages.length === 0) return null;
  
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 max-h-[600px] overflow-y-auto">
        <h3 className="text-lg font-semibold text-white mb-4">Agent Messages</h3>
        
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="border-b border-gray-800 pb-4 last:border-0">
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono text-gray-500 mt-1">
                  [{message.type}]
                </span>
                
                <div className="flex-1">
                  {message.type === 'assistant' && (
                    <div className="text-gray-300 whitespace-pre-wrap">
                      {typeof message.message?.content === 'string' 
                        ? message.message.content 
                        : JSON.stringify(message.message?.content, null, 2)}
                    </div>
                  )}
                  
                  {message.type === 'user' && (
                    <div className="text-blue-400 whitespace-pre-wrap">
                      {typeof message.message?.content === 'string'
                        ? message.message.content
                        : JSON.stringify(message.message?.content, null, 2)}
                    </div>
                  )}
                  
                  {message.type === 'system' && (
                    <div className="text-green-400 text-sm">
                      <pre className="whitespace-pre-wrap">
                        {JSON.stringify(message, null, 2)}
                      </pre>
                    </div>
                  )}
                  
                  {message.type === 'result' && (
                    <div className="text-purple-400">
                      <div>Status: {(message as any).subtype}</div>
                      <div>Result: {(message as any).result}</div>
                      {(message as any).total_cost_usd && (
                        <div className="text-xs text-gray-500 mt-1">
                          Cost: ${(message as any).total_cost_usd.toFixed(4)}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {message.type === 'tool_use' && (
                    <div className="text-yellow-400 font-mono text-sm">
                      Tool: {(message as any).name}
                      {(message as any).input && (
                        <pre className="mt-2 text-xs text-gray-400 overflow-x-auto">
                          {JSON.stringify((message as any).input, null, 2)}
                        </pre>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}