import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project?.image}
          alt={project.description || `Captura de pantalla de ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-gray-900">
            {project.title}
          </h3>
          {project.url && (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-blue-600 hover:text-blue-800 transition-colors"
              aria-label={`Visitar ${project.title} (se abre en nueva ventana)`}>
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </motion.a>
          )}
        </div>

        <p className="text-gray-700 line-clamp-3">{project.description}</p>

        {/* {project.highlights && (
          <ul className="space-y-2 text-sm text-gray-600">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="flex-shrink-0 w-4 h-4 mr-2 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {highlight}
              </li>
            ))}
          </ul>
        )} */}

        {project.results && (
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-900 bg-blue-50 p-3 rounded-lg">
              <span className="font-semibold">Resultados:</span>{" "}
              {project.results}
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
}
