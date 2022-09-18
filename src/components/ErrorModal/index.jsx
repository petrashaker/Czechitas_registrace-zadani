import React from "react";
import * as ReactDOM from 'react-dom';
import './style.css';

const Backdrop = () => {
    return <div className="backdrop" />
}

const ModalOverlay = ({ errorMessage, onClick }) => {
    return (
        <div className="modal">
            <header className="header">Error</header>
            <p className="content">{errorMessage}</p>
            <footer className="actions">
                <button onClick={onClick}>OK</button>
            </footer>
        </div>
    )
}

const ErrorModal = ({errorMessage, onClick }) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={onClick} />, document.getElementById('backdrop-root'))}    
            {ReactDOM.createPortal(<ModalOverlay errorMessage={errorMessage} onClick={onClick} />, document.getElementById('modal-root'))}    
        </>
        
    )
}

export default ErrorModal;