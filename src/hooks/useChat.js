import { useState } from 'react';
import { trackChatQuestion, saveChatLog } from '../services/firebase';

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    // Track analytics & Save to Firestore
    trackChatQuestion(trimmed);
    saveChatLog(trimmed);

    const history = [...messages, { role: 'user', content: trimmed }];
    setMessages(history);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "API Error");
      
      setMessages([...history, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages([...history, { role: 'assistant', content: `Error: ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, loading, sendMessage, setMessages };
}
