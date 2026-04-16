import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Flavors } from "@/components/sections/Flavors";
import { Button } from "@/components/ui/Button";
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-background/50 backdrop-blur-md rounded-full px-6 md:px-8 py-3 md:py-4 border border-border/50 pointer-events-auto shadow-2xl">
          <h1 className="text-xl md:text-2xl font-display font-bold tracking-tighter">
            BOLO<span className="text-accent">POTE</span>
          </h1>
          <div className="hidden lg:flex gap-8 items-center text-xs md:text-sm font-medium tracking-widest uppercase">
            <a href="#flavors" className="hover:text-accent transition-colors">Sabores</a>
            <a href="#about" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#" className="hover:text-accent transition-colors">Contatos</a>
          </div>
          <div className="flex gap-2 md:gap-4">
            <Button variant="ghost" className="p-2 h-auto rounded-full hover:bg-accent/10">
              <InstagramLogo size={20} className="md:w-6 md:h-6" />
            </Button>
            <Button variant="ghost" className="p-2 h-auto rounded-full hover:bg-accent/10">
              <WhatsappLogo size={20} className="md:w-6 md:h-6" />
            </Button>
          </div>
        </div>
      </nav>

      <Hero />
      <div id="about">
        <About />
      </div>
      <Flavors />

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold tracking-tighter">
              BOLO<span className="text-accent">POTE</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              Levando doçura e qualidade premium para o seu dia a dia desde 2024.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Links Úteis</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-accent">Políticas de Entrega</a></li>
              <li><a href="#" className="hover:text-accent">Dúvidas Frequentes</a></li>
              <li><a href="#" className="hover:text-accent">Trabalhe Conosco</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Localização</h4>
            <p className="text-muted-foreground text-sm">
              São Paulo, SP - Brasil<br />
              Entregas em toda região metropolitana.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
          <span>© 2026 Bolo de Pote Premium. Todos os direitos reservados.</span>
        </div>
      </footer>
    </main>
  );
}
