import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const initialPrompt = `Hi! I'm Sujay's virtual assistant. Ask me anything about Sujay's experience, skills, or projects. I'll help you discover why he'd be a great fit!`;

const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: initialPrompt }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (msg: string) => {
    setMessages((prev) => [...prev, { from: 'user', text: msg }]);
    setLoading(true);
    try {
      // Try Genkit first
      const payload = { prompt: msg, context: 'portfolio' };
      const callProvider = async (url: string) => {
  console.debug('[ChatbotWidget] calling', url, 'payload', payload);
        const r = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
  const text = await r.text();
  console.debug('[ChatbotWidget] response from', url, 'status', r.status, 'body-preview', text.slice(0, 1000));
        // try parse json
        try {
          return { ok: r.ok, body: JSON.parse(text) };
        } catch (_e) {
          return { ok: r.ok, body: text };
        }
      };

      let providerResp = await callProvider('/api/genkit');
      if (!providerResp.ok) {
        // fallback to Gemini
        providerResp = await callProvider('/api/gemini');
      }

      const botText = typeof providerResp.body === 'string' ? providerResp.body : (providerResp.body.text || JSON.stringify(providerResp.body));
      setMessages((prev) => [...prev, { from: 'bot', text: botText }]);
    } catch (err) {
      console.error('Chat error', err);
      setMessages((prev) => [...prev, { from: 'bot', text: 'Sorry, the assistant is unavailable right now.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {open && (
        <div className="w-80 max-w-full bg-black/90 rounded-lg shadow-lg border border-purple-800 mb-2 flex flex-col">
          <div className="p-3 border-b border-purple-900 text-purple-300 font-bold">Ask Sujay's Assistant</div>
          <div className="flex-1 p-3 overflow-y-auto max-h-72 text-sm text-gray-200">
            {messages.map((m, i) => (
              <div key={i} className={`mb-2 ${m.from === 'bot' ? 'text-left' : 'text-right'}`}>{m.text}</div>
            ))}
            {loading && <div className="text-xs text-gray-400">Thinking...</div>}
          </div>
          <form
            className="flex border-t border-purple-900"
            onSubmit={e => {
              e.preventDefault();
              if (input.trim()) {
                sendMessage(input.trim());
                setInput('');
              }
            }}
          >
            <input
              className="flex-1 bg-transparent px-3 py-2 text-white focus:outline-none"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question..."
            />
            <button type="submit" className="px-3 text-purple-400 hover:text-purple-200">Send</button>
          </form>
        </div>
      )}
      <button
        className="bg-purple-700 hover:bg-purple-800 text-white rounded-full p-3 shadow-lg"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chatbot"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default ChatbotWidget;
