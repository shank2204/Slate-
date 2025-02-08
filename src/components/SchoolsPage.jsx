// components/SchoolsPage.jsx
import { useSchools } from "../context/SchoolsContext";

const SchoolsPage = () => {
  const { schools } = useSchools();

  return (
    <div className="p-6 bg-gray-100 h-screen">
      <h2 className="text-2xl font-bold text-black mb-4">Schools</h2>
      <ul className="space-y-4">
        {schools.map((school) => (
          <li key={school.id} className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold text-green-600">{school.name}</h2>
            <p className="text-gray-600">{school.location} - Principal: {school.principal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolsPage;
