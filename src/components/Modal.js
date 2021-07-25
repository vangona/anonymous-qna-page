import React from "react";

const Modal = ({content}) => {
    return (
        <div className="modal-background">
            <div className="modal-container">
                <span>{content}</span>
            </div>
        </div>
    )
}

export default Modal;