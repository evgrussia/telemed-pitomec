import { useState } from 'react';

export function Chat({ onBack }: { onBack: () => void }) {
  const [message, setMessage] = useState('');
  const [messages] = useState([
    { id: 1, sender: 'user', text: 'Здравствуйте, у кота вчера началась вялость', time: '10:23' },
    { id: 2, sender: 'doctor', text: 'Добрый день! Когда последний раз ел? Есть ли рвота?', time: '10:25' },
    { id: 3, sender: 'user', text: 'Ел сегодня утром, рвоты нет', time: '10:27' },
    { id: 4, sender: 'doctor', text: 'Понятно. Измеряли температуру? Заметили изменения в поведении помимо вялости?', time: '10:28' },
  ]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 py-4 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1">
          <p style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
            Анна Петрова
          </p>
          <p className="text-muted-foreground" style={{ fontSize: 'var(--text-subhead)' }}>
            Терапевт
          </p>
        </div>
        <button 
          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
          style={{ color: 'var(--primary)' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {messages.map(msg => (
          <ChatMessage 
            key={msg.id}
            sender={msg.sender as 'user' | 'doctor'}
            text={msg.text}
            time={msg.time}
          />
        ))}
      </div>

      {/* Input */}
      <div className="bg-card border-t border-border px-6 py-4">
        <div className="flex items-end gap-3">
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
            <span className="text-xl">📎</span>
          </button>
          <div className="flex-1 bg-input-background rounded-2xl px-4 py-3 border border-border focus-within:ring-2 focus-within:ring-primary/20">
            <input 
              type="text"
              placeholder="Сообщение"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent outline-none"
              style={{ fontSize: 'var(--text-body)' }}
            />
          </div>
          <button 
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function ChatMessage({ sender, text, time }: {
  sender: 'user' | 'doctor';
  text: string;
  time: string;
}) {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className="max-w-[75%] space-y-1">
        <div 
          className="px-4 py-3 rounded-2xl"
          style={{
            backgroundColor: isUser ? 'var(--primary)' : 'var(--secondary)',
            color: isUser ? 'white' : 'var(--foreground)',
            fontSize: 'var(--text-body)',
            lineHeight: '1.5',
            borderBottomRightRadius: isUser ? '4px' : undefined,
            borderBottomLeftRadius: !isUser ? '4px' : undefined
          }}
        >
          {!isUser && (
            <p style={{ 
              fontSize: 'var(--text-caption)', 
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: '0.25rem',
              opacity: 0.7
            }}>
              👩‍⚕️ Ветеринар
            </p>
          )}
          {text}
        </div>
        <p 
          className={`text-muted-foreground ${isUser ? 'text-right' : 'text-left'}`}
          style={{ fontSize: 'var(--text-caption)' }}
        >
          {time}
        </p>
      </div>
    </div>
  );
}
