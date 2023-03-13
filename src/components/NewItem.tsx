import styles from './NewItem.module.css'
import { Trash } from 'phosphor-react';

interface ItemProps {
    content: string;
    onDeleteItem: (item: string) => void;
    onCompleteItem: (item: string) => void;
}

export function NewItem( { content, onCompleteItem ,onDeleteItem }: ItemProps ) {
    
    function handleDeleteItem() {
        onDeleteItem(content)
    }

    return (
        <div className={styles.item}>
            <input type="checkbox"/>
            <p>{content}</p>
            <button onClick={handleDeleteItem} title='Deletar item'>
                <Trash size={24} />
            </button>
        </div>
    )
}