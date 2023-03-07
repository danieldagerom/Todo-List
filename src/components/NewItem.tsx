import styles from './NewItem.module.css'

interface ItemProps {
    content: string;
}

export function NewItem( { content }: ItemProps ) {
    
    return (
        <div className={styles.item}>
            <input type="checkbox" className={styles.checkBox}/>
            <p>{content}</p>
        </div>
    )
}