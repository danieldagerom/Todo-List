import { ChangeEvent, FormEvent, useState } from 'react';
import { NewItem } from './NewItem'
import { PlusCircle } from 'phosphor-react';
import styles from './Item.module.css'

interface Item {
    id: string;
    content: string;
    isCompleted: boolean;
}

export function Item () {
    const [items, setItems] = useState<Item[]>([])

    const [newItemText, setNewItemText] = useState('')

    function handleCreateNewItem(event: FormEvent){
        event.preventDefault()
        setItems([...items, 
                {id: crypto.randomUUID(), 
                content: newItemText, 
                isCompleted: false}])
        
        setNewItemText('')
    }

    function handleNewItemChange (event: ChangeEvent<HTMLTextAreaElement>) {
        setNewItemText(event.target.value)
    }

    function deleteItem(itemToDelete: string) {
        const itemsWithoutDeletedOne = items.filter(item => {
            return item.content !== itemToDelete
        })

        setItems(itemsWithoutDeletedOne)
    }

    function toggleItemsCompleted(itemId: string) {
        const completedItems = items.map(item => {
            if (item.id === itemId) {
                return {
                    ...item, 
                    isCompleted: !item.isCompleted,
                }
            }
            return item;
        })
        setItems(completedItems)
    }

    const isNewItemEmpty = newItemText.length === 0

    const completedItems = items.filter(item => item.isCompleted).length;

    return (
        <div>
            <form className={styles.itemBox} onSubmit={handleCreateNewItem}>
                <textarea 
                    name="item" 
                    placeholder='Adicione uma nova tarefa' 
                    value={newItemText}
                    onChange={handleNewItemChange}
                    maxLength={73}
                >
                </textarea>

                <button type='submit' disabled={isNewItemEmpty}> 
                    Criar 
                    <PlusCircle size={20}/>
                </button>
            </form>

            <div className={styles.itemsAnalytics}>
                <p>Tarefas Criadas: <span>{items.length}</span></p>
                <p>Concluidas: <span>{completedItems} de {items.length}</span></p>
            </div>

            <div>
                {items.map (item => {
                    return <NewItem 
                                itemId={item.id}
                                content={item.content} 
                                onCompleteItem={toggleItemsCompleted} 
                                onDeleteItem={deleteItem}
                            />
                })}
            </div>
        </div>
    );
}