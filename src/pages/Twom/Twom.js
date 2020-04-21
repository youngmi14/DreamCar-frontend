import React, { Component } from "react";
import cari1 from "../../images/1.jpeg";
import cari2 from "../../images/2.jpeg";
import cari3 from "../../images/3.jpeg";
import cari4 from "../../images/4.jpeg";
import "./Twom.scss";

class Twom extends Component {

    state = {
        dotDisabled: true,
        twomWrapperClassName: "TwomWrapper",
        btnClicked: false,
    }

    handleOnclick = (e) => {

        //현재 className이 맞으면
        if (e.target.className === "noclickDot") {
            e.target.disabled = false;
            this.setState({
                btnClicked: !this.state.btnClicked,
                twomWrapperClassName: "movedLeftWrapper"
            });
        }

        if (e.target.className === "clickDot") {
            e.target.disabled = false;
            this.setState({
                btnClicked: !this.state.btnClicked,
                twomWrapperClassName: "TwomWrapper"
            });
        }

    }

    render() {
        return (
            <div className="Twom">
                <h3 className="TwomTitle">The world of Maserati</h3>
                <div className={this.state.twomWrapperClassName}>
                    <div className="ImgCont">
                        <a href="" target="_self">
                            <img className="Ermengildoimage" src={cari1} size="100vw" />
                        </a>
                        <div className="textTitle">
                            <h2 className="imageText">Ermenegildo Zegna</h2>
                        </div>
                    </div>

                    <div className="ImgCont">
                        <a href="" target="_self">
                            <img className="Ermengildoimage" src={cari2} />
                        </a>
                        <div className="textTitle">
                            <h2 className="imageText">Bulgari</h2>
                        </div>
                    </div>
                    <div className="ImgCont">
                        <a href="" target="_self">
                            <img className="Ermengildoimage" src={cari3} />
                        </a>
                        <div className="textTitle">
                            <h2 className="imageText">Maserati Store</h2>
                        </div>
                    </div>
                    <div className="ImgCont">
                        <a className="test" href="" target="_self">
                            <img className="Ermengildoimage" src={cari4} />
                        </a>
                        <div className="textTitle">
                            <h2 className="imageText">Classic Cars</h2>
                        </div>
                    </div>
                </div>
                <div className="dotdot" disabled={this.state.dotDisabled}>
                    <div
                        className="clickDot"
                        role="tab"
                        aria-selected="true"
                        aria-selected="true"
                        style={{ background: this.state.btnClicked === true ? "none" : "#0c2340" }}
                        onClick={this.handleOnclick}
                    ></div>
                    <div
                        className="noclickDot"
                        role="tab"
                        aria-selected="true"
                        aria-selected="true"
                        style={{ background: this.state.btnClicked === true ? "#0c2340" : "none" }}
                        onClick={this.handleOnclick}
                    ></div>
                </div>
            </div>
        );
    }
}

export default Twom;