import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../Lottie/2024xmas.json";
import Title from "../Img/Title.svg";
import SubTitle from "../Img/Subtitle.svg";
import Button from "../Img/btn4.svg";
import Logo from "../Img/Logo.svg";
import Menu from "../Img/menu.svg";
import Info1 from "../Img/Info1.svg";
import Item1 from "../Img/InfoP1.jpg";
import Item2 from "../Img/InfoP2.jpg";
import Item3 from "../Img/InfoP3.jpg";
import FB from "../Img/fb1.svg";
import IG from "../Img/ig1.svg";
import YT from "../Img/yt1.svg";
import Close from "../Img/close.png";

const Home = () => {
  const lottieRef = useRef(null);
  const [showAnimation1, setShowAnimation1] = useState(true);
  const [zoomIn, setZoomIn] = useState(false);
  const [zoomInIG, setZoomInIG] = useState(false);
  const [zoomInYT, setZoomInYT] = useState(false);
  const [zoomInFB, setZoomInFB] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const panelRef = useRef(null); // Ref for panel content

  const sectionRefs = {
    item1: useRef(null),
    item2: useRef(null),
    item3: useRef(null),
    item4: useRef(null),
    item5: useRef(null),
    item6: useRef(null),
    item7: useRef(null),
    item8: useRef(null),
    item9: useRef(null),
    // Add more refs as needed
  };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2.75); // Set the animation speed
    }

    const timer = setTimeout(() => setShowAnimation1(false), 4500);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setShowPanel(false); // Close the panel
      }
    };

    if (showPanel) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPanel]);

  const handleButtonClick = () => {
    setZoomIn(true);
    setTimeout(() => setZoomIn(false), 300); // Reset zoom-in class after animation

    // Get current date
    const currentDate = new Date();

    // Define target dates
    const dateNov30 = new Date("2024-11-30");
    const dateDec15 = new Date("2024-12-15");
    const dateDec20 = new Date("2024-12-20");
    const dateDec21 = new Date("2024-12-21");
    const dateDec22 = new Date("2024-12-22");
    const dateDec24 = new Date("2024-12-24");

    // Determine which item to scroll to based on date range
    if (currentDate < dateNov30) {
      // item1
      scrollToItem("item1");
    } else if (currentDate > dateNov30 && currentDate <= dateDec15) {
      // item2
      scrollToItem("item2");
    } else if (currentDate > dateDec15 && currentDate <= dateDec20) {
      // item3
      scrollToItem("item3");
    } else if (currentDate > dateDec20 && currentDate <= dateDec21) {
      //item 4
      scrollToItem("item4");
    } else if (currentDate > dateDec21 && currentDate <= dateDec22) {
      // item5
      scrollToItem("item7");
    } else if (currentDate > dateDec22 && currentDate <= dateDec24) {
      //item 9
      scrollToItem("item9");
    }
  };

  const handleMenuClick = () => {
    setShowPanel(true); // Show the panel
  };

  const handleClosePanel = () => {
    setShowPanel(false); // Hide the panel
  };

  const scrollToItem = (item) => {
    sectionRefs[item].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setShowPanel(false); // Close panel after clicking
  };

  const IGClick = () => {
    setZoomInIG(true);
    setTimeout(() => setZoomInIG(false), 300); // Reset zoom-in class after animation
    window.open("https://www.instagram.com/bannerch.media/", "_blank"); // Opens Instagram in a new tab
  };

  const FBClick = () => {
    setZoomInFB(true);
    setTimeout(() => setZoomInFB(false), 300); // Reset zoom-in class after animation
    window.open("https://zh-tw.facebook.com/TCBCH", "_blank"); // Opens Instagram in a new tab
  };

  const YTClick = () => {
    setZoomInYT(true);
    setTimeout(() => setZoomInYT(false), 300); // Reset zoom-in class after animation
    window.open("https://www.youtube.com/@bannerch", "_blank"); // Opens Instagram in a new tab
  };

  return (
    <section className="home">
      <div className="home-container">
        {/* Only render animation1 if showAnimation1 is true */}
        {showAnimation1 && (
          <img src={Title} alt="Title" className="animation1" />
        )}

        {/* Full-screen panel */}
        {showPanel && (
          <div className="full-screen-panel">
            <button className="close-button" onClick={handleClosePanel}>
              <img src={Close} />
            </button>
            <div className="panel-content" ref={panelRef}>
              {/* Add any content you want in the panel here */}
              {/* <h1>Menu Panel</h1> */}
              <ul>
                <li onClick={() => scrollToItem("item1")}>點燈場 11/30</li>
                <li onClick={() => scrollToItem("item2")}>野餐派對 12/15</li>
                <li onClick={() => scrollToItem("item3")}>
                  林凱沁講師主題講座 12/20
                </li>
                <li onClick={() => scrollToItem("item4")}>親子場 12/21</li>
                <li onClick={() => scrollToItem("item5")}>
                  聖誕主日青年 12/21
                </li>
                <li onClick={() => scrollToItem("item6")}>青年活動場 12/21</li>
                <li onClick={() => scrollToItem("item7")}>
                  聖誕主日 12/21－12/22
                </li>
                <li onClick={() => scrollToItem("item8")}>台中好聖誕 12/22</li>
                <li onClick={() => scrollToItem("item9")}>平安音樂場 12/24</li>
                {/* Add more items as needed */}
              </ul>
            </div>
          </div>
        )}

        <div className="menu-bar">
          <img src={Logo} alt="Logo" className="menu-logo" />
          <img
            src={Menu}
            alt="Menu"
            className="menu-icon"
            onClick={handleMenuClick} // Show panel on menu click
          />
        </div>

        <div className="home-animation-wrapper">
          <div className="lottie-crop-wrapper">
            <Lottie
              animationData={animationData}
              loop={true}
              lottieRef={lottieRef}
              style={{
                position: "relative",
                overflow: "hidden",
                height: "calc(100% - 30px)",
                marginTop: "-30px",
              }}
            />
          </div>
          <img
            src={SubTitle}
            alt="Subtitle"
            className="home-overlay-subtitle"
          />
          <img src={Title} alt="Title" className="home-overlay-image" />
          <img
            src={Button}
            alt="Button"
            className={`home-overlay-button ${zoomIn ? "zoom-in" : ""}`}
            onClick={handleButtonClick}
          />
        </div>

        <div className="home-info1">
          <img src={Info1} alt="Info1" className="info1" />
        </div>

        <div className="home-info2">
          <div
            className="home-info2-box"
            id="info2-item1"
            ref={sectionRefs.item1}
          >
            <h1 className="home-info2-box-h1">點燈場</h1>
            <h2 className="home-info2-box-h2">聖誕季的溫暖序章</h2>
            <h3 className="home-info2-box-h3">
              1F圓環 / YouTube直播 <br /> 11/30(六)19:30－20:30
            </h3>
            <h4 className="home-info2-box-h4">
              點亮聖誕樹、進入幸福的好滋味！聖誕新曲大公開，
              帶來全新敬拜音樂，還有古典弦樂、戲劇與舞蹈，
              全方位的視聽盛宴，迎接屬天的平安與喜樂！(身障人士保留席於3F空橋處)
            </h4>
          </div>

          <div
            className="home-info2-box"
            id="info2-item2"
            ref={sectionRefs.item2}
          >
            <h1 className="home-info2-box-h1">野餐派對</h1>
            <h2 className="home-info2-box-h2">
              最chill的戶外音樂野餐，野野YA！
            </h2>
            <h3 className="home-info2-box-h3">
              1F圓環
              <br /> 場次一 <br />
              12/15(日)15:00－16:30
              <br />
              場次二 <br />
              12/15(日)15:00－16:30
            </h3>
            <h4 className="home-info2-box-h4">
              音樂不設限，美食無極限！豐富市集和趣味遊戲，讓你吃得盡興、玩得開心、
              聽得過癮！(野餐以小組為單位參與，請洽小組長或你的邀約人)
            </h4>
          </div>

          <div
            className="home-info2-box"
            id="info2-item3"
            ref={sectionRefs.item3}
          >
            <h1
              className="home-info2-box-h1"
              style={{ lineHeight: "4rem", marginBottom: "1rem" }}
            >
              解套人生
              <br />
              寬恕的力量與愛的釋放
            </h1>

            <h2 className="home-info2-box-h2">林凱沁講師主題講座</h2>
            <h3 className="home-info2-box-h3">
              2F主堂
              <br />
              12/20(五)19:30－21:30
            </h3>
            <h4 className="home-info2-box-h4">
              不再跟自己過不去，活出輕鬆自由的生活，解開人生的心結，
              找到真正的平安與快樂！林凱沁講師擁有三十年心理諮商與輔導的經驗，幫助跨世代以新的視角認識自己。
            </h4>
          </div>

          <div
            className="home-info2-box"
            id="info2-item4"
            ref={sectionRefs.item4}
          >
            <h1 className="home-info2-box-h1">親子場</h1>
            <h2 className="home-info2-box-h2">森林裡的幸福滋味</h2>
            <h3 className="home-info2-box-h3">
              2F主堂
              <br />
              12/21(六)10:30-12:00
            </h3>
            <h4 className="home-info2-box-h4">
              戲劇、唱歌、跳舞，跟著動物角色進入奇幻森林，享受滿滿的歡笑。
              還有驚喜摸彩，看看好禮會不會悄悄落到你手裡。(開放所有年齡層的大小朋友一起參與)
            </h4>
          </div>

          <div
            className="home-info2-box"
            id="info2-item5"
            ref={sectionRefs.item5}
          >
            <h1 className="home-info2-box-h1">聖誕主日青年</h1>
            <h2 className="home-info2-box-h2">創意音樂劇場</h2>
            <h3 className="home-info2-box-h3">
              2F主堂 / YouTube直播
              <br />
              12/21(六)18:00
            </h3>
            <h4 className="home-info2-box-h4">
              國中、高中生的聖誕戲劇專場！一場關於權力與愛的精彩演出，
              結合歌劇來演繹歐洲中世紀公爵家族的故事。
            </h4>
          </div>

          <div
            className="home-info2-box"
            id="info2-item6"
            ref={sectionRefs.item6}
          >
            <h1 className="home-info2-box-h1">青年活動場</h1>
            <h2 className="home-info2-box-h2">耶穌家裡的聖誕晚宴</h2>
            <h3 className="home-info2-box-h3">
              2F主堂
              <br />
              12/21(六)20:00－21:30
            </h3>
            <h4 className="home-info2-box-h4">
              國中至大學生的聖誕專場！透過鋼琴、聲樂、弦樂演出，
              彷彿置身耶穌家的晚宴，享受在美食和音樂中。(參加者需穿著正式服裝：西裝／小禮服出席)
            </h4>
          </div>

          <div
            className="home-info2-box"
            id="info2-item7"
            ref={sectionRefs.item7}
          >
            <h1 className="home-info2-box-h1">聖誕主日</h1>
            <h2 className="home-info2-box-h2">天父的手寫祝福</h2>
            <h3 className="home-info2-box-h3">
              2F主堂 / YouTube直播
              <br />
              12/21(六)16:00
              <br />
              12/22(日)09:00, 11:00, 13:00
            </h3>
            <h4 className="home-info2-box-h4">
              收下來自天父的手寫信，在敬拜中感受聖誕的平安與喜樂，
              結束前還有限量茶飲和甜點等你品嚐！
            </h4>
          </div>

          <div
            className="home-info2-box"
            id="info2-item8"
            ref={sectionRefs.item8}
          >
            <h1 className="home-info2-box-h1">台中好聖誕</h1>
            <h2 className="home-info2-box-h2">
              草悟派對－
              <br />
              藝人與音樂的狂歡夜
            </h2>
            <h3 className="home-info2-box-h3">
              草悟道市民廣場
              <br />
              12/22(日)15:00－21:00
            </h3>
            <h4 className="home-info2-box-h4">
              感受全台中最具聖誕氛圍的草地饗宴，吃喝玩樂、市集買不完！還有音樂不間斷，
              從聖誕爵士、打擊樂，到藝人演出與live band接力登場！
            </h4>
          </div>

          <div
            className="home-info2-box"
            id="info2-item9"
            ref={sectionRefs.item9}
          >
            <h1 className="home-info2-box-h1">平安音樂場</h1>
            <h2 className="home-info2-box-h2">平安夜裡的聖誕祝福</h2>
            <h3 className="home-info2-box-h3">
              2F主堂 / YouTube直播
              <br />
              12/24(二)19:30－21:30
            </h3>
            <h4 className="home-info2-box-h4">
              最熱門的旌旗經典聖誕歌曲大串燒！在放克搖滾(Funk
              Rock)的熱鬧節奏中， 搭配現代聖誕曲風，享受活力充沛的平安夜！
            </h4>
          </div>
        </div>

        {/* <div className="home-info3">
                    <div className="home-info3-box">
                        <div className="home-info3-box-title">周邊活動</div>

                        <div className="home-info3-box-group">
                            <div className="home-info3-box-group-itembox">
                                <img src={Item1} alt="item1" className="home-info3-box-group-itembox-item1" />
                                <div className="home-info3-box-group-itembox-item2">市集</div>
                            </div>

                            <div className="home-info3-box-group-itembox">
                                <img src={Item2} alt="item2" className="home-info3-box-group-itembox-item1" />
                                <div className="home-info3-box-group-itembox-item2">空間互動</div>
                            </div>

                            <div className="home-info3-box-group-itembox">
                                <img src={Item3} alt="item3" className="home-info3-box-group-itembox-item1" />
                                <div className="home-info3-box-group-itembox-item2">拍貼機使用</div>
                            </div>
                        </div>

                    </div>
                </div> */}

        {/* <div className="home-infoIMG">
          <img src={Item1} alt="Item1" className="home-infoIMG-item" />
        </div> */}

        <div className="home-infoTable">
          <div className="home-infoTable-box" id="infoTable-item1">
            <h1 className="home-infoTable-box-h1">聖誕市集</h1>
            <h2 className="home-infoTable-box-h2">漫遊在手作與美食的饗宴</h2>
            <h3 className="home-infoTable-box-h3">11/30 (六) 15:00-21:30</h3>
            <h3 className="home-infoTable-box-h3">12/01 (日) 08:30-15:30</h3>
            <h3 className="home-infoTable-box-h3">12/07 (六) 15:00-21:30</h3>
            <h3 className="home-infoTable-box-h3">12/08 (日) 08:30-15:30</h3>
            <h3 className="home-infoTable-box-h3">12/14 (六) 15:00-21:30</h3>
            <h3 className="home-infoTable-box-h3">12/15 (日) 08:30-18:30</h3>
            <h3 className="home-infoTable-box-h3">12/21 (六) 08:30-21:30</h3>
            <h3 className="home-infoTable-box-h3">12/22 (日) 08:30-15:30</h3>
            <h3 className="home-infoTable-box-h3">12/24 (二) 17:00-21:30</h3>
            <h3 className="home-infoTable-box-h3">1F 中庭</h3>
            <h4 className="home-infoTable-box-h4">
              溫馨市集感受滿滿「家」的氛圍！ 匯集手工藝品、聖誕禮物與美食
              小吃，闔家歡樂讓大小朋友都好 買又好逛！
            </h4>
          </div>
        </div>

        <div className="home-infoIMG">
          <img src={Item2} alt="Item2" className="home-infoIMG-item" />
        </div>

        <div className="home-info4">
          {/* <div className="home-info4-title">社群媒體</div> */}
          <div className="home-info4-group">
            <img
              src={IG}
              alt="item1"
              className={`home-info4-group-item ${zoomInIG ? "zoom-in" : ""}`}
              onClick={IGClick}
            />
            <img
              src={YT}
              alt="item2"
              className={`home-info4-group-item ${zoomInYT ? "zoom-in" : ""}`}
              style={{ height: "5rem" }}
              onClick={YTClick}
            />
            <img
              src={FB}
              alt="item3"
              className={`home-info4-group-item ${zoomInFB ? "zoom-in" : ""}`}
              onClick={FBClick}
            />
          </div>

          <div className="home-info4-subtitle">
            台中市南屯區文心南五路三段160號
          </div>
          <div className="home-info4-subtitle">04-22584446</div>
        </div>

        <div className="home-infoIMG">
          <img src={Item3} alt="Item3" className="home-infoIMG-item" />
        </div>
      </div>
    </section>
  );
};

export default Home;
