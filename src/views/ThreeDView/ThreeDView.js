import React from "react"
import styles from "./ThreeDView.module.scss"
import threeDView from "../../assets/images/threeD-view.png"
import Button from "components/Button"
import { LeftArrow, RightArrow } from "assets/icons/icons"


const customStyles={color:"#F9F6ED",border:"1.5px solid #F9F6ED"}
const ThreeDView = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
            <div className={styles.heading}>
                <h2 className={styles.first}>
                    Shape your life
                </h2>
                <h2 className={styles.second}>On</h2>
                <h2 className={styles.third}>Your own land</h2>
            </div>
            <div className={styles.description}>
                <p>
                Millgrove extends an unparalleled offering to a select few - a rare chance to own a 1000 square yard plot inclusive of an exquisite independent home. With an ambition to kindle a small, tight-knit community of free-thinking individuals, we have thoughtfully arranged only a limited number of plots over our lush 23-acre estate.
                </p>
            </div>
        </div>
        <div className={styles.threeDView}>
            <img src={threeDView} alt="Three-D view of millgrove properties site" width="100%"/>
            <Button classname={styles.interactBtn} customStyles={customStyles} type={"secondary"} text="INTERACT WITH MAP" leftIcon={<LeftArrow color="#F9F6ED"/>} rightIcon={<RightArrow color="#F9F6ED"/>}/>
        </div>
    </div>
  )
}

export default ThreeDView