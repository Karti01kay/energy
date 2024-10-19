import React from 'react';

const SDGs = () => {
  return (
    <section className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Sustainable Development Goals (SDGs)</h2>
      <p className="text-lg mb-6">
        The Sustainable Development Goals (SDGs), adopted by all United Nations Member States 
        in 2015, provide a shared blueprint for peace and prosperity for people and the planet, 
        now and into the future. They address global challenges related to poverty, inequality, 
        climate, environmental degradation, and more.
      </p>
      <p className="text-lg mb-6">
        Our foundation aligns its projects with the SDGs to ensure that our efforts not only 
        promote renewable energy but also contribute to the well-being of society and the environment.
      </p>
      <ul className="list-disc pl-6 text-lg">
        <li>No Poverty</li>
        <li>Zero Hunger</li>
        <li>Affordable and Clean Energy</li>
        <li>Climate Action</li>
        <li>Life on Land</li>
        <li>Partnerships for the Goals</li>
      </ul>
    </section>
  );
};

export default SDGs;
