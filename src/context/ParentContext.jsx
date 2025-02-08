import { createContext, useState, useContext, useEffect } from "react";

const ParentContext = createContext();

export const useParent = () => useContext(ParentContext);

export const ParentProvider = ({ children }) => {
  const [parentName, setParentName] = useState(""); // Stores the parent's name
  const [childName, setChildName] = useState(""); // Stores the child's name

  // Example data mapping parent to child
  const parentChildData = [
    { parentName: "parent", childName: "John Doe" },
    { parentName: "parent2", childName: "Jane Smith" },
  ];

  // Function to login parent and set their child's name
  const loginParent = (username) => {
    const parentData = parentChildData.find((data) => data.parentName === username);
    if (parentData) {
      setParentName(parentData.parentName);
      setChildName(parentData.childName);
    }
  };

  return (
    <ParentContext.Provider value={{ parentName, setParentName: loginParent, childName }}>
      {children}
    </ParentContext.Provider>
  );
};
