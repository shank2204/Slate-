import Homepage from './Dashboard';
import { Link } from "react-router-dom";
import { useStudents } from "../../context/StudentContext"; // ✅ Import Student Context

export default function Home() {
    const { students } = useStudents(); // ✅ Get student data from context

    // ✅ Find John Doe's Data
    const student = students.find((s) => s.name === "John Doe");

    const carouselData = [
        { src: "/assets/c1.jpg", alt: "Teacher Dashboard", text: "Manage Your Courses and Achievements" },
        { src: "/assets/c2.jpg", alt: "Achievement 2", text: "Track Your Academic Performance" },
        { src: "/assets/c3.jpg", alt: "Achievement 3", text: "Showcasing Your Excellence" },
        { src: "/assets/c4.jpg", alt: "Achievement 4", text: "Improve Your Learning with Resources" },
        { src: "/assets/c6.jpg", alt: "Achievement 5", text: "Stay Consistent with Attendance" },
        { src: "/assets/parenthome.jpg", alt: "Achievement 6", text: "Excel in Extracurricular Activities" }
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <Homepage />
            <main className="p-6">

                {/* ✅ Carousel */}
                <div className="w-full max-w-4xl mx-auto overflow-hidden relative mt-8">
                    <div className="flex space-x-4 animate-scroll carousel">
                        {carouselData.map((item, index) => (
                            <div key={index} className="relative w-1/3">
                                <img src={item.src} alt={item.alt} className="w-full h-64 rounded-lg object-cover opacity-80" />
                                <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
                                    <span className="text-black md:text-base sm:text-lg font-semibold">{item.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ✅ Student Details + Cards Section */}
                {student && (
                    <section className="mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-6">
                        {/* ✅ Student Details */}
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
                            <h2 className="text-2xl text-green-500 font-bold">🎓 Welcome, {student.name}!</h2>
                            <h3 className="text-xl font-semibold text-indigo-600 mt-2">🏫 {student.school}</h3>
                            <p className="text-gray-700">📊 Academic Performance: <span className="font-semibold">{student.academicPerformance}</span></p>
                            <p className="text-gray-700">📅 Attendance: <span className="font-semibold">{student.attendance}%</span></p>
                            <h4 className="mt-4 font-semibold">🏆 Achievements:</h4>
                            <ul className="list-disc list-inside text-gray-600">
                                {student.achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
 
                        {/* ✅ Cards Section (Next to Student Details on Large Screens) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 w-full lg:max-w-lg">
                            <Link to="/studperf" className="bg-gray-200 shadow-lg p-6 rounded-lg text-center text-black hover:shadow-xl transform hover:scale-105 transition duration-300">
                                <h3 className="text-lg font-semibold flex flex-col items-center">
                                    🏆 My Achievements
                                </h3>
                            </Link>
                            <Link to="/mycourses" className="bg-gray-200 shadow-lg p-6 rounded-lg text-center text-black hover:shadow-xl transform hover:scale-105 transition duration-300">
                                <h3 className="text-lg font-semibold flex flex-col items-center">
                                    📚 My Courses
                                </h3>
                            </Link>
                            <Link to="/todo" className="bg-gray-200 shadow-lg p-6 rounded-lg text-center text-black hover:shadow-xl transform hover:scale-105 transition duration-300">
                                <h3 className="text-lg font-semibold flex flex-col items-center">
                                    📂 To-Do list
                                </h3>
                            </Link>
                        </div>
                        
                    </section>
                )}
            </main>
        </div>
    );
}
