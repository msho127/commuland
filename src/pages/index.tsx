import Image from "next/image";
import home from "@/styles/home/home.module.scss";
import React, { useState } from 'react';
import iconImage from "/public/imgs/icon.png";
import backImg from "/public/imgs/bgImg.png";
import school from "/public/imgs/schoolbox.png"


export default function Home(){
  return(
    <>
      <div>
        <header className={home.homeHeader}>
          <div className={home.content}>
            <div className={home.body}>
              <div className={home.head}>
                <div className={home.user}>
                  <Image src={iconImage} alt="ユーザーアイコン" className={home.icon} height={50} width={50} />
                  <section>
                    <h3 className={home.userName}>こんにちは、福村さん。</h3>
                    <p className={home.userText}>今日の調子はどうですか?</p>
                  </section>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="#FCFCFC"/>
                </svg>
              </div>
              <div className={home.evaluationWrrap} id={home.myid}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={home.trophy}>
                <g filter="url(#filter0_i_503_212)">
                <path fillRule="evenodd" clipRule="evenodd" d="M20 2.00003C16.344 2.00003 12.754 2.29803 9.258 2.87003C8.90685 2.92743 8.58753 3.1078 8.35709 3.37891C8.12665 3.65001 8.00008 3.99421 8 4.35003V5.12403C6.34667 5.43736 4.71667 5.81336 3.11 6.25203C2.80106 6.33639 2.52723 6.51741 2.32858 6.7686C2.12994 7.01979 2.01689 7.32797 2.006 7.64803L2 8.00003C1.99977 10.4813 2.92202 12.874 4.58754 14.7133C6.25305 16.5525 8.54287 17.7069 11.012 17.952C12.575 19.7195 14.6245 20.987 16.904 21.596C16.7141 23.1338 16.2508 24.6253 15.536 26H15C14.2044 26 13.4413 26.3161 12.8787 26.8787C12.3161 27.4413 12 28.2044 12 29V34H10.5C9.12 34 8 35.12 8 36.5C8 37.328 8.672 38 9.5 38H30.5C30.8978 38 31.2794 37.842 31.5607 37.5607C31.842 37.2794 32 36.8979 32 36.5C32 35.12 30.88 34 29.5 34H28V29C28 28.2044 27.6839 27.4413 27.1213 26.8787C26.5587 26.3161 25.7957 26 25 26H24.464C23.7492 24.6253 23.2859 23.1338 23.096 21.596C25.3755 20.987 27.425 19.7195 28.988 17.952C31.5176 17.7009 33.8567 16.4959 35.5296 14.5818C37.2025 12.6678 38.0837 10.1885 37.994 7.64803C37.9831 7.32797 37.8701 7.01979 37.6714 6.7686C37.4728 6.51741 37.1989 6.33639 36.89 6.25203C35.2754 5.81224 33.6441 5.43595 32 5.12403V4.35003C31.9999 3.99421 31.8734 3.65001 31.6429 3.37891C31.4125 3.1078 31.0932 2.92743 30.742 2.87003C27.191 2.28768 23.5984 1.99671 20 2.00003ZM5.05 8.84403C6.02333 8.60136 7.00667 8.38003 8 8.18003V10C8 11.48 8.268 12.896 8.76 14.206C7.75319 13.6806 6.88934 12.9181 6.243 11.9842C5.59665 11.0504 5.18721 9.97139 5.05 8.84403ZM34.95 8.84603C34.813 9.97319 34.4039 11.0501 33.7579 11.9839C33.1119 12.9177 32.2484 13.6803 31.242 14.206C31.7443 12.8607 32.001 11.4361 32 10V8.18003C32.992 8.3787 33.9753 8.60203 34.95 8.84603Z" fill="#FFC13A"/>
                </g>
                <defs>
                <filter id="filter0_i_503_212" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="-2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_503_212"/>
                </filter>
                </defs>
                </svg>
                <div className={home.evaluationBox}>
                  <p className={home.number}>10</p>
                  <p className={home.evaluation}>evaluation</p>
                </div>
                <p className={home.evaluationText}>復習する問題が追加されました！<br />さっそく家に行ってみよう。</p>
              </div>
            </div>
            <div className={home.dragWrap}>
              <div className={home.dragIcon} >
                <span className={home.dragSpan}></span>
              </div>
            </div>
          </div>
        </header>
        <main className={home.background}>
          <a href="components/theme">
            <Image src={school} alt="学校" className={home.school} />
            <Image src={backImg} alt="平原の風景" id={home.backImg} />
          </a>
        </main>
        <footer>
        </footer>
      </div>
    </>
  );
}

