import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch(
      'https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: 'ffbrunoff@yahoo.com.br',
        }),
      }
    );
    if (response.ok) {
      setResponseMessage('Mensagem enviada com sucesso!');
    } else {
      setResponseMessage('Erro ao enviar mensagem.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="container mx-auto text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          className="text-4xl font-bold mb-5"
        >
          Contato
        </motion.h2>
        <form onSubmit={handleSubmit} className="w-2/3 mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded hover:bg-opacity-80"
          >
            Enviar
          </button>
          {responseMessage && <p className="mt-4">{responseMessage}</p>}
        </form>
      </div>
    </section>
  );
}
