import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SingUp from "../../components/Login/SingUp";
import SingIn from "../../components/Login/SingIn";

import "./styles.sass";


const AuthSwitcher = () => {
    const [showSignUp, setShowSignUp] = useState(false);
    

    const toggleComponent = () => {
        setShowSignUp((prevShowSignUp) => !prevShowSignUp);
    };

    return (
        <div className="auth-switcher">
            <TransitionGroup component={null}>
                <CSSTransition
                    key={showSignUp ? "signup" : "signin"}
                    timeout={500}
                    classNames={showSignUp ? "slide-left" : "slide-right"}
                >
                    <div>
                        {showSignUp ? (
                            <SingUp toggleComponent={toggleComponent} />
                        ) : (
                            <SingIn toggleComponent={toggleComponent} />
                        )}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default AuthSwitcher;

