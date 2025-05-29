import { motion } from "framer-motion";

export default function MainTitle() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div class="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12">
          <h1 className="text-shopify text-4xl md:text-5xl font-bold mb-6">
            Lleva tu negocio físico al mundo digital{" "}
            <span className="block text-xl mt-4">Sin complicaciones!</span>
          </h1>
          <p className="text-[var(--shopify-dark)] text-xl mb-8">
            ¿Vendes en tu local, mercados o por WhatsApp? Te ayudamos a crear tu
            tienda online profesional
          </p>
          <a
            href="/contacto"
            className="bg-[var(--shopify)] text-[#f3f3f3] px-8 py-3 rounded-full text-lg font-bold hover:bg-amber-50 hover:text-shopify transition duration-200">
            Quiero mi tienda online →
          </a>
        </motion.div>
        <span className="block text-[var(--shopify-dark)] text-3xl mb-8">Aprende como ⬇ </span>
      </div>
    </motion.section>
  );
}
