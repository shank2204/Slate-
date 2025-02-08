import React from 'react';

const StudentDetails = ({ student }) => {
  if (!student) return <div className='text-black text-center p-4'>No student selected.</div>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-3xl font-bold mb-4 text-center text-green-600">{student.name}</h2>
      <div className="space-y-4">
        <p className="text-lg text-black"><strong>School:</strong> {student.school}</p>
        <p className="text-lg text-black"><strong>Attendance:</strong> {student.attendance}%</p>
        <p className="text-lg text-black"><strong>Academic Performance:</strong> {student.academicPerformance}</p>
      </div>
    </div>
  );
};

export default StudentDetails;
