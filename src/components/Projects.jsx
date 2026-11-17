import { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from './Tilt';
import { BarChart3, Bot, BrainCircuit, CloudSun, ExternalLink, FileText, Github, Layers3, X } from 'lucide-react';

const githubRepositoriesUrl = 'https://github.com/dilnawaz401?tab=repositories';

const projectCollections = [
  {
    title: 'Data Analytics',
    visual: BarChart3,
    github: githubRepositoriesUrl,
    projects: [
      'YouTube Data Analytics',
      'Stock Market Data Analytics',
      'Zomato Data Analytics',
      'Retail Sales Data Analytics',
      'ChatGPT Data Analytics',
    ],
  },
  {
    title: 'Data Science & Machine Learning',
    visual: BrainCircuit,
    github: githubRepositoriesUrl,
    projects: [
      'Customer Revenue Prediction App (With Deployment)',
      'Gender From Voice Prediction App',
      'Restaurant Recommendation System',
      'Happiness Ranking App',
      'Forest Fire Prediction App',
      'Black Friday Sale Prediction',
      'Sentiment Analysis Using Natural Language Processing',
      'Parkinson Syndrome Prediction',
      'Fake News Classifier Using NLP',
      'Toxic Comment Classifier Using NLP',
      'Movie Ratings Prediction (IMDB) Using NLP',
      'Air Quality Prediction',
      'Covid-19 Case Analysis',
      'Customer Churning Prediction',
      'Building A Chatbot Application (NLP)',
      'Video Game Sales Prediction Using Machine Learning',
      'Car Selling Price Prediction',
      'Affair Prediction App',
      'Mushroom Classification App',
      'Mobile App Rating Prediction',
      'Heart Attack Risk Prediction With Auto ML',
      'Credit Card Fraud Detection Using PyCaret',
      'Flight Fare Detection Using Auto SK Learn',
      'Petrol Price Forecasting Using Auto Keras',
      'Bank Customer Churn Prediction Using H2O Auto ML',
    ],
  },
];

const projectData = [
  {
    title: 'Generative AI Chatbot',
    status: 'In Progress',
    category: 'AI Application',
    description:
      'A conversational AI assistant that answers user questions and maintains conversation context using a modern LLM workflow.',
    tech: ['Python', 'Streamlit', 'LLM API'],
    github: githubRepositoriesUrl,
    demo: 'https://gen-ai-chatbot-401.streamlit.app/',
    visual: Bot,
    details:
      'Planned conversational agent with memory, prompt orchestration, and a simple streaming interface for interactive Q&A.',
  },
  {
    title: 'Weather Prediction',
    status: 'Completed',
    category: 'Machine Learning',
    description:
      'A machine learning project that predicts weather conditions from historical data using data preprocessing, feature engineering, and predictive modeling.',
    tech: ['Python', 'Machine Learning', 'Pandas', 'scikit-learn'],
    github: githubRepositoriesUrl,
    demo: 'https://weather-prediction-401.netlify.app/',
    visual: CloudSun,
    details:
      'Built and evaluated predictive models on historical weather data, covering data cleaning, exploratory analysis, and model comparison for accurate forecasting.',
  },
  {
    title: 'RAG Document Intelligence',
    status: 'Planned',
    category: 'AI System',
    description:
      'An application that answers questions from uploaded PDF documents using semantic retrieval and grounded responses.',
    tech: ['Python', 'Embeddings', 'FAISS / Chroma', 'Streamlit'],
    github: githubRepositoriesUrl,
    visual: FileText,
    details:
      'A document pipeline using chunking, embedding search, and answer synthesis with source-grounded results for knowledge retrieval.',
  },
  {
    title: 'Multi-Agent Research System',
    status: 'In Progress',
    category: 'AI Workflow',
    description:
      'A coordinated workflow with planning, research, analysis, and review agents for higher-quality outputs.',
    tech: ['Python', 'LangGraph', 'LLM APIs'],
    github: githubRepositoriesUrl,
    visual: Layers3,
    details:
      'A multi-step prompt system coordinating specialized agents for planning, retrieval, synthesis, and review.',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="container section-shell">
        <div className="section-heading">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Data, AI &amp; machine learning</h2>
          <a
            href={githubRepositoriesUrl}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
            Browse all GitHub repositories
          </a>
        </div>

        <div className="projects-grid">
          {projectCollections.map((collection, index) => {
            const Icon = collection.visual;
            return (
              <motion.article
                key={collection.title}
                className="project-card project-collection"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="project-visual">
                  <div className="project-visual-orb">
                    <Icon size={62} />
                  </div>
                  <span className="project-status">{collection.projects.length} projects</span>
                </div>
                <div className="project-body">
                  <h3>{collection.title}</h3>
                  <ul className="project-collection-list">
                    {collection.projects.map((title) => (
                      <li key={title}>
                        <a href={githubRepositoriesUrl} target="_blank" rel="noreferrer">
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={collection.github}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} />
                    View {collection.title} repository
                  </a>
                </div>
              </motion.article>
            );
          })}

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
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          className="project-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github size={16} />
                          GitHub Repo
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="project-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
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
