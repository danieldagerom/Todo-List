import styles from './Header.module.css'

import Todologo from '../assets/logo.svg'

export function Header(){
    return (
        <strong className={styles.header}>
            <img src={Todologo} alt="Logo da Aplicação" />
        </strong>
    )
}