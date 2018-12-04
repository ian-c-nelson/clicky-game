import React from "react";
import Header from "../Header";
import GameCard from "../GameCard";
import Footer from "../Footer";
import _ from "lodash";
import startData from "../../data.json";

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            data: _.shuffle(startData),
            score: 0,
            topScore: 0
        }
    }

    handleImageClick = (id) => {
        let { score, topScore, data } = this.state;
        const index = data.findIndex(item => item.id === id);

        console.log(id, index);

        if (!data[index].clicked) {
            data[index].clicked = true;
            score++;
            if (score > topScore) {
                topScore = score;
            }
        } else {
            score = 0;
            data = startData;
        }

        this.setState({ score, topScore, data: _.shuffle(data) });
    }

    render() {
        const { data, score, topScore } = this.state;
        return (
            <div>
                <Header score={score} topScore={topScore} />
                <section className="section">
                    <div className="container">
                        <div className="columns is-multiline">
                            {data.map(item => <GameCard key={item.id} {...item} handleImageClick={this.handleImageClick} />)}
                        </div>
                    </div>
                </section>
                <div class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <p>Nice try! Now try and beat your top score!</p>
                    </div>
                    <button class="modal-close is-large" aria-label="close"></button>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Game;