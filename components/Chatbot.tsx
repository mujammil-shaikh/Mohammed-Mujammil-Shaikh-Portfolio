import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_CONTEXT, PROFILE_DATA } from '../constants';
import { ChatBubbleIcon, PaperAirplaneIcon, XIcon } from './icons';

interface Message {
  role: 'user' | 'model' | 'error';
  text: string;
}

const TypingIndicator = () => (
    <div className="flex items-center space-x-1 p-3">
        <span className="text-xs text-slate-500 dark:text-slate-400">AI is thinking</span>
        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce"></div>
    </div>
);

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isInitialized) {
        setIsInitialized(true); // Attempt initialization only once per opening
        const apiKey = process.env.API_KEY;

        if (!apiKey) {
            console.error("Gemini API key is missing. Please set it in your environment variables.");
            setMessages([{ role: 'error', text: "Sorry, the AI assistant isn't configured correctly (missing API key)." }]);
            return;
        }

        try {
            const ai = new GoogleGenAI({ apiKey });
            const newChat = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: `You are a helpful AI assistant representing Shaikh Mohammad Mujammil, based on his portfolio.
                    Your name is Mujammil's AI Persona.
                    You must answer questions strictly based on the provided context document.
                    You must speak in the first person, as if you are Shaikh Mohammad Mujammil. For example, use "I," "my," and "me."
                    If a question cannot be answered from the context, politely state that the information is not in your knowledge base and you cannot answer. Do not invent information.
                    Keep your answers concise and to the point.
                    Be professional, friendly, and helpful.
                    Here is the full context of the portfolio:\n\n${PORTFOLIO_CONTEXT}`,
                },
            });
            setChat(newChat);
             setMessages([
                { role: 'model', text: `Hello! I'm Mujammil's AI persona. Feel free to ask me anything about my experience, projects, or skills.` }
            ]);
        } catch (error) {
            console.error("Failed to initialize Gemini:", error);
            setMessages([{ role: 'error', text: 'Sorry, the AI assistant could not be loaded.' }]);
        }
    }
  }, [isOpen, isInitialized]);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (input.trim() === '' || !chat) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: input });
      const modelMessage: Message = { role: 'model', text: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("Gemini API error:", error);
      const errorMessage: Message = { role: 'error', text: 'Sorry, I encountered an error. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const toggleOpen = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (!newState) {
        // Reset state when closing
        setIsInitialized(false);
        setMessages([]);
        setChat(null);
    }
  }

  return (
    <>
      <button
        onClick={toggleOpen}
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-sky-600 dark:bg-sky-500 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse"
        aria-label="Open AI chat"
      >
        <ChatBubbleIcon className="w-8 h-8" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed bottom-24 left-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[60vh] max-h-[500px] flex flex-col bg-slate-50/70 dark:bg-slate-950/70 backdrop-blur-xl border border-slate-300/50 dark:border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden"
          >
            <header className="flex items-center justify-between p-4 border-b border-slate-300/50 dark:border-slate-700/50 flex-shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-200">AI Persona</h3>
                </div>
                <button onClick={toggleOpen} className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200" aria-label="Close chat">
                    <XIcon className="w-6 h-6" />
                </button>
            </header>
            
            <div className="flex-grow p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm shadow-inner">{PROFILE_DATA.name[0]}</div>}
                  <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${
                    msg.role === 'user' ? 'bg-sky-600 text-white rounded-br-none' : 
                    msg.role === 'model' ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none shadow-sm' : 
                    'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-bl-none'
                  }`}>
                    <p className="text-sm break-words whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-slate-300/50 dark:border-slate-700/50 flex-shrink-0">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 rounded-lg px-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-grow bg-transparent p-2 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
                  disabled={isLoading || !chat}
                />
                <button onClick={handleSend} disabled={isLoading || input.trim() === '' || !chat} className="p-2 text-sky-600 dark:text-sky-400 disabled:text-slate-400 dark:disabled:text-slate-600 hover:text-sky-500 dark:hover:text-sky-300 transition-colors duration-200">
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};