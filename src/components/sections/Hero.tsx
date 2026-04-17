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
    image: "/images/oreo2.png",
    video: "/videos/oreo.mp4",
  },
  {
    id: "brigadeiro",
    name: "Brigadeiro Belga",
    description: "O clássico brasileiro elevado ao nível gourmet com chocolate belga e granulado premium.",
    color: "#E4A853", // Ouro/Doce de Leite
    image: "/images/brigadeiro2.png",
    video: "/videos/brigadeiro.mp4",
  },
  {
    id: "ninho-nutella",
    name: "Ninho & Nutella",
    description: "O encontro perfeito do creme de Leite Ninho com a autenticidade da Nutella.",
    color: "#e11d48", // Vermelho Nutella
    image: "/images/nutela2.png",
    video: "/videos/ninho.mp4",
  },
  {
    id: "casadinho",
    name: "Casadinho Premium",
    description: "A harmonia irresistível entre o brigadeiro branco aveludado e o tradicional meio amargo.",
    color: "#713f12", // Marrom Chocolate
    image: "/images/casadinho2.png",
    video: "/videos/casadinho.mp4",
  },
  {
    id: "maracuja",
    name: "Mousse de Maracujá",
    description: "Equilíbrio perfeito entre a acidez da fruta e o doce do leite condensado.",
    color: "#facc15", // Amarelo Maracujá
    image: "/images/maracuja2.png",
    video: "/videos/maracuja.mp4",
  },
  {
    id: "cenoura",
    name: "Cenoura & Chocolate",
    description: "Bolo de cenoura fofinho com uma calda de chocolate abundante e sedosa.",
    color: "#f97316", // Laranja Cenoura
    image: "/images/cenoura2.png",
    video: "/videos/cenoura.mp4",
  }
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const current = flavors[index];

  const next = () => setIndex((prev) => (prev + 1) % flavors.length);
  const prev = () => setIndex((prev) => (prev - 1 + flavors.length) % flavors.length);

  const { scrollY } = useScroll();
  const yTranslate = useTransform(scrollY, [0, 500], [0, -50]);

  // Update Global Accent Color when flavor changes
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", current.color);
  }, [current.color]);

  return (
    <section 
      className="relative h-[100dvh] w-full flex flex-col justify-between px-6 pt-32 pb-12 lg:pt-0 lg:pb-20 overflow-hidden transition-colors duration-1000"
      style={{ "--accent": current.color } as React.CSSProperties}
    >
      {/* Background Video Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id + "-video"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
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
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            <source src={current.video} type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col items-center justify-center relative z-10 text-center">
        {/* Text Content - Focused and Centralized */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id + "-content"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: yTranslate }}
            className="space-y-8 lg:space-y-12"
          >
            <div className="space-y-4 lg:space-y-6">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-accent font-medium tracking-[0.3em] uppercase text-[10px] lg:text-xs transition-colors duration-500"
              >
                Sabor em Destaque
              </motion.h2>

              <div className="flex items-center justify-center gap-2 md:gap-12 relative">
                {/* Navigation Arrow Left */}
                <Button 
                  variant="ghost" 
                  onClick={prev}
                  className="flex p-2 md:p-4 h-auto rounded-full text-white/80 md:text-white/40 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <CaretLeft size={32} className="md:w-12 md:h-12" weight="bold" />
                </Button>

                <h1 className="text-4xl md:text-7xl lg:text-[8rem] font-display font-bold leading-[0.9] lg:leading-[0.8] tracking-tighter text-white drop-shadow-2xl">
                  {current.name.split(' ').map((word, i) => (
                    <span 
                      key={i} 
                      className={word === 'POTE' || word === 'Dream' || word === 'Premium' || i === 1 ? "text-accent block transition-colors duration-500" : "block"}
                    >
                      {word}
                    </span>
                  ))}
                </h1>

                {/* Navigation Arrow Right */}
                <Button 
                  variant="ghost" 
                  onClick={next}
                  className="flex p-2 md:p-4 h-auto rounded-full text-white/80 md:text-white/40 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <CaretRight size={32} className="md:w-12 md:h-12" weight="bold" />
                </Button>
              </div>
            </div>

            <p className="text-zinc-200 text-sm md:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed drop-shadow-xl font-light italic px-4">
              "{current.description}"
            </p>

            <div className="flex flex-row justify-center items-center gap-3 md:gap-6 pt-4">
              <Button magnetic className="flex-1 max-w-[180px] md:max-w-[280px] text-sm md:text-lg py-4 md:py-6 px-6 md:px-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] whitespace-nowrap">
                Pedir Agora
              </Button>
              <Button variant="outline" className="flex-1 max-w-[180px] md:max-w-[280px] text-sm md:text-lg py-4 md:py-6 px-6 md:px-12 group bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all whitespace-nowrap">
                Mais Detalhes
                <CaretRight size={14} className="ml-2 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
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
