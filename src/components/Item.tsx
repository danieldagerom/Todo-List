import { ChangeEvent, FormEvent, useState } from 'react';
import { NewItem } from './NewItem'
import { PlusCircle } from 'phosphor-react';
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
        <div>
            <form className={styles.itemBox} onSubmit={handleCreateNewItem}>
                <textarea 
                    name="item" 
                    placeholder='Adicione uma nova tarefa' 
                    value={newItemText}
                    onChange={handleNewItemChange}
                >
                </textarea>

                <button type='submit'> 
                    Criar 
                    <PlusCircle size={20}/>
                </button>
            </form>

            <div>
                {items.map (item => {
                    return <NewItem content={item}/>
                })}
            </div>
        </div>
    );
}