import { ChangeEvent, FormEvent, useState } from 'react';
import { NewItem } from './NewItem'
import styles from './Item.module.css'

export function Item () {
    const [items, setItems] = useState([
        'Jogar o lixo fora'
    ])

    const [newItemText, setNewItemText] = useState('')

    function handleCreateNewItem(event: FormEvent){
        event.preventDefault()

        setItems([...items, newItemText])
        setNewItemText('')
    }

    function handleNewItemChange (event: ChangeEvent<HTMLTextAreaElement>) {
        setNewItemText(event.target.value)
    }

    return (
        <div className={styles.itemBox}>
            <form onSubmit={handleCreateNewItem}>
                <textarea 
                    name="item" 
                    placeholder='Adicione uma nova tarefa' 
                    maxLength={75}
                    value={newItemText}
                    onChange={handleNewItemChange}
                >
                </textarea>
            </form>

            <div>
                {items.map (item => {
                    return <NewItem content={item}/>
                })}
            </div>
        </div>
    );
}