"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ShoppingCart } from "@phosphor-icons/react";

const flavors = [
  {
    name: "Brigadeiro Gourmet",
    description: "Camadas intensas de brigadeiro cremoso com granulado belga.",
    image: "/images/brigadeiro.png",
    price: "R$ 18,00"
  },
  {
    name: "Ninho & Nutella",
    description: "Creme de Ninho aveludado com generosas camadas de Nutella autêntica.",
    image: "/images/ninho.png",
    price: "R$ 22,00"
  },
  {
    name: "Cenoura & Ganache",
    description: "Bolo de cenoura fofinho com cobertura de ganache de chocolate meio amargo.",
    image: "/images/cenoura.png",
    price: "R$ 16,00"
  },
  {
    name: "Oreo Cheesecake",
    description: "Creme de cream cheese com pedaços crocantes de biscoito Oreo.",
    image: "/images/oreo.png",
    price: "R$ 20,00"
  },
  {
    name: "Casadinho",
    description: "O equilíbrio perfeito entre o brigadeiro branco e o tradicional.",
    image: "/images/casadinho.png",
    price: "R$ 18,00"
  },
  {
    name: "Mousse de Maracujá",
    description: "Leveza e frescor com mousse de maracujá e calda artesanal.",
    image: "/images/maracuja.png",
    price: "R$ 18,00"
  }
];

export function Flavors() {
  const handleOrder = (flavor: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de encomendar o Bolo de Pote sabor: ${flavor}`);
    window.open(`https://wa.me/558592461220?text=${message}`, "_blank");
  };

  return (
    <section id="flavors" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto space-y-20">
        <header className="space-y-4 max-w-2xl">
          <h2 className="text-accent font-medium tracking-[0.2em] uppercase text-sm">Nossos Sabores</h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none text-foreground">
            UMA COLEÇÃO <br />
            <span className="text-muted-foreground italic">IRRESISTÍVEL</span>
          </h3>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="liquid-glass p-8 rounded-[2rem] flex flex-col group hover:border-accent/40 transition-colors duration-500"
            >
              <div className="relative w-full aspect-square mb-8 overflow-hidden rounded-2xl">
                <Image
                  src={flavor.image}
                  alt={flavor.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-2xl font-bold font-display tracking-tight text-foreground">{flavor.name}</h4>
                  <span className="text-accent font-bold">{flavor.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {flavor.description}
                </p>
              </div>

              <div className="pt-8">
                <Button
                  onClick={() => handleOrder(flavor.name)}
                  variant="outline"
                  className="w-full group/btn border-accent/20 hover:bg-accent hover:text-accent-foreground"
                >
                  Pedir Agora
                  <ShoppingCart size={18} className="group-hover/btn:rotate-12 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
