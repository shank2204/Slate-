// components/StudentsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStudents } from '../context/StudentContext';
import StudentDetails from './StudentDetails';

const StudentsPage = () => {
  const { students } = useStudents();
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        <h2 className="text-2xl text-black font-bold mb-4">Students</h2>
        <ul>
          {students.map(student => (
            <li key={student.id} className="mb-2">
              <Link to="#" onClick={() => handleStudentClick(student)} className="text-green-600 hover:underline">
                {student.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 p-4">
        <StudentDetails student={selectedStudent} />
      </div>
    </div>
  );
};

export default StudentsPage;
