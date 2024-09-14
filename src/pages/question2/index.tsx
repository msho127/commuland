import React from 'react'
import style from '@/styles/question/index.module.scss'
import { useCallback,useEffect } from 'react'




export default function question(){



  // const handleClick = useCallback((e) =>{
  //   console.log(e.target);
  //   // style.changeColor.background = "#6ACFCF"
  //   // e.preventDefault();
  //   // alert(foo);
  // },[])



  // useEffect(() =>{
  //   console.log("マウント時");
  //   document.body.style.background = "tomato"
    
  //   return() =>{
  //     console.log("アンマウント時");
  //   document.body.style.background = ""
  //   }
  // },[])

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
              {/* <nav>
                <ul className={style.gageContent}>
                  <li className={style.gage}></li>
                  <li className={style.gage}></li>
                  <li className={style.gage}></li>
                  <li className={style.gage}></li>
                </ul>
              </nav> */}
              <div className={style.question}>
                <h3>お題お題お題お題でしょう？</h3>
                <p>問題問題問題問題問題問題問題問題問題問題問題問題問題問題。</p>
              </div>
            </div>
            <div className={style.answerContent}>
              <div className={`${style.answer} ${style.circle}`}>
                <a href="#">1.<span>休み時間</span></a>
              </div>
              <div className={`${style.answer} ${style.changeColor}`}>
                <a href="/explanation" 
                // onClick={handleClick}
                >
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
          </main>
        </div>
      </div>
    </>
  )
}