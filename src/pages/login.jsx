import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";

import reactLogo from "../assets/react.svg";
import asgardeoLogo from "../assets/asgardeo.svg";
import viteLogo from "../assets/vite.svg";

import { SignInBtn } from "../components/SignInBtn";
import { SignUpBtn } from "../components/SignUpBtn";

export const LoginPage = () => { 

    const { state } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to the home page if the user is already authenticated.
        if (state?.isAuthenticated) {
            navigate("/home", { replace: true });
        }
    }, [ state ]);

    return (
        <>
            <div>
                <a href='https://wso2.com/asgardeo' target='_blank'>
                    <img src={asgardeoLogo} className='logo asgardeo' alt='Asgardeo logo' />
                </a>
                <a href='https://react.dev' target='_blank'>
                    <img src={reactLogo} className='logo react' alt='React logo' />
                </a>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
            </div>
            <h1>Asgardeo + Vite + React</h1>
            <p className='read-the-docs'>Click on the logos to learn more</p>
            <div className="button-container">
                <SignInBtn />
                <SignUpBtn />
            </div>
        </>
    );
}