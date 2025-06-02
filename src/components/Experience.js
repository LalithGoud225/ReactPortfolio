export default function Experience() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 md:px-12 py-12">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-b border-gray-700 pb-4">Work Experience</h2>

        {/* INFOSYS */}
        <div className="mb-12">
          <div className="flex items-center w-full mb-1">
            <h3 className="text-2xl font-bold">INFOSYS</h3>
            <span className="text-sm text-gray-400 ml-auto">Apr 2022 – Jul 2023</span>
          </div>
          <p className="text-lg font-medium text-gray-300 mb-2">
            Senior System Engineer (Developer) – <span className="text-yellow-400">Warner Music Group</span>
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "Java", "Spring Boot", "REST APIs", "Microservices",
              "JUnit", "Postman", "SQL", "Agile", "JIRA"
            ].map((skill) => (
              <span key={skill} className="bg-gray-800 text-sm text-gray-300 px-3 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
          <ul className="list-disc list-inside text-sm leading-relaxed text-gray-300 space-y-2">
            <li>Built and maintained RESTful APIs and scalable microservices using Java and Spring Boot.</li>
            <li>Created JUnit test cases for reliable test automation.</li>
            <li>Managed API testing using Postman collections.</li>
          </ul>
        </div>

        {/* TCS */}
        <div className="mb-12">
          <div className="flex items-center w-full mb-1">
            <h3 className="text-2xl font-bold">Tata Consultancy Services</h3>
            <span className="text-sm text-gray-400 ml-auto">Mar 2021 – Feb 2022</span>
          </div>
          <p className="text-lg font-medium text-gray-300 mb-2">
            Assistant System Engineer – <span className="text-yellow-400">PepsiCo</span>
          </p>
          <ul className="list-disc list-inside text-sm leading-relaxed text-gray-300 space-y-2">
            <li>Developed and maintained applications using Java, Spring Boot, and Microservices.</li>
            <li>Optimized performance and resolved critical bugs by analyzing logs and refactoring code.</li>
            <li>Reduced incident resolution time by 50% through automation and log analysis.</li>
          </ul>
        </div>

        {/* SoluStun */}
        <div>
          <div className="flex items-center w-full mb-1">
            <h3 className="text-2xl font-bold">SoluStun Private Limited</h3>
            <span className="text-sm text-gray-400 ml-auto">Aug 2020 – Feb 2021</span>
          </div>
          <p className="text-lg font-medium text-gray-300 mb-2">Intern</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Contributed to performance optimization using Java, MySQL, JavaScript, AWS, and Git. Improved deployment by 25%, integrated customer feedback, and enhanced user satisfaction by 35%.
          </p>
        </div>
      </div>
    </section>
  );
}
