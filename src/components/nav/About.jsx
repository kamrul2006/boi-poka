
const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 px-6">
        
        {/* Image Section */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src="https://i.ibb.co.com/HgqxrH8/kkk.jpg"
            alt="About Boi Poka"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 w-full text-gray-800">
   
          <h2 className="text-4xl font-bold mb-4">
            About Boi Poka
          </h2>
          <p className="text-lg mb-4">
            Boi Poka is more than just a library; it’s a haven for book lovers, a place where stories come to life, and knowledge knows no bounds. We believe in the power of books to inspire, educate, and transform lives.
          </p>
          <p className="text-lg mb-6">
            Established with the aim of bringing people and books together, Boi Poka offers a wide selection of genres and categories, ensuring there are something for everyone. Whether you are an avid reader or just starting out, our collection will inspire you to explore new worlds, ideas, and perspectives.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-yellow-600 text-white text-lg font-semibold rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
