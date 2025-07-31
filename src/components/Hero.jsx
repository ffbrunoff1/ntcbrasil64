import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-hero-gradient text-white"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">
          Construindo o futuro com excelência e inovação.
        </h1>
        <p className="mt-4 text-lg">
          Entre em contato conosco e descubra como podemos ajudar no seu próximo
          projeto de construção!
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-white text-primary py-2 px-4 rounded-full hover:bg-gray-200"
        >
          Fale Conosco
        </a>
      </motion.div>
    </section>
  );
}
