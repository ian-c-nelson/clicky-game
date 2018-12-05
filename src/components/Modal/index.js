import React from "react";

function Modal(props) {
    let modalclassName = "modal" + (props.show ? " is-active" : "");

    return (
        <div className={modalclassName}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{props.title}</p>
                    <button className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <p>{props.msg}</p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button" onClick={props.handleModalOkayClick}>OK</button>
                </footer>
            </div>
        </div>
    );
}

export default Modal;