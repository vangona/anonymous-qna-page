import React from "react";

const Modal = ({content, setModalState}) => {
    const onBackgroundClick = () => {
        setModalState(false)
    }
    return (
        <div onClick={onBackgroundClick} className="modal-background">
            <div className="modal-container">
                <span>{content}</span>
            </div>
        </div>
    )
}

export default Modal;