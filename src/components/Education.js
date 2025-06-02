export default function Education() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 md:px-12 py-12">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-b border-gray-700 pb-4">Education</h2>

        {/* University of Central Missouri */}
        <div className="mb-12">
          <div className="flex items-center w-full mb-1">
            <h3 className="text-2xl font-bold">University of Central Missouri</h3>
            <span className="text-sm text-gray-400 ml-auto">Aug 2023 – May 2025</span>
          </div>
          <p className="text-lg font-medium text-gray-300">Bachelor of Computer Science</p>
          <p className="text-sm text-gray-300 mb-1">Computer Science - Full Stack Development Track</p>
          <p className="text-sm text-gray-400">GPA: 3.4</p>
        </div>

        {/* Vardhaman College of Engineering */}
        <div>
          <div className="flex items-center w-full mb-1">
            <h3 className="text-2xl font-bold">Vardhaman College of Engineering</h3>
            <span className="text-sm text-gray-400 ml-auto">Aug 2002 – May 2006</span>
          </div>
          <p className="text-lg font-medium text-gray-300">EEE</p>
          <p className="text-sm text-gray-400">GPA: 3.56</p>
        </div>
      </div>
    </section>
  );
}
