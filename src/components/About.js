export default function About() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        Full-stack Software Engineer with 3+ years of experience developing scalable and efficient web applications. Proficient in modern JavaScript frameworks (React, Angular), backend development with Spring Boot, RESTful APIs, and cloud infrastructure using AWS.
      </p>
      <p className="mb-4">
        Strong foundation in Data Structures, Algorithms, Object-Oriented Programming, and Agile methodologies. Passionate about building user-friendly experiences and writing clean, maintainable code.
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-400">Contact Information</h3>
        <ul className="space-y-1 text-sm">
          <li><span className="font-semibold">Email:</span> <a href="mailto:lalithkumargoudk@gmail.com" className="text-blue-300 hover:underline">lalithkumargoudk@gmail.com</a></li>
          <li><span className="font-semibold">Phone:</span> <a href="tel:+16605805787" className="text-blue-300 hover:underline">+1 (660) 580-5787</a></li>
          <li><span className="font-semibold">Location:</span> United States (Remote/Hybrid)</li>
        </ul>
      </div>
    </section>
  );
}
