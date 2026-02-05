import { useState, useEffect } from 'react';
import { Button } from '../components/Button';

export function VideoCall({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/60 to-transparent p-6">
        <div className="flex items-center justify-between">
          <div>
            <p style={{ fontSize: 'var(--text-body-l)', fontWeight: 'var(--font-weight-semibold)' }}>
              Анна Петрова
            </p>
            <p style={{ fontSize: 'var(--text-subhead)', opacity: 0.8 }}>
              Видеоконсультация
            </p>
          </div>
          <div 
            className="px-4 py-2 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          >
            <span style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-medium)' }}>
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>

      {/* Main Video Area */}
      <div className="flex-1 relative">
        {/* Doctor's Video (Main) */}
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div 
              className="w-32 h-32 rounded-full mx-auto flex items-center justify-center text-6xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              👩‍⚕️
            </div>
            <p style={{ fontSize: 'var(--text-body-l)', opacity: 0.8 }}>
              Анна Петрова
            </p>
          </div>
        </div>

        {/* User's Video (Picture-in-Picture) */}
        <div 
          className="absolute top-20 right-6 w-28 h-40 rounded-2xl overflow-hidden border-2 border-white/20"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          {isCameraOff ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-3xl">📷</div>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <div className="text-3xl">👤</div>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
        <div className="flex items-center justify-center gap-6">
          {/* Mute Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-16 h-16 rounded-full flex items-center justify-center transition-all active:scale-95"
            style={{ 
              backgroundColor: isMuted ? 'var(--error)' : 'rgba(255,255,255,0.2)'
            }}
          >
            <div className="text-2xl">{isMuted ? '🔇' : '🎤'}</div>
          </button>

          {/* End Call Button */}
          <button
            onClick={() => onNavigate('home')}
            className="w-20 h-20 rounded-full flex items-center justify-center transition-all active:scale-95"
            style={{ backgroundColor: 'var(--error)' }}
          >
            <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
              <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.68-1.36-2.66-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"/>
            </svg>
          </button>

          {/* Camera Button */}
          <button
            onClick={() => setIsCameraOff(!isCameraOff)}
            className="w-16 h-16 rounded-full flex items-center justify-center transition-all active:scale-95"
            style={{ 
              backgroundColor: isCameraOff ? 'var(--error)' : 'rgba(255,255,255,0.2)'
            }}
          >
            <div className="text-2xl">{isCameraOff ? '📷' : '📹'}</div>
          </button>
        </div>
      </div>
    </div>
  );
}
