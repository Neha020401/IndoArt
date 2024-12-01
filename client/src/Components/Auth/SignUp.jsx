import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
    adhaarNo: "",
    panCardNo: "",
  });

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const [error, setError] = useState("");
  const [registerType, setRegisterType] = useState(""); // Toggle between 'artLover' and 'artist'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for "Art Lover" Form
    if (registerType === "artLover") {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError("All fields are required!");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match!");
        return;
      }
    }

    // Validation for "Artist" Form
    if (registerType === "artist") {
      if (
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword ||
        !formData.phoneNo ||
        !formData.adhaarNo ||
        !formData.panCardNo
      ) {
        setError("All fields are required!");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match!");
        return;
      }
    }

    setError("");
    alert(`Sign-up successful as ${registerType === "artLover" ? "Art Lover" : "Artist"}!`);
    console.log("User Data:", formData);
  };

  return (
    <div className="signup-page">
      <h2 style={{marginBottom:"10px"}}>Sign Up</h2>

      {/* Buttons to choose registration type */}
      <div className="signup-buttons">
        <button
          className="registerButton"
          onClick={() => setRegisterType("artLover")}
        >
          Register as Art Lover
        </button>
        <button
          className="registerButton"
          onClick={() => setRegisterType("artist")}
        >
          Register as Artist
        </button>
      </div>

      {/* Conditional Rendering for Forms */}
      {registerType === "artLover" && (
        <form className="signup-form" onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}

          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="signup-input"
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
          />

          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              type={hidePassword ? "password" : "text"}
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="signup-input"
            />
            <FontAwesomeIcon
              icon={hidePassword ? faEyeSlash : faEye}
              className="password-icon"
              onClick={() => setHidePassword((prev) => !prev)}
            />
          </div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="password-field">
            <input
              type={hideConfirmPassword ? "password" : "text"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="signup-input"
            />
            <FontAwesomeIcon
              icon={hideConfirmPassword ? faEyeSlash : faEye}
              className="password-icon"
              onClick={() => setHideConfirmPassword((prev) => !prev)}
            />
          </div>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      )}

      {registerType === "artist" && (
        <form className="signup-form" onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="signup-input"
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="signup-input"
          />

          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="number"
            name="phoneNo"
            id="phoneNo"
            placeholder="Enter your phone number"
            value={formData.phoneNo}
            onChange={handleChange}
            className="signup-input"
          />

          <label htmlFor="adhaarNo">Aadhaar Number</label>
          <input
            type="text"
            name="adhaarNo"
            id="adhaarNo"
            placeholder="Enter your Aadhaar number"
            value={formData.adhaarNo}
            onChange={handleChange}
            className="signup-input"
          />

          <label htmlFor="panCardNo">PAN Card Number</label>
          <input
            type="text"
            name="panCardNo"
            id="panCardNo"
            placeholder="Enter your PAN card number"
            value={formData.panCardNo}
            onChange={handleChange}
            className="signup-input"
          />

          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default SignUp;
