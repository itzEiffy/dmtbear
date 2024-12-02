import { Copy } from 'lucide-react';
import { useState } from 'react';
import { TOKEN_ADDRESS } from '../utils/constants';

export default function TokenAddress() {
  const [copied, setCopied] = useState(false);
  const displayAddress = `${TOKEN_ADDRESS.slice(0, 8)}...${TOKEN_ADDRESS.slice(-3)}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-lg rounded-lg p-4 border border-white/10">
      <span className="text-gray-400 text-sm">CA:</span>
      <code className="text-sm text-white font-mono">{displayAddress}</code>
      <button
        onClick={copyToClipboard}
        className="ml-2 p-1.5 rounded-md hover:bg-white/10 transition-colors"
        title="Copy to clipboard"
      >
        <Copy size={16} className={copied ? "text-green-400" : "text-gray-400"} />
      </button>
    </div>
  );
}