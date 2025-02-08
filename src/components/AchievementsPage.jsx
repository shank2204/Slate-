import React from 'react';
import { useSchools } from '../context/SchoolsContext';
import Badge from './Badge';

const AchievementsPage = () => {
  const { schools } = useSchools();

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black text-center">
        School Achievements
      </h1>

      {/* Badge Color Priorities Section */}
      <div className="w-full max-w-4xl mb-6 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg md:text-xl font-semibold mb-2 text-black text-center">
          Badge Color Priorities
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-black">
          <li className="flex items-center"><span className="bg-red-500 px-2 py-1 text-xs font-semibold text-white rounded-full">Red</span>: Academic Achievements</li>
          <li className="flex items-center"><span className="bg-green-500 px-2 py-1 text-xs font-semibold text-white rounded-full">Green</span>: Sports Achievements</li>
          <li className="flex items-center"><span className="bg-blue-500 px-2 py-1 text-xs font-semibold text-white rounded-full">Blue</span>: Science & Technology Achievements</li>
          <li className="flex items-center"><span className="bg-purple-500 px-2 py-1 text-xs font-semibold text-white rounded-full">Purple</span>: Cultural Achievements</li>
          <li className="flex items-center"><span className="bg-yellow-500 px-2 py-1 text-xs font-semibold text-white rounded-full">Yellow</span>: Community Service Achievements</li>
          <li className="flex items-center"><span className="bg-gray-500 px-2 py-1 text-xs font-semibold text-white rounded-full">Gray</span>: Other Achievements</li>
        </ul>
      </div>

      {/* Schools Achievements */}
      <div className="w-full max-w-4xl space-y-4">
        {schools.map((school) => (
          <div key={school.id} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-semibold mb-2 text-black text-center md:text-left">
              {school.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {school.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2 text-black">
                  <Badge achievement={achievement} />
                  <span>{achievement.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;