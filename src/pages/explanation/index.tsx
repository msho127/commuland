import React, { useState } from 'react';
import style from '@/styles/explanation/index.module.scss'
// import { useCallback,useEffect } from 'react'




export default function explanation(){


  const [isVisible, setIsVisible] = useState(false);
  const [isSpeechBubbleVisible, setIsSpeechBubbleVisible] = useState(true);
  const [isAnswerContentMoved, setIsAnswerContentMoved] = useState(false);
  const [clickedAnswer, setClickedAnswer] = useState<number | null>(null);


  const handleClick = (answerIndex: number) => {
    setIsVisible(true);
    setIsSpeechBubbleVisible(false);
    setIsAnswerContentMoved(true);
    setClickedAnswer(answerIndex);
  };
  const answerContentClass = `${style.answerContent} ${isAnswerContentMoved ? style.moveUp : ''}`;


  
  return(
    <>
      <div>
        <div className={style.container}>
          <header className={style.chapter}>
            <p>CHAPTER</p>
            <h3>友人</h3>
            <div className={style.backArrow}>
              <figure>
                <a href="/themePage"><img src="/images/backArrow.png" alt="" /></a>
              </figure>
            </div>
          </header>
          <main>
            <div className={style.questionContent}>
              <div className={style.levelText}>
                <h4>レベル1</h4>
                <h4>朝</h4>
              </div>
              <div className={style.question}>
                <h3>お題お題お題お題でしょう？</h3>
                <p>問題問題問題問題問題問題問題問題問題問題問題問題問題問題。</p>
              </div>
              {isSpeechBubbleVisible && (
                <div className={style.speechBubble}>
                  <p>それぞれの解答をタップして解説を見てみよう！</p>
                </div>
              )}
            </div>
            <div className={answerContentClass}>
              <div className={`${style.answer} ${style.circle}`}>
                <a href="#">1.<span>休み時間</span></a>
              </div>
              <div className={`${style.answer} ${style.clickColor} ${clickedAnswer === 1 ? style.changeColor : ''}`}>
                <a href="#" onClick={() => handleClick(1)}>
                  1.<span>休み時間</span>
                </a>
              </div>
              <div className={style.answer}>
                <a href="#">1.<span>休み時間</span></a>
              </div>
              <div className={style.answer}>
                <a href="#">1.<span>休み時間</span></a>
              </div>
            </div>
            <div className={`${style.explanationContent} ${isVisible ? style.show : ''}`}>
              <div className={style.explanation}>
                <h2>2. 不正解</h2>
                <p>解説</p>
                <h4>休み時間休み時間休み時間休み時間休み時間休み時間休み時間休み時間休み時間</h4>
                <a href="/question">次に進む</a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
