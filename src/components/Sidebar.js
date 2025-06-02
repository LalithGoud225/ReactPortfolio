import React from 'react';

function Sidebar({ setSection }) {
  return (
    <aside className="w-70 bg-gray-800 flex flex-col items-center p-6">
      {/* ✅ This works because it's in public/ */}
      <img src="/profile.jpg" alt="Profile" className="rounded-full w-28 mb-4" />
      
      <h1 className="text-2xl font-bold text-center">
        Katamoni Lalith Kumar<br />
        <span className="text-blue-400">Goud</span>
      </h1>
      <p className="text-sm text-gray-400 mb-6">Software Developer</p>
      
      <nav className="flex flex-col gap-4 w-full text-center">
        <button onClick={() => setSection('about')} className="hover:text-blue-400">About</button>
        <button onClick={() => setSection('experience')} className="hover:text-blue-400">Work Experience</button>
        <button onClick={() => setSection('education')} className="hover:text-blue-400">Education</button>
        <button onClick={() => setSection('skills')} className="hover:text-blue-400">Skills</button>
        <button onClick={() => setSection('interests')} className="hover:text-blue-400">Interests</button>
        <button onClick={() => setSection('projects')} className="hover:text-blue-400">Projects</button>
        <button onClick={() => setSection('awards')} className="hover:text-blue-400">Awards</button>
      </nav>
    </aside>
  );
}

export default Sidebar;
