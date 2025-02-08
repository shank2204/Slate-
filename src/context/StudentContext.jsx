import { createContext, useState, useContext, useEffect } from "react";

const StudentContext = createContext();

export const useStudents = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [academicPerformance, setAcademicPerformance] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      const studentData = [
        { 
          id: 1, 
          name: 'John Doe', 
          school: 'Greenwood High', 
          attendance: 95, 
          academicPerformance: 'A', 
          achievements: [
            "Excellent Performance in Math", 
            "Top scorer in Science", 
            "Best attendance record"
          ]
        },
        { 
          id: 2, 
          name: 'Jane Smith', 
          school: 'Oakridge International', 
          attendance: 88, 
          academicPerformance: 'B+', 
          achievements: [
            "Outstanding in Art", 
            "Improved significantly in English"
          ]
        },
        { 
          id: 3, 
          name: 'Alice Johnson', 
          school: 'Cambridge International', 
          attendance: 90, 
          academicPerformance: 'A+', 
          achievements: [
            "Excellent Performance in Science", 
            "Awarded Best Student of the Year"
          ]
        },
        { 
          id: 4, 
          name: 'Mike Brown', 
          school: 'Greenwood High', 
          attendance: 75, 
          academicPerformance: 'B', 
          achievements: [
            "Achieved High Marks in History", 
            "Consistently improved in Math"
          ]
        }
      ];
      
      // Set the student data including achievements, attendance, and academic performance
      setStudents(studentData);
      setAttendance(studentData.map(student => student.attendance));
      setAcademicPerformance(studentData.map(student => student.academicPerformance));
    };

    fetchStudentData();
  }, []);

  return (
    <StudentContext.Provider value={{ students, attendance, academicPerformance }}>
      {children}
    </StudentContext.Provider>
  );
};
