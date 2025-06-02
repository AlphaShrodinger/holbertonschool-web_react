import { use } from "react";
import { useState, useEffect } from "react";

const useLogin = (onLogin) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableSubmit, setEnableSubmit] = useState(false);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) => password.length >= 8;

    useEffect(() => {
        setEnableSubmit(validateEmail(email) && validatePassword(password));
    }, [email, password]);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (enableSubmit) onLogin(email, password);
    };

    return {
        email,
        password,
        enableSubmit,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit
    };
};

export default useLogin;
