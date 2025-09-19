export default function HeroGlow() {
    return (
        <div className="relative min-h-screen bg-black text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.4),transparent_70%)]" />
        
        <h1 className="text-5xl font-bold z-10">
          Gradient Glow Background
        </h1>
      </div>
    );
  }