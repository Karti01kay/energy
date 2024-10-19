import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import solarPanel from '../assets/images/solar.jpg';
import windTurbine from '../assets/images/wind.jpg';
import sustain from '../assets/images/sustainability.jpg';

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Renewable Energy Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Card
            title="Solar Energy"
            description="Harnessing the power of the sun to create a sustainable future."
            imageUrl={solarPanel}
          />
          <Card
            title="Wind Energy"
            description="Capturing wind power to generate clean and renewable energy."
            imageUrl={windTurbine}
          />
          <Card
            title="Sustainability Projects"
            description="Promoting sustainable living through green initiatives."
            imageUrl={sustain}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;