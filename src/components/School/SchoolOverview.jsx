import { useSchools } from "../../context/SchoolsContext"; // Import context
import { FaSchool, FaTrophy, FaUsers } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const HeroSection = () => {
  const { schools } = useSchools();

  return (
    <div className="relative bg-white mt-6 w-full rounded-lg overflow-hidden">
      {/* Hero Image */}
      <img
        src="assets/teachdash.jpg"
        alt="Online Learning"
        className="w-full h-[290px] object-cover rounded-lg"
      />

      {/* Optional Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>

      {/* Hero Content */}
      
      {/* Main Dynamic Content (From Dashboard) */}
      <main className="flex-1 p-6 mt-6">
        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school) => (
            <div key={school.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <FaSchool className="text-blue-500 text-3xl mb-2" />
              <h3 className="font-semibold text-lg">{school.name}</h3>
              <p className="text-sm text-gray-600">{school.location}</p>
              <p className="text-sm font-semibold text-gray-800">Principal: {school.principal}</p>
            </div>
          ))}
        </section>

        

        {/* Students Section */}
      <section className="mt-8">
        <h3 className="text-xl text-black font-semibold mb-4">👨‍🎓 Students</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {schools.flatMap((school) => school.students).slice(0, 5).map((student) => (
            <div key={student.id} className="bg-white shadow-md p-4 rounded-lg">
              <h4 className="font-semibold text-black">
                {student.name} (Grade {student.grade})
              </h4>
              <p className="text-sm text-gray-600">Achievements:</p>
              <ul className="list-disc text-black pl-4">
                {student.achievements.slice(0, 2).map((achieve, index) => (
                  <li key={index}>{achieve}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

        {/* Dynamic Content */}
        <div className="mt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;