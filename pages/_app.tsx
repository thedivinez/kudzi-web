import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LiquidEther from "@/components/LiquidEther";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Force dark theme
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  }, []);
  return <div className="relative flex flex-col bg-black w-screen h-screen min-h-full text-white">
    <LiquidEther
      className="top-0 right-0 bottom-0 left-0 absolute flex w-full h-full"
      colors={['#5227FF', '#FF9FFC', '#B19EEF']}
      mouseForce={20}
      cursorSize={100}
      isViscous={false}
      viscous={30}
      iterationsViscous={32}
      iterationsPoisson={32}
      resolution={0.5}
      isBounce={false}
      autoDemo={true}
      autoSpeed={0.3}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={3000}
      autoRampDuration={0.6}
    />
    <Component {...pageProps} />;
  </div>
}
