"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Leaf, Timer } from "@phosphor-icons/react";

const features = [
  {
    icon: Star,
    title: "Qualidade Gourmet",
    text: "Ingredientes de primeira linha, como chocolate belga e baunilha fresca."
  },
  {
    icon: Leaf,
    title: "Sempre Fresco",
    text: "Produção artesanal diária sem conservantes químicos."
  },
  {
    icon: Timer,
    title: "Entrega Rápida",
    text: "Receba no conforto da sua casa em minutos, perfeito para aquela vontade de doce."
  }
];

export function About() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative aspect-[3/4] rounded-[2rem] overflow-hidden"
            >
              <Image src="/images/casadinho.png" alt="Processo" fill className="object-cover" />
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="relative aspect-[3/4] rounded-[2rem] overflow-hidden translate-y-12"
            >
              <Image src="/images/ninho.png" alt="Ingredientes" fill className="object-cover" />
            </motion.div>
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[100px] rounded-full" />
        </div>

        <div className="space-y-12 order-1 lg:order-2">
          <header className="space-y-4">
            <h2 className="text-accent font-medium tracking-[0.2em] uppercase text-sm">Por que nós?</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold tracking-tighter leading-none">
              MAIS QUE UM DOCE, <br />
              UMA <span className="text-accent italic">EXPERIÊNCIA</span>
            </h3>
          </header>

          <div className="space-y-8">
            {features.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
                  <item.icon size={28} weight="duotone" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-display">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed max-w-sm">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
