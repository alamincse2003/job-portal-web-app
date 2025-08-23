import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      setErr(error.message);
    }
  };
  return (
    <div className="max-w-md mx-auto p-6 my-10 bg-white dark:bg-gray-800 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {err && <p className="text-red-500 mb-2">{err}</p>}

      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="w-full p-2 border rounded"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full py-2 bg-blue-600 text-white rounded">
          Login
        </button>
      </form>

      <p className="mt-4 text-sm">
        New here?{" "}
        <Link to="/signup" className="text-blue-600">
          Create account
        </Link>
      </p>
    </div>
  );
};

export default Login;
