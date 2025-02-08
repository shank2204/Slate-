import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { SchoolProvider } from "./context/SchoolsContext";
import { StudentProvider } from "./context/StudentContext";
import Login from "./components/Login";
import RoleSelection from "./components/RoleSelection";
import AdminDashboard from "./components/Dashboard";
import SchoolsPage from "./components/SchoolsPage";
import StudentsPage from "./components/StudentsPage";
import AchievementsPage from "./components/AchievementsPage";
import DashboardOverview from "./components/DashboardOverview";
import SchoolDashboard from "./components/School/SchoolDashboard";
import Achievements from "./components/School/Achievements";
import MyCourses from "./components/School/MyCourses";
import Students from "./components/Students";
import Assignments from "./components/School/Assignments";
import HeroPage from "./components/Parent/Heropage";
import HeroSection from "./components/School/SchoolOverview";
import SearchBar from "./components/Parent/SearchBar";
import Sidebar from "./components/Parent/Sidebar";
import Performance from "./components/Parent/Performance";
import Dashboard from './components/Student/Dashboard';
import Courses from './components/Student/course';
import Home from './components/Student/Home';
import StudPerformance from './components/Student/StudentPerformance'
import ToDo from './components/Student/Todo'
import StatsPopup from './components/Student/stats'
import './App.css';


function App() {
  return (
    <UserProvider>
      <SchoolProvider>
        <StudentProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/roles" element={<RoleSelection />} />
              <Route path="/dashboard" element={<AdminDashboard />}>
                <Route index element={<DashboardOverview />} />
                <Route path="schools" element={<SchoolsPage />} />
                <Route path="students" element={<StudentsPage />} />
                <Route path="achievements" element={<AchievementsPage />} />
              </Route>
              {/* School Dashboard and its sub-routes */}
              <Route path="/teacher-dashboard" element={<SchoolDashboard />}>
                <Route index element={<HeroSection />} />
                <Route path="courses" element={<MyCourses />} />
                <Route path="students" element={<Students />} />
                <Route path="assignments" element={<Assignments />} />
                <Route path="achievements" element={<Achievements />} />
              </Route>

              {/* Parent Dashboard Route */}
              <Route path="/parent-dashboard" element={<HeroPage />} />
              <Route path="/parent-dashboard/performance" element={<Performance />} />

              
              
              <Route path="/student" element={<Home />} />
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/mycourses" element={<Courses />} /> 
              <Route path="/studperf" element={<StudPerformance/>} /> 
              <Route path="/todo" element={<ToDo/>} /> 
              <Route path="/stats" element={<StatsPopup/>} /> 

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </StudentProvider>
      </SchoolProvider>
    </UserProvider>
  );
}

export default App;
