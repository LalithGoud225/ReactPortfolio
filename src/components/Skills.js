export default function Skills() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 md:px-12 py-12">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-b border-gray-700 pb-4">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6 text-sm text-gray-300">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-1">Languages</h4>
              <p>JavaScript, Java, Python, C#, PHP</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-1">UX Tools</h4>
              <p>Adobe XD, Figma</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-1">Testing Tool(s)</h4>
              <p>Selenium</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-1">Databases</h4>
              <p>MySQL, PostgreSQL, Redis, Prisma, MongoDB, Oracle</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-1">Cloud Platform</h4>
              <p>AWS, DevOps, Docker, Jenkins, Kubernetes, Terraform</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-1">Version Control</h4>
              <p>GIT, GitHub, GitLab, Bitbucket</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-sm text-gray-300">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-1">Libraries & Frameworks</h4>
              <p>React, Spring Boot, Node.js, Maven, ES6+, Material UI, jQuery, Bootstrap</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-1">Web Technologies</h4>
              <p>HTML5, React.js, Next.js, Angular, CSS, Bootstrap</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-1">Web Services</h4>
              <p>RESTful, SOAP, JSON</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-1">Others</h4>
              <p>Kafka, IntelliJ IDEA, Slack, VS Code, Firebase, JIRA, ServiceNow</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-1">Software Methodologies</h4>
              <p>Agile, Waterfall, Scrum</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-1">Workflow</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Mobile-First, Responsive Design</li>
                <li>Cross Browser Testing & Debugging</li>
                <li>Cross Functional Teams</li>
                <li>Agile Development & Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
