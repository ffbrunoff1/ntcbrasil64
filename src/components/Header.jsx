import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Building } from 'lucide-react';

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed w-full transition-all ${scrolling ? 'bg-white text-black' : 'bg-transparent text-white'} py-4`}
      whileInView={{ opacity: scrolling ? 1 : 0.9 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753920560982_0.png"
          alt="NTC Brasil"
          className="h-12"
        />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="hover:text-primary">
                Início
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary">
                Sobre
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Serviços
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
