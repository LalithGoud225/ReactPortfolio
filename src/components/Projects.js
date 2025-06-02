import { FaCheck } from 'react-icons/fa';

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <ul className="list-none space-y-4">
        <li className="flex items-start">
          <span className="text-green-400 mt-1 mr-2">
            <FaCheck />
          </span>
          <div>
            <strong>Project 1:</strong> Built an online job portal using React, Node.js, MongoDB, and Express, featuring user registration/login, job listings, and application tracking. Integrated JWT authentication and deployed on AWS.{" "}
            <a
              href="https://github.com/LalithGoud225/BookStore.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              [GitHub]
            </a>
          </div>
        </li>

        <li className="flex items-start">
          <span className="text-green-400 mt-1 mr-2">
            <FaCheck />
          </span>
          <div>
            <strong>Project 2:</strong> Developed a personal finance tracker using React, Firebase, and Chart.js to monitor expenses, visualize trends, and categorize transactions. Included Firebase Auth and Firestore for real-time sync.{" "}
            <a
              href="https://github.com/yourusername/finance-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              [GitHub]
            </a>
          </div>
        </li>

        <li className="flex items-start">
          <span className="text-green-400 mt-1 mr-2">
            <FaCheck />
          </span>
          <div>
            <strong>Project 3:</strong> Designed and implemented a microservices architecture for an e-commerce platform, enhancing scalability and maintainability.
          </div>
        </li>
      </ul>
    </section>
  );
}

