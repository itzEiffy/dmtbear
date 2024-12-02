import { useTokenData } from '../hooks/useTokenData';

export default function Tokenomics() {
  const tokenData = useTokenData();

  const tokenomics = [
    { 
      label: 'Total Supply', 
      value: '1 Billion',
      gradient: 'from-pink-500 via-purple-500 to-cyan-500'
    },
    { 
      label: 'Holders', 
      value: tokenData.holdersCount,
      gradient: 'from-purple-500 via-cyan-500 to-pink-500'
    },
    { 
      label: 'Market Cap', 
      value: tokenData.marketCap,
      gradient: 'from-cyan-500 via-pink-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden" id="tokenomics">
      <div className="absolute inset-0">
        <div className="animate-pulse absolute top-20 right-1/4 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-20" />
        <div className="animate-pulse delay-75 absolute bottom-40 left-1/3 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
        <div className="animate-pulse delay-150 absolute top-40 left-1/4 w-36 h-36 bg-cyan-500 rounded-full filter blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text animate-float">
          Tokenomics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {tokenomics.map((item) => (
            <div 
              key={item.label} 
              className="group relative bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {item.label}
              </h3>
              
              <p className={`text-3xl md:text-4xl font-bold text-center bg-gradient-to-r ${item.gradient} text-transparent bg-clip-text`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}