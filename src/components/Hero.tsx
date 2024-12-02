import TokenAddress from './TokenAddress';
import { SOCIAL_LINKS } from '../utils/constants';
import bearGif from '/GIF.gif';

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
          alt="'https://dmtbear.s3.eu-central-1.amazonaws.com/GIF.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZBH7SJKY3VYTRJAB%2F20241202%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20241202T212450Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aDGV1LWNlbnRyYWwtMSJHMEUCIQCiePrJWRsy2bWCfFWIdKAhz29GpT0l3yNtCJumeuKmdAIgEUywi0cpwtYwOrJx48KX7yDDvPT2ILd6EXnmRzTIBQkq8QIIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARADGgw2MjExNTg3NDY4MDEiDI60oo2qs8G3Zez7ByrFAoVAZ5Vl10vA4w693y0fgxxlUlmCMXt7gtk%2B3QEsu5WrlsEglEXJBM4dk9HYQlznUgCkv1yhB5VPrG07YoiQt%2BTo3CXNHePaoug%2Bix8nsuMzz9seZQrecI8vMpcxU02w7wAf4t8tKtk0Xjp463IthLz6cmU2ZwgByFCwM2jGulWlBFOes6ObOaiWvXZj1KVFSMIg%2B%2BW7fuIClwa1QQTwT1iLDzd4RMFP17lP9Cv5KTuiwMVwJkdN4ZKpddX3Q6CyIRneYOEdOcPlxDxOV5DeKfoFxOc4D%2FftJ4ru07Xbsft6e9YgaScIIg%2B5oiUgABy7kWg9Jhm21fi0AszQB2MZlyc40U31o%2BuqsXeTLyDceumOUOKN7ri0Dz7RfAHmUFyhnN20qkoo3PN%2BTqGXfiIE39XuFUUasKvl1IBVtQPYm6ILsEJ%2BZIUwrr64ugY6swICmlHVcwK4t7ab8JT%2BjYTAGEfHXo%2FN8JPH3nSc5lpf89GknPRfhAS%2FeBgNc9waqgUtmAqnRj5DZEZ3hpcmQqeXvQCac9D0H3eMr5I4Uj2MRkbtaUO%2FOfap3BZahLdgRjBlRwj%2BHVBipRImQ5wgeRkl8i%2BMFp6zDCxF72H8PqyF%2FUm4we%2B855XNwZruyLe7%2BLNNaL5mRfxTHJG5FYUmbB419Yd8%2F6Ms8U8bZTmYCgD8LzGvlsd6WNCc0rxcOR9%2Foyi7kFLKKkzN4KknIFqF35WhrtEPzshZ3OcvFVjOx6NaMDL9LJDyeON7dgKf7ztwWbK2NlJN8tM53YkdmMkYj0q%2FtNigUqavk72d8E3KWGWPrbqHudvXBXbFAQukuv%2B8QD5Wonk2HV6OHZV%2FSFtXcWJLnW7f&X-Amz-Signature=c4a27789b516e97b5d6f99ce235ade009c07bfc741ceeac575e1a2b049d2c65f&X-Amz-SignedHeaders=host&response-content-disposition=inline'"
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
