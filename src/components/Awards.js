import Slider from "react-slick";

export default function Awards() {
  const certifications = [
    {
      title: "AWS Certified Developer Associate",
      description: "AWS Certified Developer Associate.",
      images: ["/certificates/aws-certification.jpg"],
    },
    {
      title: "Introduction to Cloud Semester 1",
      description: "Badge for Introduction to Cloud Semester 1.",
      images: ["/certificates/cloud-semester1.jpg"],
    },
    {
      title: "JavaScript, React, HTML5 (Infosys)",
      description:
        "Certified in JavaScript, React, and HTML5 through comprehensive course completion programs by Infosys, demonstrating expertise in modern web development technologies and best practices.",
      images: [
        "/certificates/infosys-cert-1.jpg",
        "/certificates/infosys-cert-2.jpg",
        "/certificates/infosys-cert-3.jpg",
      ],
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 md:px-12 py-12">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-b border-gray-700 pb-4">
          Awards & Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 shadow-md flex flex-col text-center"
            >
              {cert.images.length > 1 ? (
                <Slider {...sliderSettings} className="mb-4">
                  {cert.images.map((src, idx) => (
                    <div key={idx}>
                      <img
                        src={src}
                        alt={`Certificate ${idx + 1}`}
                        className="rounded-md w-full h-48 object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <img
                  src={cert.images[0]}
                  alt={cert.title}
                  className="rounded-md w-full h-48 object-cover mb-4"
                />
              )}
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
