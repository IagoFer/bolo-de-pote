"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import Image from "next/image";

const flavors = [
  {
    id: "oreo",
    name: "Oreo Dream",
    description: "Camadas crocantes de biscoito Oreo com um creme de baunilha aveludado.",
    color: "#3b82f6", // Azul Oreo
    image: "/images/oreo.png",
    video: "/videos/Flow_202604161135.mp4",
  },
  {
    id: "brigadeiro",
    name: "Brigadeiro Belga",
    description: "O clássico brasileiro elevado ao nível gourmet com chocolate belga e granulado premium.",
    color: "#E4A853", // Ouro/Doce de Leite
    image: "/images/brigadeiro.png",
    video: "/videos/Flow_202604161135.mp4", // Temporary fallback
  },
  {
    id: "maracuja",
    name: "Mousse de Maracujá",
    description: "Equilíbrio perfeito entre a acidez da fruta e o doce do leite condensado.",
    color: "#facc15", // Amarelo Maracujá
    image: "/images/maracuja.png",
    video: "/videos/Flow_202604161135.mp4", // Temporary fallback
  },
  {
    id: "cenoura",
    name: "Cenoura & Chocolate",
    description: "Bolo de cenoura fofinho com uma calda de chocolate abundante e sedosa.",
    color: "#f97316", // Laranja Cenoura
    image: "/images/cenoura.png",
  }
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const current = flavors[index];

  const next = () => setIndex((prev) => (prev + 1) % flavors.length);
  const prev = () => setIndex((prev) => (prev - 1 + flavors.length) % flavors.length);

  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -80]); // Reduced for better fit
  const rotateScroll = useTransform(scrollY, [0, 500], [0, 5]);

  // Update Global Accent Color when flavor changes
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", current.color);
  }, [current.color]);

  return (
    <section 
      className="relative h-[100dvh] w-full flex flex-col justify-between px-6 pt-28 pb-12 lg:pt-20 lg:pb-20 overflow-hidden transition-colors duration-1000"
      style={{ "--accent": current.color } as React.CSSProperties}
    >
      {/* Background Video Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id + "-video"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -z-10"
        >
          <video
            key={current.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={current.video} type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-12 relative z-10">
        {/* Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left space-y-4 lg:space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-text"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="space-y-4 lg:space-y-6"
            >
              <div className="space-y-2 lg:space-y-4">
                <h2 className="text-accent font-medium tracking-[0.2em] uppercase text-[10px] lg:text-sm transition-colors duration-500">
                  Sabor em Destaque
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-[7.5rem] font-display font-bold leading-[0.9] lg:leading-[0.85] tracking-tighter text-white">
                  {current.name.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word === 'POTE' || word === 'Dream' || i === 1 ? (
                        <span className="text-accent transition-colors duration-500">{word}</span>
                      ) : word}{' '}
                      {i === 0 && <br className="hidden lg:block" />}
                    </React.Fragment>
                  ))}
                </h1>
              </div>

              <p className="text-zinc-200 text-sm md:text-lg lg:text-xl max-w-sm lg:max-w-md mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
                {current.description}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 pt-2">
                <Button magnetic className="text-sm lg:text-lg py-4 lg:py-6 px-6 lg:px-10">
                  Pedir Agora
                </Button>
                <Button variant="outline" className="text-sm lg:text-lg py-4 lg:py-6 px-6 lg:px-10 group bg-white/5 border-white/20 backdrop-blur-sm">
                  Mais Detalhes
                  <CaretRight size={18} className="lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Jar Asset (Centered on Mobile, Right on Desktop) */}
        <div className="flex-1 flex items-center justify-center lg:justify-end relative">
          <div className="relative w-[280px] sm:w-[350px] lg:w-[500px] aspect-square flex items-center justify-center">
            {/* Navigation Arrows surrounding the jar perfectly */}
            <div className="absolute inset-y-0 -left-12 -right-12 lg:-left-20 lg:-right-20 flex justify-between items-center z-20 pointer-events-auto">
              <Button 
                variant="outline" 
                onClick={prev}
                className="w-10 h-10 lg:w-14 lg:h-14 p-0 rounded-full bg-black/40 border-white/10 hover:bg-white/20 text-white backdrop-blur-sm shadow-2xl"
              >
                <CaretLeft size={20} className="lg:w-6 lg:h-6" />
              </Button>
              
              <Button 
                variant="outline" 
                onClick={next}
                className="w-10 h-10 lg:w-14 lg:h-14 p-0 rounded-full bg-black/40 border-white/10 hover:bg-white/20 text-white backdrop-blur-sm shadow-2xl"
              >
                <CaretRight size={20} className="lg:w-6 lg:h-6" />
              </Button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={current.id + "-jar"}
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20, 
                  mass: 1 
                }}
                style={{ y: y2, rotate: rotateScroll }}
                className="relative w-full h-full pointer-events-none select-none"
              >
                <motion.div 
                  animate={{ 
                    backgroundColor: [current.color + "20", current.color + "40", current.color + "20"] 
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 blur-[80px] lg:blur-[100px] rounded-full" 
                />
                <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-contain drop-shadow-[0_45px_45px_rgba(0,0,0,0.4)]"
                    priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - ALWAYS CENTERED BOTTOM */}
      <div className="flex flex-col items-center gap-2 relative z-20">
        <span className="text-[8px] lg:text-[10px] uppercase tracking-widest text-muted-foreground/60">Explore os sabores</span>
        <div className="flex gap-2">
          {flavors.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-6 lg:w-8 bg-accent' : 'w-1.5 lg:w-2 bg-white/20'}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
