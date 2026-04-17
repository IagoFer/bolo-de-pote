"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ShoppingCart } from "@phosphor-icons/react";

const flavors = [
  {
    name: "Oreo Dream",
    description: "Camadas crocantes de biscoito Oreo com um creme de baunilha aveludado.",
    image: "/images/oreo2.png",
    price: "R$ 10,00"
  },
  {
    name: "Brigadeiro Belga",
    description: "O clássico brasileiro elevado ao nível gourmet com chocolate belga e granulado premium.",
    image: "/images/brigadeiro2.png",
    price: "R$ 10,00"
  },
  {
    name: "Ninho & Nutella",
    description: "O encontro perfeito do creme de Leite Ninho com a autenticidade da Nutella.",
    image: "/images/nutela2.png",
    price: "R$ 10,00"
  },
  {
    name: "Casadinho Premium",
    description: "A harmonia irresistível entre o brigadeiro branco aveludado e o tradicional meio amargo.",
    image: "/images/casadinho2.png",
    price: "R$ 10,00"
  },
  {
    name: "Mousse de Maracujá",
    description: "Equilíbrio perfeito entre a acidez da fruta e o doce do leite condensado.",
    image: "/images/maracuja2.png",
    price: "R$ 10,00"
  },
  {
    name: "Cenoura & Chocolate",
    description: "Bolo de cenoura fofinho com uma calda de chocolate abundante e sedosa.",
    image: "/images/cenoura2.png",
    price: "R$ 10,00"
  }
];

export function Flavors() {
  const handleOrder = (flavor: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de encomendar o Bolo de Pote sabor: ${flavor}`);
    window.open(`https://wa.me/558592461220?text=${message}`, "_blank");
  };

  return (
    <section id="flavors" className="py-20 md:py-32 px-4 md:px-6 bg-background relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
        <header className="space-y-4 max-w-2xl px-2">
          <h2 className="text-accent font-medium tracking-[0.2em] uppercase text-xs md:text-sm">Nossos Sabores</h2>
          <h3 className="text-4xl md:text-7xl font-display font-bold tracking-tighter leading-none text-foreground">
            UMA COLEÇÃO <br />
            <span className="text-muted-foreground italic">IRRESISTÍVEL</span>
          </h3>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="liquid-glass p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col group hover:border-accent/40 transition-colors duration-500"
            >
              <div className="relative w-full aspect-square mb-4 md:mb-8 overflow-hidden rounded-xl md:rounded-2xl">
                <Image
                  src={flavor.image}
                  alt={flavor.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="flex-1 space-y-2 md:space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <h4 className="text-base md:text-2xl font-bold font-display tracking-tight text-foreground leading-tight">{flavor.name}</h4>
                  <span className="text-accent font-bold text-sm md:text-base">{flavor.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[10px] md:text-sm line-clamp-2 md:line-clamp-none">
                  {flavor.description}
                </p>
              </div>

              <div className="pt-4 md:pt-8">
                <Button
                  onClick={() => handleOrder(flavor.name)}
                  variant="outline"
                  className="w-full h-10 md:h-12 text-[10px] md:text-sm group/btn border-accent/20 hover:bg-accent hover:text-accent-foreground p-0 md:px-4"
                >
                  <span className="hidden md:inline">Pedir Agora</span>
                  <ShoppingCart size={16} className="md:ml-2 group-hover/btn:rotate-12 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
