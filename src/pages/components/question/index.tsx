import { useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';import 'swiper/css';
import 'swiper/css/navigation';

import styles from "@/styles/question/theme.module.scss";

export default function Home(){
  // const url = axios.get('https://api.server.test/v1/openapi.yaml')

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const [isExplanationSctive, setExplanationSctive] = useState(false);



  const handleClick1 = () => {
    setIsActive1(!isActive1);
  };

  const handleClick2 = () => {
    setIsActive2(!isActive2);
  };

  const handleClick3 = () => {
    setIsActive3(!isActive3);
  };

  const handleClick4 = () => {
    setIsActive4(!isActive4);
  };

  const ExplanationClick = () => {
    setExplanationSctive(!isExplanationSctive);
  };

  return(
    <>
      <div className={styles.bg}>
        <header className={styles.header}>
          <a href="/" className={styles.backBtn}>
            <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.79544 10.0058L10.2874 1.27877C10.3574 1.20844 10.4126 1.12494 10.4501 1.03311C10.4875 0.941279 10.5063 0.842935 10.5055 0.74377C10.5047 0.644604 10.4842 0.546587 10.4453 0.45539C10.4063 0.364193 10.3497 0.281627 10.2786 0.212469C10.2075 0.143312 10.1234 0.0889362 10.0312 0.0524894C9.93897 0.0160426 9.84042 -0.00175181 9.74127 0.000135901C9.64212 0.00202361 9.54433 0.023556 9.45356 0.0634869C9.36278 0.103418 9.28083 0.160954 9.21244 0.232767L0.21244 9.48277C0.0762178 9.62278 0 9.81042 0 10.0058C0 10.2011 0.0762178 10.3888 0.21244 10.5288L9.21244 19.7788C9.28083 19.8506 9.36278 19.9081 9.45356 19.948C9.54433 19.988 9.64212 20.0095 9.74127 20.0114C9.84042 20.0133 9.93897 19.9955 10.0312 19.959C10.1234 19.9226 10.2075 19.8682 10.2786 19.7991C10.3497 19.7299 10.4063 19.6473 10.4453 19.5561C10.4842 19.4649 10.5047 19.3669 10.5055 19.2678C10.5063 19.1686 10.4875 19.0703 10.4501 18.9784C10.4126 18.8866 10.3574 18.8031 10.2874 18.7328L1.79544 10.0058Z" fill="#0C2E2C"/>
            </svg>
          </a>
          <section>
            <h2>友人</h2>
            <p>CHAPTER</p>
          </section>
        </header>
        <main>
          <div className={styles.mainWrap}>{/* 問題文 */}
            <div className={styles.ProblemStatementWrap}>
              <div className={styles.levelBox}>
                <p className={styles.level}>level 1</p>
              </div>
              <p className={`${styles.ProblemStatement} ${isExplanationSctive ? styles.ProblemStatement2 : ''}`}>朝の通学路で、同級生が前を歩いているのに気づきました。しかし相手は携帯電話を操作しながら歩いているため、あなたに気づいていないようです。この場面で適切なコミュニケーションをとるにはどうすればよいでしょうか?</p>
            </div>
            <div className={styles.choiceWrap}>{/* 選択 */}
              <ul>
                <li className={styles.clickBox}>{/*ここを押したときに*/}
                  <div className={styles.choiceFlex}>
                    <a href="question2-1">相手の視界に入る位置までゆっくり近づき、適度な大きさの声で名前を呼ぶ。</a>
                  </div>
                </li>
                <li className={styles.clickBox}>{/*ここを押したときに*/}
                  <div className={styles.choiceFlex}>
                    <a href="question2">一方的に話し続け、相手に話す機会を与えない。</a>
                  </div>
                </li>
                <li className={styles.clickBox}>{/*ここを押したときに*/}
                  <div className={styles.choiceFlex}>
                    <a href="#">プライベートな内容を質問する。</a>
                  </div>
                </li>
                <li className={styles.clickBox}>{/*ここを押したときに*/}
                  <div className={styles.choiceFlex}>
                    <a href="#">携帯を無作法に取り上げようとする。</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

