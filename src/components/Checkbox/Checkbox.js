import React, { useState } from 'react';
import styles from './Checkbox.module.scss'

const Checkbox = ({ isChecked, setIsChecked }) => {
    // const [isChecked, setIsChecked] = useState(false)
    return <div class={styles.round}>
        <input onChange={() => setIsChecked(!isChecked)} type="checkbox" checked={isChecked} id="checkbox" />
        <label onClick={() => setIsChecked(!isChecked)} for="checkbox"></label>
    </div>
}

export default Checkbox