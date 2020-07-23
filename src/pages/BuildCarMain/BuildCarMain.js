import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CarSection from "./CarSection";
import CarSummary from "./CarSummary";
import Nav from "../../components/Nav/Nav";
import Inputbfore from "../Siseon/Inputbefore";
import "./BuildCarMain.scss";
import MaterialIcon, { colorPalette } from "material-icons-react";

class BuildCarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hrefLink: "#",
      tabId: 0,
      tabIdforClick: 0,
      navStylerStyle: "",
      isNotOpen: true,
      nameVal: "",
      emailVal: "",
      btnSelection: {
        btnSeat: 0,
        btnDashb: 0,
        btnCarpet: 0,
        btnSteering: 0,
      },
      colorId: {
        seatId: 0,
        dashBId: 0,
        carpetId: 0,
        steeringId: 0,
      },
      thumbId: 0,
    };
    this.carCont = React.createRef();
    this.href = React.createRef();
  }

  componentDidMount() {
    window.addEventListener(
      "scroll",
      (e) => {
        this.navStyler(e);
      },
      true
    );
  }

  identifyThumbCarImg = (thumbVal) => {
    this.setState({
      thumbId: (thumbVal += 1),
    });
  };

  componentWillUnmount() {
    window.removeEventListener(
      "scroll",
      this.carCont.current.carCont.scrollToSection
    );
  }

  modalContShowing = (e) => {
    e.preventDefault();
    this.setState({
      isNotOpen: false,
    });
  };

  modalClose = () => {
    this.setState({
      isNotOpen: true,
    });
  };

  formEventHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleBtnStyler = (e, id, idx, colorNum) => {
    e.preventDefault();

    const { btnSelection, colorId } = this.state;

    switch (id) {
      case 0:
        this.setState({
          btnSelection: {
            btnSeat: idx,
            btnDashb: btnSelection.btnDashb,
            btnCarpet: btnSelection.btnCarpet,
            btnSteering: btnSelection.btnSteering,
          },
        });
        this.setState({
          colorId: {
            seatId: colorNum,
            dashBId: colorId.dashBId,
            carpetId: colorId.carpetId,
            steeringId: colorId.steeringId,
          },
        });
        break;
      case 1:
        this.setState({
          btnSelection: {
            btnSeat: btnSelection.btnSeat,
            btnDashb: idx,
            btnCarpet: btnSelection.btnCarpet,
            btnSteering: btnSelection.btnSteering,
          },
        });
        this.setState({
          colorId: {
            seatId: colorId.seatId,
            dashBId: colorNum,
            carpetId: colorId.carpetId,
            steeringId: colorId.steeringId,
          },
        });
        break;
      case 2:
        this.setState({
          btnSelection: {
            btnSeat: btnSelection.btnSeat,
            btnDashb: btnSelection.btnDashb,
            btnCarpet: idx,
            btnSteering: btnSelection.btnSteering,
          },
        });
        this.setState({
          colorId: {
            seatId: colorId.seatId,
            dashBId: colorId.dashBId,
            carpetId: colorNum,
            steeringId: colorId.steeringId,
          },
        });
        break;
      case 3:
        this.setState({
          btnSelection: {
            btnSeat: btnSelection.btnSeat,
            btnDashb: btnSelection.btnDashb,
            btnCarpet: btnSelection.btnCarpet,
            btnSteering: idx,
          },
        });
        this.setState({
          colorId: {
            seatId: colorId.seatId,
            dashBId: colorId.dashBId,
            carpetId: colorId.dashBId,
            steeringId: colorNum,
          },
        });
        break;
      default:
        break;
    }
  };

  formSubmitHandler = () => {
    const qs = (data) =>
      Object.entries(data)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

    const { nameVal, emailVal, colorId } = this.state;

    const result = qs({
      name: nameVal,
      email: emailVal,
      seatNum: colorId.seatId,
      dashNum: colorId.dashBId,
      carpetNum: colorId.carpetId,
      steeringNum: colorId.steeringId,
    });

    const url = `/thankyou?${result}`;
    this.props.history.push(url);
  };

  navStyler = (e) => {
    e.preventDefault();
    const lastScrollY = window.scrollY; //scrollY가 아니라 offsetTop으로 바꿔야할듯..?
    if (lastScrollY >= 0 && lastScrollY < 840) {
      this.setState({
        tabId: 1,
      });
    } else if (lastScrollY >= 840 && lastScrollY < 1660) {
      this.setState({
        tabId: 2,
      });
    } else if (lastScrollY >= 1660 && lastScrollY < 2240) {
      this.setState({
        tabId: 3,
      });
    } else if (lastScrollY >= 2240 && lastScrollY < 2360) {
      this.setState({
        tabId: 4,
      });
    } else if (lastScrollY >= 2360 && lastScrollY < 2600) {
      this.setState({
        tabId: 5,
      });
    } else if (lastScrollY >= 2600) {
      this.setState({
        tabId: 6,
      });
    } else {
      return;
    }
  };

  navMoveHandler = (e, id) => {
    e.preventDefault();
    this.props.history.push("./buildcar");

    if (id === 0) {
      this.props.history.push("./choosecar");
    }

    switch (id) {
      case 1:
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        break;
      case 2:
        window.scroll({
          top: 840,
          left: 0,
          behavior: "smooth",
        });
        break;
      case 3:
        window.scroll({
          top: 1660,
          left: 0,
          behavior: "smooth",
        });
        break;
      case 4:
        window.scroll({
          top: 2240,
          left: 0,
          behavior: "smooth",
        });
        break;
      case 5:
        window.scroll({
          top: 2240,
          left: 0,
          behavior: "smooth",
        });
        break;

      case 6:
        this.props.history.push("/sum");
        break;

      default:
        break;
    }
  };

  // mouseLeaveHandler = (e, msg) => {
  //   e.preventDefault();

  //   this.setState({
  //     tabId: msg,
  //   });
  // };

  render() {
    const tabNameList = [
      "Lines",
      "외관",
      "실내",
      "패키지",
      "옵션",
      "액세서리",
      "요약",
    ];
    console.log("마지막 조합 확인  ", this.state.colorId);
    return (
      <div className="BuildCarMain">
        <Nav />

        <section className="BuildCarContent">
          <nav className="topNav">
            <ul className="tabList">
              {tabNameList.map((item, idx) => {
                return (
                  <li name={item} onMouseOut={this.mouseLeaveHandler}>
                    <a
                      //href={this.state.hrefLink}
                      className={this.state.tabId === idx ? "clicked" : ""}
                      onScroll={(e) => this.navStyler(e)}
                      onClick={(e) => this.navMoveHandler(e, idx)}
                    >
                      {item}
                    </a>
                    <div
                      className={
                        this.state.tabId === idx ? "divActivatedLeft" : ""
                      }
                    ></div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <section className="mainView">
            <div
              className="modalCont"
              style={
                this.state.isNotOpen
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
            >
              <MaterialIcon icon="close" size={55} onClick={this.modalClose} />
              <div className="modalOuter">
                <div className="modalInner">
                  <div className="modalHeader">
                    <h2>내 차고- 저장/ 로딩</h2>
                  </div>
                </div>
                <div className="dialogueBody">
                  <div className="headerBody">
                    <ul>
                      <li>구성 저장하기</li>
                      <li>기존 구성 열기</li>
                    </ul>
                  </div>
                  <div className="detailsBody">
                    <form>
                      <div className="question">개인 상세 정보</div>
                      <div>
                        <Inputbfore
                          star="*"
                          valueV="이름"
                          locationPath={this.props.location.pathname}
                          onChange={this.formEventHandler}
                          name="nameVal"
                        />
                      </div>
                      <div>
                        <Inputbfore
                          star="*"
                          valueV="이메일"
                          locationPath={this.props.location.pathname}
                          onChange={this.formEventHandler}
                          name="emailVal"
                        />
                      </div>

                      <div className="full">
                        <div className="asy">
                          <div className="question">개인정보보호 양식</div>
                          <div className="privacy">
                            <p className="priCommon">
                              본인은 마세라티의{" "}
                              <span className="tos">개인정보 양식</span> 읽고
                              이해하였으며,
                            </p>
                          </div>
                          <div className="rowPri">
                            <div className="requireNot"></div>
                            <div className="priChk">
                              <div className="require">*</div>
                              <input type="checkbox" class="checkBoxs"></input>
                              <label for="checkBox" className="checkbowRight">
                                개인정보 취급방침의 제3항에서 정한 마케팅
                                목적으로 본인의 개인정보를 처리하는 데
                                동의합니다. 연락 채널{" "}
                                <span className="channelT">
                                  여기를 클릭하십시오
                                </span>{" "}
                                에 대한 승인을 부분적으로 선택하려는 경우,
                              </label>
                            </div>

                            <div className="priChk">
                              <div className="require">*</div>
                              <input type="checkbox" class="checkBoxs"></input>
                              <label for="checkBox" className="checkbowRight">
                                개인정보 취급방침의 제3항에서 정한 프로파일링
                                목적으로 본인의 개인정보를 처리하는 데
                                동의합니다.
                              </label>
                            </div>
                            <input
                              class="siBtn"
                              type="submit"
                              value="시승신청"
                              onClick={this.formSubmitHandler}
                            ></input>
                            <div class="requiretext">* 필수입력사항</div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
            <CarSection
              scrollToSection={this.scrollToSection}
              ref={this.carCont}
              tabId={this.state.tabId}
              intOnclick={this.handleBtnStyler}
              btnSelection={this.state.btnSelection}
              identifyThumbCarImg={this.identifyThumbCarImg}
            />
            <CarSummary
              identifier={this.state.thumbId}
              onClickHandler={(e) => {
                this.modalContShowing(e);
              }}
            />
          </section>
        </section>
      </div>
    );
  }
}

export default withRouter(BuildCarMain);
