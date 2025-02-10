import React, { useState } from 'react';
import { Github, Linkedin, Globe, Mail, Code2, Database, FileJson, Braces, FileCode, Briefcase, GraduationCap, Phone, X } from 'lucide-react';

const skills = [
  { name: 'Html/Css/javascript', icon: <Braces className="w-6 h-6" />, category: 'DÉVELOPPEMENT' },
  { name: 'React', icon: <FileJson className="w-6 h-6" />, category: 'DÉVELOPPEMENT' },
  { name: 'NextJs', icon: <Braces className="w-6 h-6" />, category: 'DÉVELOPPEMENT' },
  { name: 'TypeScript', icon: <Code2 className="w-6 h-6" />, category: 'DÉVELOPPEMENT' },
  { name: 'Tailwind', icon: <Code2 className="w-6 h-6" />, category: 'DÉVELOPPEMENT' },
  { name: 'PHP', icon: <FileCode className="w-6 h-6" />, category: 'BACKEND' },
  { name: 'Nodejs', icon: <Code2 className="w-6 h-6" />, category: 'BACKEND' },
  { name: 'Docker', icon: <Code2 className="w-6 h-6" />, category: 'DÉVELOPPEMENT' },
  { name: 'MySQL', icon: <Database className="w-6 h-6" />, category: 'DATABASE' },
  { name: 'PostgreSql', icon: <Database className="w-6 h-6" />, category: 'DATABASE' },
  { name: 'MongoDB', icon: <Database className="w-6 h-6" />, category: 'DATABASE' },
];

const projects = [
  {
    title: 'FreelanceFlow',
    category: 'DÉVELOPPEMENT FULL STACK • REACT / NODE.JS',
    description: 'Application weApplication web pensée pour les freelances, permettant de stocker les clients et les différentes missions associées à ces derniers. Authentification utilisateur, interface dynamique, dashboard, communication en temps réel avec une base de données PostgreSQL.sb pour les freelances, gestion de clients et missions, interface dynamique avec base de données MySQL.',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=500&h=300&fit=crop',
    tags: ['React', 'Nextjs', 'MySQL'],
    link: 'https://freelance-flow-theta.vercel.app/'
  },
  {
    title: 'Internet Relay Chat',
    category: 'DÉVELOPPEMENT BACKEND • TYPESCRIPT / WEBSOCKET',
    description: 'Application web de chat instanApplication web de chat instantané, dynamique, permettant à plusieurs utilisateurs de communiquer en temps réel. Solution complète intégrant un front-end moderne et un back-end robuste. Implémentation de fonctionnalités avancées telles que la messagerie privée, les notifications et la gestion des utilisateurs.tané, dynamique, permettant à plusieurs utilisateurs de communiquer en temps réel.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop',
    tags: ['React', 'Node.js', 'WebSocket'],
    link: '#'
  },
  {
    title: 'Job Board',
    category: 'DÉVELOPPEMENT FULL STACK • PHP / MYSQL',
    description: "DéveloppDéveloppement d'un site d'annonces d'emploi, interface dynamique proposant des offres d'emploi. Interface utilisateur, interface d'administration, développement frontend et backend complets. Système de recherche et de filtrage avancé des offres d'emploi.ement d'un site d'annonces d'emploi, interface utilisateur, panneau d'administration, frontend, backend.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    tags: ['HTML/CSS/Javascript', 'PHP', 'MySQL'],
    link: '#',
  }

];

const education = [
  {
    title: 'Master of science',
    institution: 'Epitech',
    period: '2024 - 2027',
    location: "Marseille",
    description: "Formation Bac+5 en informatique proposant une étude globale de la programmation. Choix de spécialisation en deuxième année, permettant aux étudiants de développer des compétences techniques pointues dans un domaine spécifique de l'informatique.",
  },
  {
    title: 'Sound design',
    institution: 'Acfa multimédia',
    location: "Montpellier",
    period: '2020 - 2022',
    description: 'Formation professionnelle en sound design couvrant les techniques de création sonore pour différents médias. Apprentissage des logiciels de montage audio.',
  }
];

const experience = [
  {
    title: 'Electricien',
    company: 'Jenko',
    period: '2023 - 2024',
    description: "Apprenti éléctricien dans uApprenti électricien dans une entreprise de fabrication d'armoire et de coffret électrique industriel. Participation à la réalisation de systèmes électriques complexes, apprentissage des techniques de câblage et de montage de tableaux électriques. Développement de compétences techniques dans le domaine de l'électricité industrielle et mise en pratique des connaissances théoriques.ne entreprise de fabrication d'armoire et de coffret éléctrique industriel.",
    location: "Marseille"
  },
  {
    title: 'Sound designer',
    company: 'Loft ton studio',
    period: '2022 - 2022',
    description: "Sound designer stagiaire dans une entreprise de sound design spécialisé dans l'audiovisuel du cinéma et de la publicité. Participation à la création et au montage sonore de projets cinématographiques et publicitaires. Apprentissage des techniques de bruitage, mixage et post-production audio, utilisation de logiciels professionnels de traitement sonore.",
    location: "Hambourg"
  }
];

function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative">
      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full relative animate-fadeIn">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">Contactez-moi 👋</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                <Mail className="text-blue-500 flex-shrink-0" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:bennacefhamid@gmail.com" className="text-white hover:text-blue-500">
                    bennacefhamid@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                <Phone className="text-blue-500 flex-shrink-0" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Téléphone</p>
                  <a href="tel:0620996253" className="text-white hover:text-blue-500">
                    06 20 99 62 53
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-gray-400 text-sm">
              N'hésitez pas à me contacter pour toute opportunité ! 🚀
            </p>
          </div>
        </div>
      )}

      {/* Sidebar - Made responsive */}
      <div className="lg:fixed lg:w-[400px] w-full h-auto lg:h-screen p-6 border-b lg:border-r border-gray-800 bg-black lg:overflow-y-auto">
        <div className="flex flex-col items-center">
          <img
            src="/profil.png"
            alt="Profile"
            className="w-32 lg:w-40 h-32 lg:h-40 rounded-full mb-6 object-cover ring-2 ring-blue-500"
          />
          <h1 className="text-xl lg:text-2xl font-bold mb-4">Hamid Bennacef</h1>
          <h2 className="text-base lg:text-lg text-gray-400 mb-2">Développeur Full Stack</h2>

          <div className="flex gap-4 mb-4">
            {[
              { icon: <Github size={20} />, href: 'https://github.com/Hamid-dev13' },
              { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/hamid-bennacef-245894192/' },
              { icon: <Mail size={20} />, action: () => setShowContactModal(true) },
            ].map((social, index) => (
              social.href ? (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  className="text-gray-400 hover:text-blue-500 transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  {social.icon}
                </a>
              ) : (
                <button
                  key={index}
                  onClick={social.action}
                  className="text-gray-400 hover:text-blue-500 transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  {social.icon}
                </button>
              )
            ))}
          </div>

          <p className="text-gray-400 text-center text-base mb-8 max-w-sm">
            <span className="block mb-3 font-medium">
              👋 Salut ! Moi c'est <span className="font-bold text-blue-400">Hamid</span>. Je suis un jeune développeur Fullstack passionné !
            </span>
            <span className="block mb-3">
              🎓 Je suis actuellement étudiant à <span className="font-bold text-blue-400">Epitech, Marseille</span> en <span className="font-bold">3ème année</span> (Programme Master of science)
            </span>
            <span className="block mb-3">
              💼 Je recherche un <span className="font-bold text-blue-400">contrat en alternance</span> d'une durée de <span className="font-bold">33 mois</span>, démarrant <span className="font-bold">début 2025.</span>
            </span>
            <span className="block font-medium mb-2">
              ✉️ N'hésite pas à me contacter !
            </span>
          </p>

          <a
            href="/HamidBennacefCV.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] text-sm inline-block"
          >
            Télécharger CV
          </a>
        </div>
      </div>

      <div className="lg:ml-[400px] p-4 lg:p-8">
        {/* Compétences section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Code2 className="mr-2 text-blue-500" />
            Compétences
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all"
              >
                <div className="text-blue-500 mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <div className="text-xs text-blue-500 mb-2 text-center">{skill.category}</div>
                <div className="font-medium text-center">{skill.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projets section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Globe className="mr-2 text-blue-500" />
            Projets
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="block bg-gray-900 rounded-lg overflow-hidden hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="text-xs text-blue-500 mb-3">{project.category}</div>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.title === 'FreelanceFlow' && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] text-sm"
                    >
                      Voir le projet
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Parcours Académique section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <GraduationCap className="mr-2 text-blue-500" />
            Parcours Académique
          </h2>
          <div className="space-y-6">
            {education.map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 rounded-lg p-6 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-blue-500 mb-3">
                  <span>{item.institution}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                  <span>•</span>
                  <span>{item.period}</span>
                </div>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Expérience Professionnelle section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-2 text-blue-500" />
            Expériences Professionnelles
          </h2>
          <div className="space-y-6">
            {experience.map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 rounded-lg p-6 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-blue-500 mb-3">
                  <span>{item.company}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                  <span>•</span>
                  <span>{item.period}</span>
                </div>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;