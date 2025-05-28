import { motion } from "framer-motion";
import "../styles/global.css";

export default function ContactForm() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trabajemos Juntos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Listo para llevar tu tienda Shopify al siguiente nivel? Envíame un
            mensaje.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <form
              method="POST"
              className="space-y-6"
              netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
              data-netlify="true">
              <p class="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <div>
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-shopify focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-shopify focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label
                  for="phone"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phome"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-shopify focus:border-transparent"
                  placeholder="Número de contacto"
                />
              </div>
              {/* <div>
                <label
                  for="project"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de proyecto
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-shopify focus:border-transparent">
                  <option value="tienda-shopify">Tienda Shopify</option>
                  <option value="app-personalizada">App Personalizada</option>
                  <option value="consultoria">Consultoría</option>
                  <option value="otro">Otro</option>
                </select>
              </div> */}

              <div>
                <label
                  for="message"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-shopify focus:border-transparent"
                  placeholder="Describe tu proyecto..."></textarea>
              </div>
              <div data-netlify-recaptcha="true"></div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-shopify text-white py-3 px-6 rounded-lg font-semibold hover:bg-shopify/90 transition">
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-shopify/10 p-3 rounded-full">
                <svg
                  className="h-6 w-6 text-shopify"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <a
                  href="mailto:gnzlzp.dev@gmail.com"
                  className="text-gray-600 hover:text-shopify transition">
                  gnzlzp.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-shopify/10 p-3 rounded-full">
                <svg
                  className="h-6 w-6 text-shopify"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Teléfono
                </h3>
                <a
                  href="tel:30433179349"
                  className="text-gray-600 hover:text-shopify transition">
                  +57 (304) 317-9349
                </a>
              </div>
            </div>

            {/* <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Sígueme
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/tuusuario"
                  target="_blank"
                  className="text-gray-500 hover:text-shopify transition">
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    ...
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/tuperfil"
                  target="_blank"
                  className="text-gray-500 hover:text-shopify transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    ...
                  </svg>
                </a>
              </div>
            </div> */}

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ubicación
              </h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d-75.5967049241646!3d6.211505493798887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442829e8e9f3e3%3A0x7c7f6a1c1d23f3b5!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1sen!2sco!4v1620000000000!5m2!1sen!2sco"
                  width="100%"
                  height="300"
                  allowfullscreen=""
                  loading="lazy"
                  className="rounded-lg"></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
