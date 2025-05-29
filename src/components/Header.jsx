import { motion } from "framer-motion";
import "../styles/global.css";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold">
          <span className="text-shopify">GnzlzP</span>
          <sub>{":{Dev}"}</sub>
        </motion.a>
        <ul className=" md:flex space-x-8">
          <li>
            <a
              href="/proyectos"
              className="hover:text-shopify transition-colors duration-200">
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="/contacto"
              className="hover:text-shopify transition-colors duration-200">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
