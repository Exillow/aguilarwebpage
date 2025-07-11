import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Intro() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);
  const navigate = useNavigate();

  const steps = [
    { delay: 500, duration: 1000 }, // Aguilar logo fade in
    { delay: 2000, duration: 1000 }, // "AGUILAR" text
    { delay: 3500, duration: 800 }, // "Graphics" text
    { delay: 4800, duration: 1200 }, // Final glow effect
  ];

  useEffect(() => {
    if (isSkipped) return;

    const timers = steps.map((step, index) => {
      return setTimeout(() => {
        if (!isSkipped) {
          setCurrentStep(index + 1);
        }
      }, step.delay);
    });

    // Auto-advance to home page
    const finalTimer = setTimeout(() => {
      if (!isSkipped) {
        navigate("/home");
      }
    }, 6500);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finalTimer);
    };
  }, [isSkipped, navigate]);

  const handleSkip = () => {
    setIsSkipped(true);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amd-black-950 via-amd-black-900 to-amd-black-800 flex items-center justify-center relative overflow-hidden">
      {/* Skip button */}
      <Button
        variant="ghost"
        onClick={handleSkip}
        className="absolute top-8 right-8 z-50 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
      >
        Skip Intro
      </Button>

      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Animated background orbs */}
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl transition-all duration-2000 ${
            currentStep >= 1 ? "animate-pulse opacity-20" : "opacity-0"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-amd-red-600/20 rounded-full blur-3xl transition-all duration-2000 delay-1000 ${
            currentStep >= 2 ? "animate-pulse opacity-15" : "opacity-0"
          }`}
        />

        {/* Particle effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-primary rounded-full transition-all duration-3000 ${
                currentStep >= 1 ? "animate-pulse" : "opacity-0"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 relative">
        {/* Aguilar Logo */}
        <div
          className={`transition-all duration-1000 ease-out ${
            currentStep >= 1
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-75 translate-y-8"
          }`}
        >
          <div className="mb-8">
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-amd-red-600/20 border border-primary/30 backdrop-blur-sm">
              <div className="text-4xl md:text-6xl font-black text-primary tracking-wider">
                AGUILAR AMD
              </div>
            </div>
          </div>
        </div>

        {/* AGUILAR Text */}
        <div
          className={`transition-all duration-1000 ease-out delay-500 ${
            currentStep >= 2
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 translate-y-4"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-widest">
            <span className="bg-gradient-to-r from-primary via-amd-red-500 to-primary bg-clip-text text-transparent">
              AGUILAR AMD
            </span>
          </h1>
        </div>

        {/* Graphics Text */}
        <div
          className={`transition-all duration-800 ease-out delay-1000 ${
            currentStep >= 3
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-2"
          }`}
        >
          <p className="text-xl md:text-2xl text-white/80 mb-8 font-light tracking-wide">
            Graphics Redefined
          </p>
        </div>

        {/* Final glow effect */}
        <div
          className={`transition-all duration-1200 ease-out ${
            currentStep >= 4 ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-amd-red-500/50 to-primary/50 rounded-full blur-2xl animate-pulse" />
            <div className="relative bg-gradient-to-r from-primary via-amd-red-500 to-primary bg-clip-text text-transparent text-lg md:text-xl font-semibold tracking-wider">
              Experience the Future
            </div>
          </div>
        </div>

        {/* Loading indicator */}
        <div
          className={`mt-12 transition-all duration-500 ${
            currentStep >= 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-center">
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-amd-red-500 rounded-full transition-all duration-6000 ease-out"
                style={{
                  width: currentStep >= 1 ? "100%" : "0%",
                }}
              />
            </div>
          </div>
          <p className="text-white/60 text-sm mt-4 font-light">Loading...</p>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/30" />

      {/* Scanline effect */}
      <div
        className={`absolute inset-0 w-full h-4 transition-all duration-3000 ${
          currentStep >= 2 ? "animate-scanline" : ""
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(237, 44, 44, 0.1) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
