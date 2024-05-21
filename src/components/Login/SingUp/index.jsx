import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoSvg from "../../../assets/Logo_Streamvibe.svg";
import imgFondo from "../../../assets/SubContainer.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles.sass";
import { registerUser } from "../../../services/apiService";

const SingUp = ({ toggleComponent }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    if (password !== confirmPassword) {
      console.error("Las contraseñas no coinciden");
      return;
    }


    const userData = {
      name: fullName,
      email: email,
      phone: phoneNumber,
      password: password
    };

    try {
      const newUser = await registerUser(userData);
      console.log("Usuario registrado correctamente:", newUser);
      navigate('/movies');
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="login">
      <section className="login__img">
        <img src={imgFondo} alt="Background" />
      </section>
      <section className="login__info">
        <div className="login__header">
          <img className="login__logo" src={LogoSvg} alt="Streamvibe Logo" />
          <p>
            Have an account?{" "}
            <span className="login__signup" onClick={toggleComponent}>Sign In!</span>
          </p>
        </div>
        <div className="login__content">
          <h2 className="login__title">Get Started With StreamVibe</h2>
          <p className="login__subtitle">Getting started is easy</p>
          <p>Complete your register</p>
        </div>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-group">
            <label htmlFor="fullName" className="login__label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="login__input"
              required
            />
          </div>
          <div className="login__form-group">
            <label htmlFor="email" className="login__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="login__input"
              required
            />
          </div>
          <div className="login__form-group">
            <label htmlFor="phoneNumber" className="login__label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="login__input"
              required
            />
          </div>
          <div className="login__form-group">
            <label htmlFor="password" className="login__label">
              Password
            </label>
            <div className="login__input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="login__input"
                required
              />
              <span
                className="login__password-toggle"
                onClick={toggleShowPassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="login__form-group">
            <label htmlFor="confirmPassword" className="login__label">
              Confirm Password
            </label>
            <div className="login__input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="login__input"
                required
              />
              <span
                className="login__password-toggle"
                onClick={toggleShowPassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="login__form-group">
            <button type="submit" className="login__button">
              Create Account
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SingUp;
