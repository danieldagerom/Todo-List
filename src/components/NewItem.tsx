import styles from './NewItem.module.css'
import { Trash } from 'phosphor-react';

interface ItemProps {
    content: string;
}

export function NewItem( { content }: ItemProps ) {
    
    return (
        <div className={styles.item}>
            <input type="checkbox" className={styles.checkBox}/>
            <p>{content}</p>
            <button title='Deletar item'>
                <Trash size={24} />
            </button>
        </div>
    )
}