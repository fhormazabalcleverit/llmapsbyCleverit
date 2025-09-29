import React, { useState } from 'react';
import { Mic, Send, BarChart3, LayoutDashboard, FileText } from 'lucide-react';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 mb-8">
      {/* Chat Interface Container */}
      <div className="bg-gradient-to-r from-pink-500/20 via-purple-600 to-pink-500 p-1 rounded-2xl backdrop-blur-sm">
        <div className="bg-black rounded-2xl p-6 border border-gray-700/30">
          {/* Chat Input */}
          <div className="bg-gray-800/50 rounded-xl p-4 mb-6 border border-gray-600/30">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Pregúntale a CleverIT LLMApp"
                className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg outline-none"
              />
              <button
                onClick={toggleListening}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isListening
                    ? 'bg-pink-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <Mic className="w-5 h-5" />
              </button>
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Enviar
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-start gap-6 mb-6">
            <button className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 group">
              <BarChart3 className="w-4 h-4 group-hover:text-pink-400" />
              <span className="text-sm">Métricas</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 group">
              <LayoutDashboard className="w-4 h-4 group-hover:text-pink-400" />
              <span className="text-sm">Dashboard</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 group">
              <FileText className="w-4 h-4 group-hover:text-pink-400" />
              <span className="text-sm">Reportes</span>
            </button>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm">CleverIT está en línea y listo para ayudarte</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;