import { useState } from 'react';
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';import 'swiper/css';
import 'swiper/css/navigation';

import styles from "@/styles/theme/theme.module.scss";

import img1 from "/public/imgs/person/1.png";
import img2 from "/public/imgs/person/2.png";
import img3 from "/public/imgs/person/3.png";


export default function Home(){

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);


  const handleClick1 = () => {
    setIsActive1(!isActive1);
  };

  const handleClick2 = () => {
    setIsActive2(!isActive2);
  };

  const handleClick3 = () => {
    setIsActive3(!isActive3);
  };

  function Right(){
    console.log("aaa");
  }

  function Left(){
    console.log("iii");
  }


  
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
            <h2>学校</h2>
            <p>THEME 1</p>
          </section>
          <img src="" alt="" />
        </header>
        <main>
          <div className={styles.character}>
            <Swiper
              modules={[Navigation , A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide><Image src={img1} alt='友人' className={styles.characters} /><br/>友人</SwiperSlide>
              <SwiperSlide><Image src={img2} alt='友人2' className={styles.characters} /><br/>先輩</SwiperSlide>
              <SwiperSlide><Image src={img3} alt='友人3' className={styles.characters} /><br/>先生</SwiperSlide>
            </Swiper>
          </div>
          <ul>
            <li  className={styles.ExtraTitle}>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8675 12.6C19.6087 12.2625 19.2937 11.97 19.0012 11.6775C18.2475 11.0025 17.3925 10.5188 16.6725 9.81C14.9962 8.1675 14.625 5.45625 15.6937 3.375C14.625 3.63375 13.6912 4.21875 12.8925 4.86C9.97874 7.2 8.83124 11.3288 10.2037 14.8725C10.2487 14.985 10.2937 15.0975 10.2937 15.2438C10.2937 15.4913 10.125 15.7163 9.89999 15.8063C9.64124 15.9188 9.37125 15.8513 9.1575 15.6713C9.09365 15.6178 9.04025 15.5529 8.99999 15.48C7.72874 13.8713 7.52624 11.565 8.38124 9.72C6.50249 11.25 5.47874 13.8375 5.62499 16.2788C5.69249 16.8413 5.75999 17.4038 5.95124 17.9663C6.10874 18.6413 6.41249 19.3163 6.74999 19.9125C7.96499 21.8588 10.0687 23.2538 12.33 23.535C14.7375 23.8388 17.3137 23.4 19.1587 21.735C21.2175 19.8675 21.9375 16.875 20.88 14.31L20.7337 14.0175C20.4975 13.5 19.8675 12.6 19.8675 12.6ZM16.3125 19.6875C15.9975 19.9575 15.48 20.25 15.075 20.3625C13.815 20.8125 12.555 20.1825 11.8125 19.44C13.1512 19.125 13.95 18.135 14.1862 17.1338C14.3775 16.2338 14.0175 15.4913 13.8712 14.625C13.7362 13.7925 13.7587 13.0838 14.0625 12.3075C14.2762 12.735 14.5012 13.1625 14.7712 13.5C15.6375 14.625 16.9987 15.12 17.2912 16.65C17.3362 16.8075 17.3587 16.965 17.3587 17.1338C17.3925 18.0563 16.9875 19.0688 16.3125 19.6875Z" fill="#FD473B"/>
                </svg>
                <h3>EXTRA</h3>
            </li>
            <li className={styles.ExtraWrap}>
              <section className={styles.ExtraBox}>
                <h3>総集問題にチャレンジ！</h3>
                <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.06846 10.3546L9.40777 10.006L9.06846 9.65726L0.576462 0.930255L0.576483 0.930236L0.572712 0.926442C0.549405 0.902997 0.530979 0.875163 0.5185 0.84455C0.506022 0.813941 0.499738 0.781159 0.500013 0.748107C0.500288 0.715053 0.507115 0.68238 0.5201 0.651979C0.533087 0.621577 0.551971 0.594056 0.57566 0.571006C0.59935 0.547956 0.627379 0.52983 0.658127 0.517678C0.688864 0.50553 0.72171 0.499599 0.754761 0.500228C0.787815 0.500859 0.820413 0.508037 0.850671 0.521346C0.88093 0.534658 0.908245 0.553834 0.931039 0.577769L0.931018 0.577788L0.934752 0.581626L9.93474 9.83162C9.93475 9.83162 9.93475 9.83163 9.93475 9.83163C9.98015 9.8783 10.0056 9.94084 10.0056 10.006C10.0056 10.0711 9.98015 10.1336 9.93475 10.1803C9.93475 10.1803 9.93475 10.1803 9.93474 10.1803L0.934751 19.4303L0.934731 19.4303L0.931039 19.4341C0.908241 19.4581 0.880924 19.4772 0.850667 19.4906C0.82041 19.5039 0.787813 19.511 0.754763 19.5117C0.721711 19.5123 0.688863 19.5064 0.658122 19.4942C0.627379 19.4821 0.599351 19.4639 0.575661 19.4409C0.551969 19.4178 0.533083 19.3903 0.520099 19.3599C0.507114 19.3295 0.500286 19.2968 0.500012 19.2638C0.499737 19.2307 0.50602 19.198 0.518498 19.1673C0.530978 19.1367 0.549403 19.1089 0.572708 19.0855L0.572728 19.0855L0.57646 19.0816L9.06846 10.3546Z" fill="#F9FFFF" stroke="#F9FFFF"/>
                </svg>
              </section>
            </li>
            <li className={`${styles.clickBox} ${isActive1 ? styles.clickBox2 : ''}`} onClick={handleClick1}>{/*ここを押したときに*/}
              <section className={styles.LevelGrid}>
                <h3>Level 1</h3>
                <svg className={isActive1 ? styles.rotate : ''} width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2372 8.1917C13.7858 8.59107 13.7858 9.40927 13.2372 9.80864L2.43635 17.6713C1.77543 18.1524 0.847809 17.6803 0.847809 16.8628L0.847809 1.13753C0.847809 0.320035 1.77543 -0.152064 2.43635 0.329061L13.2372 8.1917Z" fill="#1B6B66"/>
                </svg>
                <div className={styles.achievementRate}>
                  <p>達成率</p>
                  <div className={styles.achievement}>
                    <div className={styles.achievementList}></div>
                    <div className={styles.achievementList}></div>
                    <div className={styles.achievementList}></div>
                    <div className={styles.achievementList}></div>
                  </div>
                </div>
              </section>
              {isActive1 && (
              <div>{/*divの中が消える*/}
                <a href='question' className={styles.assignment}>
                  <p>朝</p>
                </a>
                <a href='question' className={styles.assignment}>
                  <p>お昼休み</p>
                </a>
                <a href='question' className={styles.assignment}>
                  <p>放課後</p>
                </a>
                <a href='question' className={styles.assignment}>
                  <p>帰り道</p>
                </a>
              </div>
                )}
            </li>
            <li className={`${styles.clickBox} ${isActive2 ? styles.clickBox2 : ''}`} onClick={handleClick2}>{/*ここを押したときに*/}
              <section className={styles.LevelGrid}>
                <h3>Level 2</h3>
                <svg className={isActive2 ? styles.rotate : ''} width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2372 8.1917C13.7858 8.59107 13.7858 9.40927 13.2372 9.80864L2.43635 17.6713C1.77543 18.1524 0.847809 17.6803 0.847809 16.8628L0.847809 1.13753C0.847809 0.320035 1.77543 -0.152064 2.43635 0.329061L13.2372 8.1917Z" fill="#1B6B66"/>
                </svg>
                <div className={styles.achievementRate}>
                  <p>達成率</p>
                  <div className={styles.achievement}>
                    <div className={styles.achievementClearList}></div>
                    <div className={styles.achievementClearList}></div>
                    <div className={styles.achievementList}></div>
                    <div className={styles.achievementList}></div>
                  </div>
                </div>
              </section>
              {isActive2 && (
              <div>{/*divの中が消える*/}
                <div className={styles.assignment}>
                  <p>朝</p>
                </div>
                <div className={styles.clear}>
                  <p>お昼休み</p>
                </div>
                <div className={styles.clear}>
                  <p>放課後</p>
                </div>
                <div className={styles.assignment}>
                  <p>帰り道</p>
                </div>
              </div>
                )}
            </li>
            <li className={`${styles.clickBox} ${isActive3 ? styles.clickBox2 : ''}`} onClick={handleClick3}>{/*ここを押したときに*/}
              <section className={styles.LevelGrid}>
                <h3>Level 3</h3>
                <svg className={isActive3 ? styles.rotate : ''} width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2372 8.1917C13.7858 8.59107 13.7858 9.40927 13.2372 9.80864L2.43635 17.6713C1.77543 18.1524 0.847809 17.6803 0.847809 16.8628L0.847809 1.13753C0.847809 0.320035 1.77543 -0.152064 2.43635 0.329061L13.2372 8.1917Z" fill="#1B6B66"/>
                </svg>
                <div className={styles.achievementRate}>
                  <p>達成率</p>
                  <div className={styles.achievement}>
                    <div className={styles.achievementList}></div>
                    <div className={styles.achievementList}></div>
                    <div className={styles.achievementList}></div>
                    <div className={styles.achievementList}></div>
                  </div>
                </div>
              </section>
              {isActive3 && (
              <div>{/*divの中が消える*/}
                <div className={styles.assignment}>
                  <p>朝</p>
                </div>
                <div className={styles.assignment}>
                  <p>お昼休み</p>
                </div>
                <div className={styles.assignment}>
                  <p>放課後</p>
                </div>
                <div className={styles.assignment}>
                  <p>帰り道</p>
                </div>
              </div>
                )}
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}

