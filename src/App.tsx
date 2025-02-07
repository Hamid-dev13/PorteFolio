import React from 'react';
import { Github, Linkedin, Globe, Mail } from 'lucide-react';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Fixed Left Sidebar - Reduced width from 400px to 300px */}
      <div className="w-[300px] fixed h-screen p-6 border-r border-gray-200 bg-white">
        <div className="flex flex-col items-center">
          <img
            src="/profil.png"
            alt="Profile"
            className="w-40 h-40 rounded-full mb-6 object-cover shadow-lg"
          />
          <h1 className="text-2xl font-bold mb-2">Hamid Bennacef</h1>
          <h2 className="text-lg text-gray-600 mb-6">Développeur Full Stack</h2>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Globe size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <p className="text-gray-600 text-center text-sm mb-8">
            Passionné par le développement web et les nouvelles technologies.
            Toujours en quête d'apprentissage et de nouveaux défis.
          </p>

          <a
            href="/mon-cv.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors text-sm inline-block"
          >
            Télécharger CV
          </a>
        </div>
      </div>

      {/* Scrollable Right Content - Adjusted margin to match new sidebar width */}
      <div className="ml-[300px] flex-1 p-8">
        {/* Compétences */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Compétences</h2>
          <div className="grid grid-cols-3 gap-4">
            {['React', 'NextJs', 'TypeScript', 'JavaScript', 'HTML/CSS/Javascript', 'Mysql'].map((skill) => (
              <div key={skill} className="bg-white shadow-sm border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                {skill}
              </div>
            ))}
          </div>
        </section>
        {/* Projets Personnels */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Projets Personnels</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
                alt="Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Job board</h3>
                <p className="text-gray-700 mb-4">
                  Développement d’un site d’annonces d’emploi, interface utilisateur, panneau d’administration, frontend, backend.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Html/Css/Javascript</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Php</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">MySql</span>
                </div>
              </div>
            </div>
            {/* Add more projects */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
                alt="Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Internet Relay chat</h3>
                <p className="text-gray-700 mb-4">
                  Application web de chat instantané, dynamique, permettant à plusieurs utilisateurs de communiquer en temps réel, front-end et  back-end.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">WebSocket</span>
                </div>
              </div>
            </div>
            {/* Add more projects */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
                alt="Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">FreelanceFlow</h3>
                <p className="text-gray-700 mb-4">
                  Application web en cours de développement pensée pour les freelances, permettant de stocker les clients et les différentes missions associées à ces derniers. Interface dynamique, communication en temps réel avec une base de données mySql.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">WebSocket</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Parcours Académique */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Parcours Académique</h2>
          <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow mb-8">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Master of science</h3>
            <p className="text-gray-600 mb-2">Epitech • 2024 - 2027</p>
            <p className="text-gray-700">
              Formation diplômante en Bac+5, programmation informatique
            </p>
          </div>
          <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Sound design</h3>
            <p className="text-gray-600 mb-2">Acfa multimédia • 2020 - 2022</p>
            <p className="text-gray-700">
              Formation de Sound design
            </p>
          </div>
        </section>
        {/* Expérience Professionnelle */}

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Expérience Professionnelle</h2>
          <div className="space-y-8">
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow mb-8">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Electricien</h3>
              <p className="text-gray-600 mb-2">Jenko • 2024 - 2024</p>
              <p className="text-gray-700">
                Apprenti éléctricien dans une entreprise de fabrication d’armoire et de coffret éléctrique industriel.
              </p>
            </div>

          </div>
          {/* Add more experiences */}
          <div className="space-y-8">
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Sound designer</h3>
              <p className="text-gray-600 mb-2">Loft ton studio • 2022 - 2022</p>
              <p className="text-gray-700">
                Sound designer stagiaire dans une entreprise spécialisé dans l'audio visuel
              </p>
            </div>

          </div>
        </section>




      </div>
    </div>
  );
}

export default App;