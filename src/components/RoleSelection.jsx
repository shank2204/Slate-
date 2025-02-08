import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const RoleSelection = () => {
  const { user, setSelectedRole } = useUser();
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSelectRole = () => {
    if (selected) {
      if (selected === "Parent1") {
        navigate("/parent-dashboard");
      } else if (selected === "Student1") {
        navigate("/student");
      } else {
        navigate("/roles"); // Default case
      }
    }
  };

  const handleCancel = () => {
    // Redirect to the login page if the user cancels role selection
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-black text-center mb-4">Select Your Role</h2>

        {user.roles.map((role, index) => (
          <><button
            key={index}
            className="w-auto py-2 my-2 rounded-md hover:bg-[rgb(152,153,146)]"
            onClick={() => setSelected(role)}
          >
            {role}

          </button><br /></>
          
        ))}

        <button
          className="w-full text-white py-2 mt-4 rounded-md hover:bg-[rgb(40,140,30)]"
          onClick={handleSelectRole}
          disabled={!selected}
          style={{ backgroundColor: selected ? 'rgb(50, 170, 39)' : 'rgb(200, 200, 200)' }}
        >
          Proceed
        </button>

        {/* Cancel Button */}
        <button
          className="w-full text-white py-2 mt-4 rounded-md  hover:bg-red-700"
          style={{ backgroundColor:  'rgb(214, 40, 40)'  }}
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;