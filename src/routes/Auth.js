import { authService } from "../fBase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("")
    const history = useHistory();

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name === "email") {
            setEmail(value)
        } else if (name === "password"){
            setPassword(value)
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            if (newAccount) {
                await authService.createUserWithEmailAndPassword(
                    email, 
                    password
                );
            } else {
                await authService.signInWithEmailAndPassword(
                    email, 
                    password
                );
            }
        } catch (error) {
            if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
                setError("입력하신 아이디가 없습니다.")
            } else {
                setError(error.message)
            }
        }
        history.push("/")
    }

    const toggleAccount = () => setNewAccount((prev) => !prev)
    return (
        <>
            <div className="auth-form__container">
                <form className="auth-form" onSubmit={onSubmit}>
                    <input className="input auth__input" name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
                    <input className="input auth__input" name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                    <input className="btn" type="submit" value={newAccount ? "Create Account" : "Log In"} />
                    <span className="error">{error}</span>
                    <span className="change-btn" onClick={toggleAccount}>
                        {newAccount? "Log In" : "Create Account"}
                    </span>
                </form>
            </div>
        </>
    )
}

export default Auth;