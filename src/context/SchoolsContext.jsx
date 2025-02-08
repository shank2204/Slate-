import { createContext, useState, useContext } from "react";

// Create SchoolContext
const SchoolContext = createContext();

// Custom hook for using the SchoolContext
export const useSchools = () => useContext(SchoolContext);

// SchoolProvider component
export const SchoolProvider = ({ children }) => {
  const [schools, setSchools] = useState([
    {
      id: 1,
      name: "Greenwood High",
      location: "Mumbai",
      principal: "Mr. Sharma",
      achievements: [
        'Academic Excellence Award 2020',
        'Won the Regional Basketball Championship',
      ],
      students: [
        { id: 1, name: "Aryan Kumar", grade: "10", achievements: ["Math Olympiad Winner"] },
        { id: 2, name: "Sana Patel", grade: "9", achievements: ["Science Fair Champion"] },
        { id: 3, name: "Rohit Mehta", grade: "11", achievements: ["Basketball Team Captain"] },
        // Add more student data here
      ]
    },
    {
      id: 2,
      name: "Oakridge International",
      location: "Pune",
      principal: "Ms. Rao",
      achievements: [
        '75% of students participated in Cultural festivals',
        'Won the National Academic Championship',
      ],
      students: [
        { id: 1, name: "Nikhil Raj", grade: "10", achievements: ["Debate Team Leader"] },
        { id: 2, name: "Anaya Singh", grade: "12", achievements: ["Top Scorer in SAT"] },
        { id: 3, name: "Maya Sharma", grade: "8", achievements: ["Art Competition Winner"] },
        // Add more student data here
      ]
    },
    {
      id: 3,
      name: "Cambridge International",
      location: "Pune",
      principal: "Ms. Rao",
      achievements: [
        'Donated 1000 Lunch boxes',
        'High participation in STEM activities',
      ],
      students: [
        { id: 1, name: "Kavya Kapoor", grade: "9", achievements: ["Best Performer in Drama"] },
        { id: 2, name: "Rohan Desai", grade: "10", achievements: ["First Prize in Coding Competition"] },
        { id: 3, name: "Simran Verma", grade: "11", achievements: ["Member of Robotics Team"] },
        // Add more student data here
      ]
    },
    // Add more school data here
  ]);

  return (
    <SchoolContext.Provider value={{ schools, setSchools }}>
      {children}
    </SchoolContext.Provider>
  );
};
