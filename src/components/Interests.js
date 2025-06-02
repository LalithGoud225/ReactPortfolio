export default function Interests() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 md:px-12 py-12">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold mb-10 border-b border-gray-700 pb-4">Interests</h2>

        {/* Top Section: Text + Main Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
          {/* Text Section */}
          <div>
            <p className="mb-4 text-gray-300 text-sm leading-relaxed">
              Apart from being a web developer, I enjoy spending most of my time outdoors. I am an adventurous person who's been hiking across scenic trails and have even experienced the thrill of skydiving.
            </p>
            <p className="mb-4 text-gray-300 text-sm leading-relaxed">
              In the winter, I enjoy skiing and experimenting with ice climbing. In the warmer months, I love mountain biking, free climbing, and kayaking.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Indoors, I enjoy sci-fi and fantasy movies, cooking new recipes as an aspiring chef, and staying up to date with the latest trends in frontend technology.
            </p>
          </div>

          {/* Main Image */}
          <div className="flex justify-center items-center">
            <img
              src="/adventure.jpg"
              alt="Adventure"
              className="rounded-xl w-80 h-auto shadow-xl"
            />
          </div>
        </div>

        {/* Bottom Section: Gallery Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg"].map((img, idx) => (
            <div key={idx} className="w-full">
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
