import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Portafolio 3D Interactivo",
      description:
        "Experiencia inmersiva en WebGL con Three.js, efectos de tilt y diseño responsive.",
      image: "/images/project1.png",
      link: "#"
    },
    {
      title: "Landing para Startup SaaS",
      description:
        "Diseño limpio con React + Tailwind, optimizado para SEO y velocidad.",
      image: "/images/project2.png",
      link: "#"
    },
    {
      title: "Dashboard de Análisis",
      description:
        "Aplicación React + Node con gráficos dinámicos y autenticación JWT.",
      image: "/images/project3.png",
      link: "#"
    }
  ];

  return (
    <section className="projectsSection">
      <h2>Proyectos destacados</h2>
      <p className="sectionSubtitle">
        Algunos de los proyectos que reflejan mi enfoque en diseño y funcionalidad.
      </p>

      <div className="projectsGrid">
        {projects.map((proj, index) => (
          <article key={index} className="projectCard">
            <img src={proj.image} alt={proj.title} className="projectImage" />
            <div className="projectInfo">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                Ver proyecto →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;