import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="container mx-auto text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          className="text-4xl font-bold mb-5"
        >
          Sobre a NTC Brasil
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          className="mx-auto w-2/3 text-lg mb-8"
        >
          A NTC Brasil se destaca no setor de construção, oferecendo soluções
          inovadoras e de qualidade para seus clientes. Nossa missão é
          concretizar sonhos, edificando o amanhã.
        </motion.p>
      </div>
    </section>
  );
}
