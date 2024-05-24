import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LogoSvg from "../../../assets/Logo_Streamvibe.svg";
import imgFondo from "../../../assets/SubContainer.png";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/apiService";

import "../styles.sass";

const SingIn = ({ toggleComponent }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password,
        };

        try {
            const response = await loginUser(userData);
            console.log("Usuario registrado correctamente:", response);
            navigate('/movies');
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            setError("Invalid email or password");
        }
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="login">
            <section className="login__info">
                <div className="login__header">
                    <img className="login__logo" src={LogoSvg} alt="Streamvibe Logo" />
                    <p>
                        Don’t have an account?{" "}
                        <span className="login__signup" onClick={toggleComponent}>Sing Up!</span>
                    </p>
                </div>
                <div className="login__content">
                    <h2 className="login__title">Welcome Back</h2>
                    <p className="login__subtitle">Login into your account</p>
                </div>
                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="login__form-group">
                        <label htmlFor="email" className="login__label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your Email"
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
                                placeholder="Enter your Password"
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
                        <button
                            type="button"
                            onClick={() => setRememberMe(!rememberMe)}
                            className={`login__checkbox ${rememberMe ? "checked" : ""}`}
                        >
                            <div className="login__checkbox-inner"></div>
                        </button>
                        <label htmlFor="rememberMe" className="login__checkbox-label">
                            Remember me
                        </label>
                    </div>
                    <div className="login__form-group">
                        <button type="submit" className="login__button">
                            Log in
                        </button>
                    </div>
                </form>
            </section>
            <section className="login__img">
                <img src={imgFondo} alt="" />
            </section>
        </div>
    );
};

export default SingIn;
