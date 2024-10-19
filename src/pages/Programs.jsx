import React from 'react';
import solarPanel from '../assets/images/solar.jpg';
import windTurbine from '../assets/images/wind.jpg';
import forestWaterfall from '../assets/images/waterfall.jpg';

const Programs = () => {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Our Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src={solarPanel} alt="Solar Energy Program" className="w-full h-auto" />
          <h3 className="text-xl mt-4">Solar Energy Program</h3>
          <p>Promoting renewable energy through solar power.</p>
        </div>
        <div>
          <img src={windTurbine} alt="Wind Energy Program" className="w-full h-auto" />
          <h3 className="text-xl mt-4">Wind Energy Program</h3>
          <p>Harnessing wind power for a greener future.</p>
        </div>
        <div>
          <img src={forestWaterfall} alt="Hydro Power Program" className="w-full h-auto" />
          <h3 className="text-xl mt-4">Sustainability Program</h3>
          <p>Protecting ecosystems and promoting sustainability.</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;