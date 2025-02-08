// components/Badge.jsx
import React from 'react';

const Badge = ({ achievement }) => {
  const getBadgeColor = (achievement) => {
    if (achievement.includes('Basketball') || achievement.includes('Soccer')) {
      return 'bg-green-500';
    } else if (achievement.includes('Science Fair') || achievement.includes('STEM')) {
      return 'bg-blue-500';
    } else if (achievement.includes('Cultural') || achievement.includes('Drama')) {
      return 'bg-purple-500';
    } else if (achievement.includes('Community') || achievement.includes('Recycling')) {
      return 'bg-yellow-500';
    } else if (achievement.includes('Academic') || achievement.includes('Exams')) {
      return 'bg-red-500';
    } 
    else if (achievement.includes('Donated') || achievement.includes('Exams')) {
      return 'bg-yellow-500';
    } else {
      return 'bg-gray-500';
    }
  };

  return (
    <span className={`inline-block px-2 py-1 text-xs text-center font-semibold text-white rounded-full ${getBadgeColor(achievement)}`}>
      {achievement}
    </span>
  );
};

export default Badge;
