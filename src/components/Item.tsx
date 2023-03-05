import styles from './Item.module.css'

export function Item () {
    return (
        <div className={styles.itemBox}>
            <textarea name="" placeholder='Adicione uma nova tarefa' maxLength={75}></textarea>
        </div>
    );
}