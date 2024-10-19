const Hero = () => {
  return (
    <section className="bg-green-500 text-white p-4 md:p-8 lg:p-16 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Promoting Renewable Energy & Sustainability</h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-6">Join us in driving India towards a sustainable future.</p>
      <a href="/about" className="bg-white text-green-600 py-2 px-4 rounded hover:bg-green-700 hover:text-white transition duration-300 ease-in-out">
        Learn More
      </a>
    </section>
  );
};

export default Hero;

