import TokenAddress from './TokenAddress';
import { SOCIAL_LINKS } from '../utils/constants';
import bearGif from '../assets/GIF.gif';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      {/* Psychedelic background layers */}
      <div className="absolute inset-0 psychedelic-bg animate-pulse-rainbow opacity-30" />
      <div className="absolute inset-0">
        {/* Rotating gradient orbs */}
        <div className="absolute inset-0 animate-rotate">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        </div>
        
        {/* Floating orbs */}
        <div className="animate-pulse absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-20" />
        <div className="animate-pulse delay-150 absolute top-40 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full filter blur-3xl opacity-20" />
        <div className="animate-pulse delay-300 absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500 via-yellow-500 to-pink-500 rounded-full filter blur-3xl opacity-20" />
        
        {/* Additional psychedelic elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-black/50" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text animate-float">
          DMT BEAR
        </h1>
        <img 
          src={bearGif} 
          alt="DMT BEAR"
          className="w-[450px] h-[450px] mx-auto mb-8 rounded-lg object-cover"
        />
        <div className="flex flex-col items-center">
          <a 
            href={SOCIAL_LINKS.BUY}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full text-lg font-bold hover:opacity-90 transition-opacity"
          >
            Buy Now
          </a>
          <TokenAddress />
          <div className="mt-8 flex flex-col items-center">
            <p className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Join the Trip
            </p>
            <div className="flex gap-4 flex-col">
              <div className="flex gap-4">
                <a
                  href={SOCIAL_LINKS.TWITTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-32 bg-[#E559F9] hover:bg-opacity-90 text-white px-4 py-2.5 rounded-full transition-opacity"
                >
                  Twitter
                </a>
                <a
                  href={SOCIAL_LINKS.TELEGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-32 bg-[#9945FF] hover:bg-opacity-90 text-white px-4 py-2.5 rounded-full transition-opacity"
                >
                  Telegram
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href={SOCIAL_LINKS.DEXSCREENER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-32 bg-[#00b8d9] hover:bg-opacity-90 text-white px-4 py-2.5 rounded-full transition-opacity"
                >
                  DexScreener
                </a>
                <a
                  href={SOCIAL_LINKS.DEXTOOLS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-32 bg-[#36b37e] hover:bg-opacity-90 text-white px-4 py-2.5 rounded-full transition-opacity"
                >
                  DexTools
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}