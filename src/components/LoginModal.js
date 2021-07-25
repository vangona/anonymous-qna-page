import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../fBase";

const LoginModal = ({setLoginModal}) => {
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
   
    const onClickClose = () => {
        setLoginModal(false)
    }
    
    return (
        <div className="login-modal__background">
            <div className="login-modal__container">
                <h3 className="login-modal__title">{ newAccount ? "회원가입" : "로그인"}</h3>
                    <form className="auth-form" onSubmit={onSubmit}>
                        <div className="auth-form__component">
                            <label className="modal-auth__title">E-mail</label>
                            <input className="input auth__input" name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
                        </div>
                        <div className="auth-form__component">
                            <label className="modal-auth__title">Password</label>
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
                <span onClick={onClickClose} className="modal__close-btn">X</span>
            </div>
        </div>
    )
}

export default LoginModal;