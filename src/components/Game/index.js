import React from "react";
import Header from "../Header";
import GameCard from "../GameCard";
import Footer from "../Footer";
import Modal from "../Modal";
import _ from "lodash";
import startData from "../../data.json";

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            data: this.getFreshData(), 
            score: 0,
            topScore: 0,
            modalState: {
                show: false,
                title: "Nice try!",
                msg: "You clicked that one before! Start again and try to beat your high score!",
            }
        }
    }

    getFreshData = () => {
        let data = startData.map(item => {
            item.clicked = false;
            return item;
        });

       return _.shuffle(data);
    }

    handleImageClick = (id) => {
        let { score, topScore, data, modalState } = this.state;
        const index = data.findIndex(item => item.id === id);

        if (!data[index].clicked) {
            modalState.show = false;
            data[index].clicked = true;
            score++;
            if (score > topScore) {
                topScore = score;
            }
        } else {
            score = 0;
            modalState.show = true;
        }


        this.setState({ score, topScore, data: _.shuffle(data) });
    }

    handleModalOkayClick = () => {
        let { modalState, data } = this.state;
        modalState.show = false;
        data = this.getFreshData();
        this.setState({ modalState, data });
    }

    render() {
        const { data, score, topScore, modalState } = this.state;

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
                <Modal {...modalState} handleModalOkayClick={this.handleModalOkayClick} />
                <Footer />
            </div>
        )
    }
}

export default Game;