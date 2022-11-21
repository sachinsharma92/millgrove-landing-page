import React from 'react';
import styles from './Button.module.scss'

const Button = ({ classname, leftIcon, rightIcon, text, customStyles, type, isRounded, clickhandler = () => { } }) => {

    const getClassname = (btnType) => {
        switch (btnType) {
            case 'primary': {
                return styles.primary
            }
            case 'secondary': {
                return styles.secondary
            }
            default: {
                return styles.primary
            }
        }
    }

    return (
        <button onClick={clickhandler} className={`${classname} ${getClassname(type)} ${styles.btn} ${isRounded && styles.rounded}`} style={customStyles && { ...customStyles }}>
            {leftIcon && <span className={styles.btnIcon}>{leftIcon}</span>}
            {text && <span className={styles.btnText}>{text}</span>}
            {rightIcon && <span className={styles.btnIcon}>{rightIcon}</span>}
        </button>
    )
}

export default Button