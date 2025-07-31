import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="py-4 bg-gray-800 text-white text-center"
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <p>NTC Brasil © 2023. Todos os direitos reservados.</p>
    </motion.footer>
  );
}
