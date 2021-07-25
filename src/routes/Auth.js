import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="auth__container">
            <h3 className="auth__title">질문 페이지</h3>
            <div className="auth-form__container">
                <form className="auth-form" onSubmit={onSubmit}>
                    <div className="auth-form__component">
                        <label className="auth-form__title">E-mail</label>
                        <input className="input auth__input" name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
                    </div>
                    <div className="auth-form__component">
                        <label className="auth-form__title">Password</label>
                        <input className="input auth__input" name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                    </div>
                    <div className="auth-form__btn">
                        <input className="btn" type="submit" value={newAccount ? "Create Account" : "Log In"} />
                        <span className="error">{error}</span>
                        <span className="change-btn" onClick={toggleAccount}>
                            <FontAwesomeIcon icon={faExchangeAlt} /> { newAccount 
                            ? "Log In" 
                            : "Create Account" }
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth;