import { useState, useRef, useEffect } from 'react';
import { SendIcon, Bot, User } from 'lucide-react';
import { useChat } from '../hooks/useChat';
import { trackPageView } from '../services/firebase';

export default function Chat() {
  const { messages, loading, sendMessage } = useChat();
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => { trackPageView('ChatPage') }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  const quickLinks = [
    "How do I register to vote?",
    "What is the Electoral College?",
    "Election Day?"
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)' }}>
      <h2 style={{ flexShrink: 0, marginBottom: '1rem' }}>Ask AI</h2>
      
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '0.5rem', flexShrink: 0 }}>
        {quickLinks.map(link => (
          <button key={link} className="chip" onClick={() => sendMessage(link)}>
            {link}
          </button>
        ))}
      </div>

      <div 
        aria-live="polite" 
        aria-atomic="false" 
        id="chat-messages"
        className="chat-container" 
        style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem', paddingBottom: '1rem' }}
      >
        {messages.map((msg, i) => (
          <div key={i} className={`chat-bubble ${msg.role === 'user' ? 'chat-user' : 'chat-bot'}`}>
             <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', opacity: 0.8, fontSize: '0.75rem', fontWeight: 'bold' }}>
               {msg.role === 'user' ? <User size={14} aria-hidden="true"/> : <Bot size={14} aria-hidden="true"/>}
               {msg.role === 'user' ? 'You' : 'ElectEd'}
             </span>
             {msg.content}
          </div>
        ))}
        {loading && (
          <div className="chat-bubble chat-bot" style={{ padding: '1rem' }}>
             <span className="typing-indicator">Typing...</span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="input-group" style={{ flexShrink: 0, marginTop: '1rem' }}>
        <label htmlFor="chat-input" className="sr-only">Ask your election question</label>
        <input 
          id="chat-input"
          className="input" 
          placeholder="Type a question..." 
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button 
          className="btn btn-primary" 
          style={{ padding: '0.875rem', borderRadius: '50%' }} 
          onClick={handleSend}
          aria-label="Send message"
        >
          <SendIcon size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
