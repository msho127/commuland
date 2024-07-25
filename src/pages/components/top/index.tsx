import styles from "@/styles/top/top.module.scss"
import Image from "next/image"

export default function top(){
  return(
    <>
      <div>
        <div className={styles.bg}>
          <div className={styles.balloon}>
            <p className={styles.topText}>新たな一歩を踏み出そう</p>
            <Image src={"/imgs/komyu.png"} alt="サービスアイコン" className={styles.appIcon}  />
          </div>
        </div>
      </div>
    </>
  )
}