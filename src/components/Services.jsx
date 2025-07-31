import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          className="text-4xl font-bold mb-5"
        >
          Nossos Serviços
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          className="mx-auto w-2/3 text-lg mb-8"
        >
          Oferecemos serviços de construção civil com excelência e
          comprometimento.
        </motion.p>
      </div>
    </section>
  );
}
