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
            ¿Vendes en tu local, mercados o por WhatsApp?
             Te ayudamos a crear tu
            tienda online profesional
          </p>
          <a
            href="/contacto"
            className="bg-[var(--shopify)] text-[#f3f3f3] px-8 py-3 rounded-full text-lg font-bold hover:bg-amber-50 hover:text-shopify transition duration-200">
            Quiero mi tienda online →
          </a>
       
    
        <div className="mt-15 flex items-center" >
          <span className="text-[var(--shopify-dark)] text-3xl space-x-2 font-bold">
            Conoce la ruta para el éxito de tu tienda online!
          </span>
           <span className="ml-2 text-[var(--shopify-dark)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="-2 -2 24 24"><path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-5.29l2.121-2.12a1 1 0 0 1 1.415 1.414l-2.829 2.828a1 1 0 0 1-1.414 0l-2.829-2.828a1 1 0 1 1 1.415-1.415zm0-5l2.121-2.12a1 1 0 0 1 1.415 1.414l-2.829 2.828a1 1 0 0 1-1.414 0L6.464 7.004A1 1 0 1 1 7.88 5.589L10 7.711z"/></svg>
          </span>
         
        </div>
      </motion.div>
      </div>
    </motion.section>
  );
}
