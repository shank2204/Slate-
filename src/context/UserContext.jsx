import { createContext, useState, useContext } from "react";

// Create UserContext
const UserContext = createContext();

// Custom hook for using context
export const useUser = () => useContext(UserContext);

// UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores logged-in user
  const [selectedRole, setSelectedRole] = useState(null); // Stores selected role

  // Login function to validate credentials
  const login = (username, password, users) => {
    const foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
      setUser(foundUser);
      return foundUser.roles; // Return roles for role selection
    }
    return null;
  };

  return (
    <UserContext.Provider value={{ user, selectedRole, setSelectedRole, login }}>
      {children}
    </UserContext.Provider>
  );
};