import { useState , useEffect} from 'react';
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';import 'swiper/css';
import 'swiper/css/navigation';

import styles from "@/styles/question2/theme.module.scss";

export default function Home(){
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

  const [isClassAdded, setIsClassAdded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClassAdded(true);
    }, 3000); // 3秒後にクラスを追加

    return () => clearTimeout(timer);
  }, []);

  const handleChoiceWrapClick = () => {
    setIsClassAdded(false);
    const timer = setTimeout(() => {
      setIsClassAdded(true);
    }, 10000); // 3秒後にクラスを追加

    return () => clearTimeout(timer);
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
              <div className={`${styles.ExplanationWrap} ${isExplanationSctive ? styles.ExplanationWrapSVG : ''}`} onClick={ExplanationClick}>
                <p className={styles.ExplanationBtn}>解説を見る</p>
                <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.76867 5.1706C8.35712 5.56697 8.35712 6.43303 7.76867 6.8294L1.55866 11.0123C0.894436 11.4597 1.09658e-06 10.9838 1.08703e-06 10.1829L9.87268e-07 1.81709C9.77718e-07 1.01624 0.894435 0.540291 1.55866 0.987698L7.76867 5.1706Z" fill="#76B3B3"/>
                </svg>
              </div>
              {isExplanationSctive && (
                  <div>{/*divの中が消える*/}
                    <p className={styles.ExplanationBtn}>この場合、相手が携帯電話に気を取られ、周囲に注意が行き届いていない状況です。そのため、安全面に配慮しつつ、適切な方法で声をかける必要があります。無視して通り過ぎるのはNG。一方で強引すぎる呼びかけは控えめにしましょう。</p>
                  </div>
              )}
            </div>
            <div className={styles.choiceWrap} onClick={handleChoiceWrapClick}>{/* 選択 */}
              <p className={styles.ExplanationGuide}>それぞれの解答をタップして解説を見てみよう！</p>
              <ul>
                <li className={`${styles.clickBox} ${isActive1 ? styles.clickBox2 : ''}`} onClick={handleClick1}>{/*ここを押したときに*/}
                  <div className={styles.choiceFlex}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="7.5" stroke="#38DD1D" strokeWidth="3"/>
                    </svg>
                    <p>相手の視界に入る位置までゆっくり近づき、適度な大きさの声で名前を呼ぶ。</p>
                    <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.2373 8.53936C13.7859 8.93873 13.7859 9.75692 13.2373 10.1563L2.43644 18.0189C1.77552 18.5001 0.847901 18.028 0.847901 17.2105L0.8479 1.48519C0.8479 0.667692 1.77552 0.195593 2.43644 0.676718L13.2373 8.53936Z" fill="#0C2E2C"/>
                    </svg>
                  </div>
                  {isActive1 && (
                  <div>{/*divの中が消える*/}
                    <div className={styles.Explanation}>
                      <p className={styles.ExplanationTitle}>解説</p>
                      <p className={styles.ExplanationText}>相手の様子を見極めながら適切なタイミングで声をかけることが大切です。</p>
                    </div>
                  </div>
                    )}
                </li>
                <li className={`${styles.clickBox} ${isActive2 ? styles.clickBox2 : ''} ${styles.IncorrectAnswer}`} onClick={handleClick2}>{/*ここを押したときに*/}
                  <div className={styles.choiceFlex}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6L18 18M18 6L6 18" stroke="#FD473B" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    <p>一方的に話し続け、相手に話す機会を与えない。</p>
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2373 8.1917C13.7859 8.59107 13.7859 9.40927 13.2373 9.80864L2.43644 17.6713C1.77552 18.1524 0.847901 17.6803 0.847901 16.8628L0.8479 1.13753C0.8479 0.320035 1.77552 -0.152064 2.43644 0.329061L13.2373 8.1917Z" fill="#FD473B"/>
                    </svg>
                  </div>
                  {isActive2 && (
                  <div>{/*divの中が消える*/}
                    <div className={styles.IncorrectAnswerColor}>
                      <p className={styles.ExplanationTitle}>解説</p>
                      <p className={styles.ExplanationText}>相手の様子を見極めながら適切なタイミングで声をかけることが大切です。</p>
                    </div>
                  </div>
                    )}
                </li>
                <li className={`${styles.clickBox} ${isActive3 ? styles.clickBox2 : ''}`} onClick={handleClick3}>{/*ここを押したときに*/}
                  <div className={styles.choiceFlex}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6L18 18M18 6L6 18" stroke="#FD473B" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    <p>プライベートな内容を質問する。</p>
                    <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.2373 8.53936C13.7859 8.93873 13.7859 9.75692 13.2373 10.1563L2.43644 18.0189C1.77552 18.5001 0.847901 18.028 0.847901 17.2105L0.8479 1.48519C0.8479 0.667692 1.77552 0.195593 2.43644 0.676718L13.2373 8.53936Z" fill="#0C2E2C"/>
                    </svg>
                  </div>
                  {isActive3 && (
                  <div>{/*divの中が消える*/}
                    <div className={styles.Explanation}>
                      <p className={styles.ExplanationTitle}>解説</p>
                      <p className={styles.ExplanationText}>相手の様子を見極めながら適切なタイミングで声をかけることが大切です。</p>
                    </div>
                  </div>
                    )}
                </li>
                <li className={`${styles.clickBox} ${isActive4 ? styles.clickBox2 : ''}`} onClick={handleClick4}>{/*ここを押したときに*/}
                  <div className={styles.choiceFlex}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6L18 18M18 6L6 18" stroke="#FD473B" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    <p>携帯を無作法に取り上げようとする。</p>
                    <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.2373 8.53936C13.7859 8.93873 13.7859 9.75692 13.2373 10.1563L2.43644 18.0189C1.77552 18.5001 0.847901 18.028 0.847901 17.2105L0.8479 1.48519C0.8479 0.667692 1.77552 0.195593 2.43644 0.676718L13.2373 8.53936Z" fill="#0C2E2C"/>
                    </svg>
                  </div>
                  {isActive4 && (
                  <div>{/*divの中が消える*/}
                    <div className={styles.Explanation}>
                      <p className={styles.ExplanationTitle}>解説</p>
                      <p className={styles.ExplanationText}>相手の様子を見極めながら適切なタイミングで声をかけることが大切です。</p>
                    </div>
                  </div>
                    )}
                </li>
              </ul>
            </div>
          </div>
        </main>
        <footer>
          <div className={`${styles.Modal} ${isClassAdded ? styles.Modal2 : ''} `}>
          <a href="/components/theme/">テーマに戻る</a>
          <a href="/components/question/" className={styles.NextBtn}>次に進む</a>
          </div>
        </footer>
      </div>
    </>
  );
}

