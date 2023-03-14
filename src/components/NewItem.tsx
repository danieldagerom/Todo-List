import styles from './NewItem.module.css'
import { Trash } from 'phosphor-react';

interface ItemProps {
    itemId: string;
    content: string;
    onDeleteItem: (item: string) => void;
    onCompleteItem: (item: string) => void;
}

export function NewItem( { itemId, content, onCompleteItem ,onDeleteItem }: ItemProps ) {
    
    function handleDeleteItem() {
        onDeleteItem(content)
    }

    return (
        <div className={styles.item}>
            <input onClick={() => onCompleteItem(itemId)} type="checkbox"/>
            <p>{content}</p>
            <button onClick={handleDeleteItem} title='Deletar item'>
                <Trash size={24} />
            </button>
        </div>
    )
}