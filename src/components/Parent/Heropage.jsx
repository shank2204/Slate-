import { useState } from "react";
import { useStudents } from "../../context/StudentContext";
import Sidebar from "./Sidebar";

const HeroPage = () => {
  const { students } = useStudents();
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [filteredAchievements, setFilteredAchievements] = useState([]);

  const handleSearch = () => {
    const filtered = selectedStudent?.achievements?.filter((achievement) =>
      achievement.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredAchievements(filtered);
    setShowPopup(true);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closePopup = () => setShowPopup(false);

  return (
    <div className="flex top-5 ml-6 flex-col md:flex-row">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`flex-1 p-4 transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : "md:ml-10"}`}>
        <div className="flex items-center object-cover space-x-2 mb-4">
          <img src="assets/fulllogo-removebg-preview.png" alt="Logo" className="w-32 h-10" />
        </div>
        
        <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            className="p-2 text-black bg-gray-100 w-full border rounded-lg"
            placeholder="Search Achievements..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded-lg w-full sm:w-auto">
            Search
          </button>
        </div>
        
        <div className="relative mt-4 object-cover transition-all duration-300 md:ml-64">
          <img src="assets/parenthome.jpg" 
          alt="Online Learning" 
          className="w-full h-50 sm:h-90 object-cover opacity-60 rounded-lg" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-opacity-50 rounded-lg z-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-black text-center">Achievements & Performance</h2>
          <p className="text-sm sm:text-lg text-black text-center">
           View your child's progress and achievements here.
        </p>
      </div>
    </div>

        
        <div className="mt-4 p-4 bg-white rounded-lg shadow-lg">
          <label htmlFor="studentSelect" className="text-sm sm:text-lg font-semibold text-black block">Select Student:</label>
          <select
            id="studentSelect"
            className="w-full p-2 mt-2 border rounded-lg text-black bg-white"
            value={selectedStudent.id}
            onChange={(e) => setSelectedStudent(students.find((student) => student.id === Number(e.target.value)))}
          >
            {students.map((student) => (
              <option key={student.id} value={student.id}>{student.name}</option>
            ))}
          </select>
        </div>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-green-200 text-black p-4 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold">Attendance</h3>
            <p className="text-gray-700">{selectedStudent.attendance}%</p>
          </div>
          <div className="bg-green-200 text-black p-4 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold">Academic Performance</h3>
            <p className="text-gray-700">{selectedStudent.academicPerformance}</p>
          </div>
          <div className="bg-green-200 text-black p-4 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold">Achievements</h3>
            <p className="text-gray-700">Please search for achievements</p>
          </div>
        </div>
      </div>
      
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-lg sm:text-2xl text-black font-semibold mb-4">Search Results</h2>
            <ul>
              {filteredAchievements.length > 0 ? (
                filteredAchievements.map((achievement, index) => (
                  <li key={index} className="text-gray-700 text-sm sm:text-lg mb-2">{achievement}</li>
                ))
              ) : (
                <p className="text-gray-500 text-sm sm:text-lg">No matching achievements found.</p>
              )}
            </ul>
            <button onClick={closePopup} className="mt-4 p-2 bg-red-500 text-white rounded-lg w-full">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroPage;
