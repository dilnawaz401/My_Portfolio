import { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from './Tilt';
import { ArrowUpRight, BrainCircuit, Bot, Building2, Cloud, FileText, Github, Layers3, Sparkles, X } from 'lucide-react';

const projectData = [
  {
    title: 'Generative AI Chatbot',
    status: 'In Progress',
    category: 'AI Application',
    description:
      'A conversational AI assistant that answers user questions and maintains conversation context using a modern LLM workflow.',
    tech: ['Python', 'Streamlit', 'LLM API'],
    github: '#',
    demo: '#',
    visual: Bot,
    details:
      'Planned conversational agent with memory, prompt orchestration, and a simple streaming interface for interactive Q&A.',
  },
  {
    title: 'RAG Document Intelligence',
    status: 'Planned',
    category: 'AI System',
    description:
      'An application that answers questions from uploaded PDF documents using semantic retrieval and grounded responses.',
    tech: ['Python', 'Embeddings', 'FAISS / Chroma', 'Streamlit'],
    github: '#',
    demo: '#',
    visual: FileText,
    details:
      'A document pipeline using chunking, embedding search, and answer synthesis with source-grounded results for knowledge retrieval.',
  },
  {
    title: 'MCP Tool Integration Server',
    status: 'Planned',
    category: 'Tooling',
    description:
      'An MCP server exposing validated tools that a compatible AI client can discover and invoke.',
    tech: ['Python', 'MCP SDK', 'APIs'],
    github: '#',
    demo: '#',
    visual: BrainCircuit,
    details:
      'A secure tool registry and execution layer for connecting AI clients to external APIs and validated workflows.',
  },
  {
    title: 'Multi-Agent Research System',
    status: 'In Progress',
    category: 'AI Workflow',
    description:
      'A coordinated workflow with planning, research, analysis, and review agents for higher-quality outputs.',
    tech: ['Python', 'LangGraph', 'LLM APIs'],
    github: '#',
    demo: '#',
    visual: Layers3,
    details:
      'A multi-step prompt system coordinating specialized agents for planning, retrieval, synthesis, and review.',
  },
  {
    title: 'AI Resume Matcher',
    status: 'Planned',
    category: 'Analytics',
    description:
      'An AI web application that extracts skills, compares a resume with a job description, and identifies potential skill gaps.',
    tech: ['Python', 'NLP', 'Streamlit', 'scikit-learn'],
    github: '#',
    demo: '#',
    visual: Sparkles,
    details:
      'A resume analysis tool using semantic similarity and skill extraction to compare candidate profiles with role requirements.',
  },
  {
    title: 'Cloud AI Deployment',
    status: 'Planned',
    category: 'Deployment',
    description:
      'A containerized AI application deployed using Docker and AWS EC2, with deployment instructions and security controls.',
    tech: ['Docker', 'AWS EC2', 'GitHub', 'Linux'],
    github: '#',
    demo: '#',
    visual: Cloud,
    details:
      'Production-oriented deployment setup focused on containerization, infrastructure configuration, and basic security hygiene.',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="container section-shell">
        <div className="section-heading">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Featured portfolio concepts</h2>
        </div>

        <div className="projects-grid">
          {projectData.map((project, index) => {
            const Icon = project.visual;
            return (
              <Tilt key={project.title} max={7} className="project-tilt">
                <motion.article
                  className="project-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="project-visual">
                    <div className="project-visual-orb">
                      <Icon size={62} />
                    </div>
                    <span className="project-status">{project.status}</span>
                  </div>

                  <div className="project-body">
                    <div className="project-tags">
                      {project.tech.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-actions">
                      <a href={project.github} className="project-link">
                        <Github size={16} />
                        GitHub Repo
                      </a>
                      <a href={project.demo} className="project-link">
                        <ArrowUpRight size={16} />
                        Live Demo
                      </a>
                      <button type="button" className="project-link button-link" onClick={() => setSelectedProject(project)}>
                        Details
                      </button>
                    </div>
                  </div>
                </motion.article>
              </Tilt>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close project details">
              <X size={18} />
            </button>
            <div className="modal-visual">
              <selectedProject.visual size={54} />
            </div>
            <span className="project-status modal-status">{selectedProject.status}</span>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>
            <div className="project-tags modal-tags">
              {selectedProject.tech.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
