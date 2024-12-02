export default function HowToBuy() {
  const steps = [
    { 
      title: 'Get a Solana Wallet', 
      description: 'Download Phantom Wallet from phantom.app' 
    },
    { 
      title: 'Get SOL', 
      description: 'Buy SOL from any major exchange and send it to your wallet' 
    },
    { 
      title: 'Connect to Raydium', 
      description: 'Visit raydium.io, connect your wallet, and find DMT BEAR' 
    },
    { 
      title: 'Swap for DMT BEAR', 
      description: 'Set slippage to 1% and swap your SOL for DMT BEAR' 
    },
  ];

  return (
    <section className="py-20 bg-black relative" id="how-to-buy">
      <div className="absolute inset-0">
        <div className="animate-pulse absolute top-40 left-1/4 w-36 h-36 bg-[#14F195] rounded-full filter blur-3xl opacity-20" />
        <div className="animate-pulse absolute bottom-20 right-1/3 w-32 h-32 bg-[#9945FF] rounded-full filter blur-3xl opacity-20" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#14F195] via-[#9945FF] to-[#14F195] text-transparent bg-clip-text animate-float">
          How to Buy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group h-full">
              <div className="bg-gradient-to-r from-[#14F195]/10 via-[#9945FF]/10 to-[#14F195]/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-[#14F195]/50 transition-colors h-full flex flex-col">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#14F195] via-[#9945FF] to-[#14F195] text-transparent bg-clip-text">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 flex-grow">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}