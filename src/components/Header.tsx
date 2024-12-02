import { Send } from 'lucide-react';
import { XIcon } from './icons/XIcon';
import { SOCIAL_LINKS } from '../utils/constants';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
          DMT BEAR
        </div>
        <div className="flex gap-6">
          <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors">
            <XIcon size={24} />
          </a>
          <a href={SOCIAL_LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
            <Send size={24} />
          </a>
        </div>
      </nav>
    </header>
  );
}