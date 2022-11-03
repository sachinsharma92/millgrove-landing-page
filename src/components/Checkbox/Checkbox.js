import React from 'react';
import styles from './Checkbox.module.scss'

const Checkbox = () => {

    return <div class={styles.round}>
        <input type="checkbox" checked id="checkbox" />
        <label for="checkbox"></label>
    </div>
}

export default Checkbox