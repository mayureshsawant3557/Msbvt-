<<<<<<< HEAD
;
=======
import React from 'react';
>>>>>>> 07e04b58171e30135cfb2fafdf8e5bfade5b726b
import { SectionData } from './HeroData';

export const StatCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
      <Icon className="text-[#e87722] text-5xl mb-4" />
      <h3 className="text-4xl font-bold text-gray-800 mb-1">{item.count}</h3>
      <p className="text-gray-600 font-medium text-lg">{item.label}</p>
    </div>
  );
};

const HeroStats = () => {
  return (
    <div className="w-full max-w-[1536px] mx-auto my-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SectionData.stats.map(stat => (
          <StatCard key={stat.id} item={stat} />
        ))}
      </div>
    </div>
  );
};

export default HeroStats;
