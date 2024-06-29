import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      toast.success("Registered successully!!");
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      await login({ username: inputs.username, password: inputs.password });
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1 className="secondary">I am Social</h1>
          <span className="secondary">Do you have an account?</span>
          <Link to="/login">
            <button className="third">Login</button>
          </Link>
        </div>
        <div className="right">
          <h1 className="secondary">Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
