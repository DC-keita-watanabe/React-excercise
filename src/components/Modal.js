import React from "react";

const Modal = ({onClose, isOpen, children}) => {

    if(!isOpen){
        return;
    }
    
    return(
        <div className="modal-overlay">
            <div className="modal">
            <button className="modal-close" onClick={onClose}>
                &times;
            </button>
            {children}
            </div>
        </div>
    )
}

export default Modal