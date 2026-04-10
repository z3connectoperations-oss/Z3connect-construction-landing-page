"use client";
import React, { useState, useRef } from "react";
import logo from "@/assets/z3connect_logo.png";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(e => console.error("Playback failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="px-6 py-12 md:py-24 lg:px-24 flex flex-col items-center text-center max-w-7xl mx-auto">
      <div className="mb-6">
        <img
          alt="Z3connect Logo"
          className="h-16 w-auto object-contain mx-auto"
          src={logo.src}
        />
      </div>
      <span className="label-sm uppercase tracking-widest text-secondary font-bold mb-4 px-3 py-1 bg-secondary-fixed rounded-full">
        Built for Indian Sites
      </span>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-on-background leading-tight mb-8 max-w-5xl">
        Stop Managing <span className="text-secondary">Crores</span> of Projects on Messy WhatsApp Groups.
      </h1>
      <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mb-10 leading-relaxed">
        Connect your site supervisors directly to your accounts team. Z3connect’s CMS is built for India—featuring built-in GST & RERA compliance, 100% offline sync, and a platform so simple your site staff won't need any training.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
        <a href="/#contact" className="tectonic-gradient text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-orange-200/50 transition-all active:scale-95 text-center">
          Book a Free 15-Minute Demo
        </a>
        <a href="/#pricing" className="bg-surface-container-highest text-on-primary-fixed-variant font-bold py-4 px-8 rounded-xl text-lg hover:bg-surface-dim transition-all active:scale-95 text-center">
          View Flat Pricing
        </a>
      </div>

      {/* Hero Video Section with Controls */}
      <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden bg-surface-container-low shadow-2xl border-8 border-white/5 group">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/demo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        
        {/* Video Controls Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/30 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <button 
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors active:scale-90"
            title={isPlaying ? "Pause" : "Play"}
          >
            <span className="material-symbols-outlined text-3xl font-bold">
              {isPlaying ? "pause" : "play_arrow"}
            </span>
          </button>
          
          <div className="w-px h-8 bg-white/10"></div>
          
          <button 
            onClick={toggleMute}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors active:scale-90"
            title={isMuted ? "Unmute" : "Mute"}
          >
            <span className="material-symbols-outlined text-2xl font-bold">
              {isMuted ? "volume_off" : "volume_up"}
            </span>
          </button>

          <div className="flex flex-col">
            <span className="text-white text-[10px] uppercase tracking-widest font-bold opacity-80 leading-none mb-1">Live Demo</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-white text-[10px] font-bold">NOW PLAYING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
