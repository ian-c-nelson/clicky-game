import React from "react";

function GameCard(props) {
    return (
        <div className="column is-3">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={props.image} alt={props.alt} onClick={() => {
                            console.log(props);
                            props.handleImageClick(props.id);
                        }} />
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default GameCard;