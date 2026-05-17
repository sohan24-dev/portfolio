"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChatbubblesOutline, IoSend, IoClose, IoSparkles } from "react-icons/io5";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "model", text: "Hello! I'm SOHAN's AI assistant. How can I help you today?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = { role: "user", text: message };
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.text,
          history: chatHistory,
        }),
      });

      const data = await response.json();
      if (data.reply) {
        setChatHistory((prev) => [...prev, { role: "model", text: data.reply }]);
      } else {
        setChatHistory((prev) => [...prev, { role: "model", text: data.error || "Sorry, I encountered an error." }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setChatHistory((prev) => [...prev, { role: "model", text: "I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[320px] md:w-[380px] h-[500px] bg-surface/90 backdrop-blur-xl border border-outline/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-primary text-white flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <IoSparkles className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-wide">SOHAN AI</h3>
                  <p className="text-[10px] opacity-80">Online | Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <IoClose size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm transition-colors duration-300 ${msg.role === "user"
                        ? "bg-primary text-white rounded-tr-none shadow-md"
                        : "bg-surface text-on-surface border border-outline/10 rounded-tl-none shadow-sm"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-surface p-3 rounded-2xl rounded-tl-none border border-outline/10 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-surface border-t border-outline/10 flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-outline/5 border border-outline/10 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-primary text-on-surface transition-all outline-none"
              />
              <button
                type="submit"
                disabled={isLoading || !message.trim()}
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center disabled:opacity-50 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                <IoSend size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-primary/40 transition-all border border-white/10"
      >
        {isOpen ? <IoClose size={28} /> : <IoChatbubblesOutline size={28} />}
      </motion.button>
    </div>
  );
};

export default ChatBot;