
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Educuation from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Awards from './components/Awards';
import Contact from './components/Contact';
// import './index.css';

function App() {
  const [section, setSection] = useState('about');

  const renderSection = () => {
    switch(section) {
      case 'projects': return <Projects />;
      case 'experience': return <Experience />;
      case 'education': return <Educuation />;
      case 'skills': return <Skills />;
      case 'contact': return <Contact />;
      case 'interests': return <Interests />;
      case 'awards': return <Awards />;
      default: return <About />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar setSection={setSection} />
      <main className="flex-1 p-8">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
