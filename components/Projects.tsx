import portfolioData from '@/data/portfolio.json'

export default function Projects() {
  const { projects } = portfolioData

  return (
    <section id="projects" className="py-16 md:py-24 bg-zinc-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
          Projects
        </h2>

        {projects && projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-zinc-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-zinc-600 mb-4">{project.description}</p>

                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-zinc-100 text-zinc-600 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 hover:text-zinc-900 text-sm font-medium"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 hover:text-zinc-900 text-sm font-medium"
                      >
                        Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-zinc-200">
            <p className="text-zinc-500">Projects coming soon...</p>
          </div>
        )}
      </div>
    </section>
  )
}