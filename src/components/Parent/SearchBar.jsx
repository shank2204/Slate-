import { useState } from "react";

const SearchBar = ({ selectedStudent }) => {
  const [query, setQuery] = useState("");
  const [filteredAchievements, setFilteredAchievements] = useState([]);

  // Filter achievements based on the search query
  const handleSearch = () => {
    if (selectedStudent && selectedStudent.achievements) {
      const results = selectedStudent.achievements.filter(achievement =>
        achievement.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredAchievements(results);
    }
  };

  // Update the filtered results as the user types
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    handleSearch();
  };

  return (
    <div className="search-container mt-6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Achievements/Reports"
        value={query}
        onChange={handleInputChange}
        className="p-2 border rounded-lg w-full"
      />
      
      {/* Display search results */}
      <div className="mt-4">
        {filteredAchievements.length > 0 ? (
          <ul>
            {filteredAchievements.map((achievement, index) => (
              <li key={index} className="p-2 border-b">{achievement}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No matching achievements found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
