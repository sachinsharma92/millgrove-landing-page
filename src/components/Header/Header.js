import React from 'react';
import Button from 'components/Button';
import { MENU_FOLDS, MILLGROVE_WHITE_LOGO } from "../../utils/assets"
import styles from './Header.module.scss';


const customStyles={color:"#404040",borderColor:"#404040"}

const Header = ({ children, defaultElements = true }) => {
    return (
        <header className={styles.header}>
            {defaultElements && <Button customStyles={customStyles} text="MENU" type={'secondary'} leftIcon={<MENU_FOLDS style={{stroke:"#404040"}} />} />}
            {defaultElements && <h2><MILLGROVE_WHITE_LOGO style={{color:"#404040"}} /></h2>}
            {defaultElements && <Button customStyles={customStyles} type={'secondary'} text="LOGIN"/>}
            {!defaultElements && children}
        </header>
    )
}

export default Header