import React from "react";

function Header(props) {
    return (
        <nav className="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-start">
                <div className="navbar-item ">
                    <span className="title is-2">Clicky Game</span>
                </div>
            </div>

            <div className="navbar-item">
                <span className="subtitle is-4">Welcome to Clicky Game!</span>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <strong>Score:</strong>&nbsp;{props.score}&nbsp;&nbsp;<strong>Top Score:</strong>&nbsp;{props.topScore}
                </div>
            </div>
        </nav>
    );
}

export default Header;