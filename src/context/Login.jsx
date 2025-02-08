import { useParent } from "../../context/ParentContext"; // Import Parent Context

const Login = () => {
  const { setParentName } = useParent();  // Access context to set the parent name

  const handleLogin = (username) => {
    setParentName(username); // Set the parent username when they log in
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Parent Username"
        onBlur={(e) => handleLogin(e.target.value)}  // Trigger login when input loses focus
      />
    </div>
  );
};

export default Login;
